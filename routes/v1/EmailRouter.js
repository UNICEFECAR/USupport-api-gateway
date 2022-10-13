import express from "express";
import fetch from "node-fetch";

const router = express.Router();

const EMAIL_LOCAL_HOST = "http://localhost:3008";

const EMAIL_URL = process.env.EMAIL_URL;

router.route("/admin").post(async (req, res) => {
  // TODO: Add authentication middleware
  /**
   * #route   POST /api/v1/email/admin/
   * #desc    Send email
   */

  const response = await fetch(`${EMAIL_URL}/email/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: EMAIL_LOCAL_HOST,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

export { router };
