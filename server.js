import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";

import v1 from "#routes/index";
import middleware from "#middlewares/index";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

/*------------- Security Config -------------*/

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

/*------------- API Gateway Service Endpoints -------------*/

app.use("/api/v1/email", v1.EmailRouter);
app.use("/api/v1/video", v1.VideoRouter);
app.use("/api/v1/user", v1.UserRouter);

/*------------- Error middleware -------------*/

app.use(middleware.errorMiddleware.notFound);
app.use(middleware.errorMiddleware.errorHandler);

app.listen(PORT, () => {
  console.log(`API Gateway Server listening on port ${PORT}`);
});
