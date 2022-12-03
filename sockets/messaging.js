import fetch from "node-fetch";

export const MessagingSocket = (io) => {
  const MESSAGING_LOCAL_HOST = "http://localhost:3006";

  const MESSAGING_URL = process.env.MESSAGING_URL;

  io.on("connection", (socket) => {
    socket.on("join chat", async (payload) => {
      const { language, country, chatId, userType } = JSON.parse(payload);

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

    socket.on("send message", async (payload) => {
      const { language, country, chatId, to, message } = JSON.parse(payload);

      if (to === "client") {
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

          io.to(socketId).emit("receive message", message);
        }
      } else if (to === "provider") {
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

          io.to(socketId).emit("receive message", message);
        }
      }
    });
  });
};
