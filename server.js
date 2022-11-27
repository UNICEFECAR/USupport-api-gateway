import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";

import v1 from "#routes/index";
import middleware from "#middlewares/index";

import swaggerUi from "swagger-ui-express";

import { readFileSync } from "fs";
const swaggerFile = JSON.parse(
  readFileSync(new URL("./swaggerOutput.json", import.meta.url))
);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

/*------------- Security Config -------------*/

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

/*------------- Swagger Documentation -------------*/
app.use(
  "/doc",
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
app.use("/api/v1/video", v1.VideoRouter);

/*------------- Error middleware -------------*/

app.use(middleware.errorMiddleware.notFound);
app.use(middleware.errorMiddleware.errorHandler);

app.listen(PORT, () => {
  console.log(`API Gateway Server listening on port ${PORT}`);
});
