const USER_TYPES = ["client", "provider"];

// Every socket of a chat participant joins the room for its side of the chat,
// so messages reach all of that participant's current sockets (reconnects, multiple tabs/devices)
const getChatRoom = (chatId, userType) => `chat:${chatId}:${userType}`;

const isValidTarget = (chatId, userType) =>
  !!chatId && USER_TYPES.includes(userType);

export const MessagingSocket = (io) => {
  io.on("connection", (socket) => {
    socket.on("join chat", (payload) => {
      const { chatId, userType } = payload || {};
      if (!isValidTarget(chatId, userType)) return;

      socket.join(getChatRoom(chatId, userType));
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
