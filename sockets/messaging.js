import fetch from "node-fetch";

export const MessagingSocket = (io) => {
  const MESSAGING_LOCAL_HOST = "http://localhost:3006";

  const MESSAGING_URL = process.env.MESSAGING_URL;

  const getClientSocketId = async (language, country, chatId) => {
    const response = await fetch(
      `${MESSAGING_URL}/messaging/v1/client-socket?chatId=${chatId}`,
      {
        method: "GET",
        headers: {
          host: MESSAGING_LOCAL_HOST,
          "Content-type": "application/json",
          "x-language-alpha-2": language,
          "x-country-alpha-2": country,
        },
      }
    ).catch(console.log);

    if (response) {
      const { client_socket_id: socketId } = await response.json();

      return socketId;
    }
  };

  const getProviderSocketId = async (language, country, chatId) => {
    const response = await fetch(
      `${MESSAGING_URL}/messaging/v1/provider-socket?chatId=${chatId}`,
      {
        method: "GET",
        headers: {
          host: MESSAGING_LOCAL_HOST,
          "Content-type": "application/json",
          "x-language-alpha-2": language,
          "x-country-alpha-2": country,
        },
      }
    ).catch(console.log);

    if (response) {
      const { provider_socket_id: socketId } = await response.json();

      return socketId;
    }
  };

  io.on("connection", (socket) => {
    socket.on("join chat", async (payload) => {
      const { language, country, chatId, userType } = payload;

      if (userType === "client") {
        await fetch(`${MESSAGING_URL}/messaging/v1/client-socket`, {
          method: "PUT",
          headers: {
            host: MESSAGING_LOCAL_HOST,
            "Content-type": "application/json",
            "x-language-alpha-2": language,
            "x-country-alpha-2": country,
          },
          body: JSON.stringify({ chatId, socketId: socket.id }),
        }).catch(console.log);
      } else if (userType === "provider") {
        await fetch(`${MESSAGING_URL}/messaging/v1/provider-socket`, {
          method: "PUT",
          headers: {
            host: MESSAGING_LOCAL_HOST,
            "Content-type": "application/json",
            "x-language-alpha-2": language,
            "x-country-alpha-2": country,
          },
          body: JSON.stringify({ chatId, socketId: socket.id }),
        }).catch(console.log);
      }
    });

    socket.on("typing", async (payload) => {
      const { language, country, chatId, to, type } = payload;
      const socketId =
        to === "provider"
          ? await getProviderSocketId(language, country, chatId)
          : await getClientSocketId(language, country, chatId);
      io.to(socketId).emit("typing", type);
    });

    socket.on("send message", async (payload) => {
      const { language, country, chatId, to, message } = payload;

      const socketId =
        to === "provider"
          ? await getProviderSocketId(language, country, chatId)
          : await getClientSocketId(language, country, chatId);

      io.to(socketId).emit("receive message", message);
    });
  });
};
