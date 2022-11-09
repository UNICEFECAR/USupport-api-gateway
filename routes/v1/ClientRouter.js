import express from "express";
import fetch from "node-fetch";

import { authenticate } from "#middlewares/auth";

const router = express.Router();

const CLIENT_LOCAL_HOST = "http://localhost:3001";

const CLIENT_URL = process.env.CLIENT_URL;

router.route("/").get(authenticate, async (req, res) => {
  /**
   * #route   GET /api/v1/client
   * #desc    Get current client
   */

  const response = await fetch(`${CLIENT_URL}/client/v1/client${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: CLIENT_LOCAL_HOST,
      "Content-type": "application/json",
      "Cache-control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

export { router };
