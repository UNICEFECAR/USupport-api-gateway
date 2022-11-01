import express from "express";
import fetch from "node-fetch";

const router = express.Router();

const USER_LOCAL_HOST = "http://localhost:3010";

const USER_URL = process.env.USER_URL;

router.route("/").get(async (req, res) => {
  // TODO: Add middleware
  /**
   * #route   GET /api/v1/user
   * #desc    Get Current User
   */

  const response = await fetch(`${USER_URL}/user/v1/user${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
      "Content-type": "application/json",
    },
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/provider/signup").post(async (req, res) => {
  /**
   * #route   POST /api/v1/user/signup
   * #desc    Create new client or provider user account
   */
  const payload = { userType: "provider", ...req.body };

  const response = await fetch(`${USER_URL}/user/v1/auth/signup`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(payload) }),
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/signup").post(async (req, res) => {
  /**
   * #route   POST /api/v1/user/signup
   * #desc    Create new client or provider user account
   */
  const response = await fetch(`${USER_URL}/user/v1/auth${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/login").post(async (req, res) => {
  /**
   * #route   POST /api/v1/user/login
   * #desc    Login user with email or user access token
   */
  const response = await fetch(`${USER_URL}/user/v1/auth${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

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

  const result = await response?.json();

  return res.status(response?.status).send(result);
});

export { router };
