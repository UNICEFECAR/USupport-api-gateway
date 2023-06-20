import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

import v1 from "#routes/index";
import middleware from "#middlewares/index";
import { MessagingSocket } from "#sockets/index";

import swaggerUi from "swagger-ui-express";

import { readFileSync } from "fs";
const swaggerFile = JSON.parse(
  readFileSync(new URL("./swaggerOutput.json", import.meta.url))
);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

/*------------- Security Config -------------*/

// Configure CORS to allow requests only from your frontend
const allowedOrigins = [
  "https://staging.usupport.online",
  "https://usupport.online",
];

if (process.env.NODE_ENV === "development") {
  allowedOrigins.push(
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175",
    "http://localhost:5176",
    "http://localhost:5177"
  );
}

const customCorsMiddleware = (req, res, next) => {
  const corsOptions = {
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || isSameOrigin(req)) {
        // Handle same-origin request or allowed origin
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  };

  cors(corsOptions)(req, res, next);
};
// Function to check if the request is from the same origin
const isSameOrigin = (req) => {
  const { origin } = req.headers;
  const host = req.get("host");
  let hostAllowed = false;
  allowedOrigins.forEach((o) => {
    if (o.includes(host)) hostAllowed = true;
  });
  if ((!origin && hostAllowed) || hostAllowed) return true;
  if (!hostAllowed) return false;
  return false;
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(customCorsMiddleware);
app.use(
  cors({
    origin: allowedOrigins,
  })
);

/*------------- Swagger Documentation -------------*/

app.use(
  "/api/v1/doc",
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile, {
    swaggerOptions: { persistAuthorization: true },
  })
);

/*------------- API Gateway Service Endpoints -------------*/

app.use("/api/v1/user", v1.UserRouter);
app.use("/api/v1/client", v1.ClientRouter);
app.use("/api/v1/email", v1.EmailRouter);
app.use("/api/v1/admin", v1.AdminRouter);
app.use("/api/v1/provider", v1.ProviderRouter);
app.use("/api/v1/notifications", v1.NotificationsRouter);
app.use("/api/v1/messaging", v1.MessagingRouter);
app.use("/api/v1/payments", v1.PaymentsRouter);
app.use("/api/v1/video", v1.VideoRouter);

/*------------- Error middleware -------------*/

app.use(middleware.errorMiddleware.notFound);
app.use(middleware.errorMiddleware.errorHandler);

/*------------- Server Initialization -------------*/

const server = createServer(app);
const io = new Server(server, {
  path: "/api/v1/ws",
});

MessagingSocket(io);

server.listen(PORT, () => {
  console.log(`API Gateway Server listening on port ${PORT}`);
});
