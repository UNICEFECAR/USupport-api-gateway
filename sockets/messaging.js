const USER_TYPES = ["client", "provider"];

// A participant whose sockets all dropped is reported to the other side only after this delay,
// so short blips that reconnect on their own are not reported
const PEER_LOST_DELAY = 3000;
// Forget about participants that never came back after this time
const PEER_LOST_STATE_TTL = 2 * 60 * 60 * 1000;

// Every socket of a chat participant joins the room for its side of the chat,
// so messages reach all of that participant's current sockets (reconnects, multiple tabs/devices)
const getChatRoom = (chatId, userType) => `chat:${chatId}:${userType}`;

const getOtherUserType = (userType) =>
  userType === "client" ? "provider" : "client";

const isValidTarget = (chatId, userType) =>
  !!chatId && USER_TYPES.includes(userType);

export const MessagingSocket = (io) => {
  // Chat rooms whose participant lost connection: room -> timeout reporting it to the other side
  const pendingPeerLost = new Map();
  // Chat rooms whose participant was reported as lost to the other side: room -> cleanup timeout
  const lostRooms = new Map();
  // Chat rooms whose participant reported a poor connection
  const poorRooms = new Set();
  // Chat rooms whose participant has the consultation open (a dropped connection still counts as present,
  // that is reported separately as lost). Unlike the video room, this is not affected by the
  // participant's other devices or leftover sessions
  const presentRooms = new Set();

  const isRoomEmpty = (room) => !io.sockets.adapter.rooms.get(room)?.size;

  const markRoomLost = (room) => {
    clearTimeout(lostRooms.get(room));
    lostRooms.set(
      room,
      setTimeout(() => {
        lostRooms.delete(room);
        poorRooms.delete(room);
        presentRooms.delete(room);
      }, PEER_LOST_STATE_TTL)
    );
  };

  const clearRoomLost = (room) => {
    if (!lostRooms.has(room)) return false;
    clearTimeout(lostRooms.get(room));
    lostRooms.delete(room);
    return true;
  };

  io.on("connection", (socket) => {
    socket.on("join chat", (payload) => {
      const { chatId, userType } = payload || {};
      if (!isValidTarget(chatId, userType)) return;

      const room = getChatRoom(chatId, userType);
      const otherRoom = getChatRoom(chatId, getOtherUserType(userType));
      socket.join(room);
      socket.data.chat = { chatId, userType };

      // Reconnected before the drop was reported
      clearTimeout(pendingPeerLost.get(room));
      pendingPeerLost.delete(room);

      // Reconnected after the drop was reported
      if (clearRoomLost(room)) {
        socket.to(otherRoom).emit("peer connection", "restored");
      }

      // The other participant is currently disconnected
      if (lostRooms.has(otherRoom)) {
        socket.emit("peer connection", "lost");
      }

      // A new connection starts with an unknown quality and reports it again if it is still poor
      if (poorRooms.delete(room)) {
        socket.to(otherRoom).emit("peer quality", "good");
      }

      // The other participant currently has a poor connection
      if (poorRooms.has(otherRoom)) {
        socket.emit("peer quality", "poor");
      }

      if (!presentRooms.has(room)) {
        presentRooms.add(room);
        socket.to(otherRoom).emit("peer presence", "present");
      }

      // Whether the other participant has the consultation open
      socket.emit(
        "peer presence",
        presentRooms.has(otherRoom) ? "present" : "absent"
      );
    });

    socket.on("disconnect", (reason) => {
      const { chat } = socket.data;
      if (!chat) return;

      const room = getChatRoom(chat.chatId, chat.userType);

      // Disconnected on purpose (left the consultation or closed the page)
      if (reason === "client namespace disconnect") {
        if (isRoomEmpty(room)) {
          poorRooms.delete(room);
          presentRooms.delete(room);
          io.to(getChatRoom(chat.chatId, getOtherUserType(chat.userType))).emit(
            "peer presence",
            "absent"
          );
        }
        return;
      }

      if (!isRoomEmpty(room) || pendingPeerLost.has(room)) return;

      pendingPeerLost.set(
        room,
        setTimeout(() => {
          pendingPeerLost.delete(room);
          if (!isRoomEmpty(room)) return;

          markRoomLost(room);
          io.to(getChatRoom(chat.chatId, getOtherUserType(chat.userType))).emit(
            "peer connection",
            "lost"
          );
        }, PEER_LOST_DELAY)
      );
    });

    // Each participant reports the quality of its own connection, which is passed on to the other side.
    // The chat is sent along because this may arrive before "join chat" after a reconnect
    socket.on("connection quality", (payload) => {
      const { chatId, userType, quality } = payload || {};
      if (!isValidTarget(chatId, userType)) return;
      if (quality !== "poor" && quality !== "good") return;

      const room = getChatRoom(chatId, userType);
      const hasChanged =
        quality === "poor"
          ? !poorRooms.has(room) && !!poorRooms.add(room)
          : poorRooms.delete(room);

      if (hasChanged) {
        socket
          .to(getChatRoom(chatId, getOtherUserType(userType)))
          .emit("peer quality", quality);
      }
    });

    // Lets the client measure the round trip time of its connection
    socket.on("latency check", (ack) => {
      if (typeof ack === "function") ack();
    });

    socket.on("typing", (payload) => {
      const { chatId, to, type } = payload || {};
      if (!isValidTarget(chatId, to)) return;

      socket.to(getChatRoom(chatId, to)).emit("typing", type);
    });

    socket.on("send message", (payload) => {
      const { chatId, to, message } = payload || {};
      if (!isValidTarget(chatId, to)) return;

      socket.to(getChatRoom(chatId, to)).emit("receive message", message);
    });
  });
};
