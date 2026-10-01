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

  const isRoomEmpty = (room) => !io.sockets.adapter.rooms.get(room)?.size;

  const markRoomLost = (room) => {
    clearTimeout(lostRooms.get(room));
    lostRooms.set(
      room,
      setTimeout(() => lostRooms.delete(room), PEER_LOST_STATE_TTL)
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
    });

    socket.on("disconnect", (reason) => {
      const { chat } = socket.data;
      if (!chat) return;

      // Disconnected on purpose (left the consultation or closed the page)
      if (reason === "client namespace disconnect") return;

      const room = getChatRoom(chat.chatId, chat.userType);
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
