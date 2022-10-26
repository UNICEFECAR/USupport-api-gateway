import express from "express";
import fetch from "node-fetch";

const router = express.Router();

const USER_LOCAL_HOST = "http://localhost:3010";

const USER_URL = process.env.USER_URL;

router.route("/upload-file").post(async (req, res) => {
  // TODO: Add authentication middleware
  /**
   * #route   POST /api/v1/user/upload-file/
   * #desc    Upload file to AWS S3 bucket
   */

  const response = await fetch(`${USER_URL}/user/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
      "Content-type": "application/json",
    },
    body: req,
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

export { router };
