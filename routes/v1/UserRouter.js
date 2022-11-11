import express from "express";
import fetch from "node-fetch";

import { authenticate } from "#middlewares/auth";

const router = express.Router();

const USER_LOCAL_HOST = "http://localhost:3010";

const USER_URL = process.env.USER_URL;

router.route("/").get(authenticate, async (req, res) => {
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
      "Cache-control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/languages").get(async (req, res) => {
  /**
   * #route   GET /api/v1/user/languages
   * #desc    Get all active languages
   */

  const response = await fetch(`${USER_URL}/user/v1${req.url}`, {
    method: "GET",
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
      "Content-Type": "application/json",
      "Cache-control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/countries").get(async (req, res) => {
  /**
   * #route   GET /api/v1/user/countries
   * #desc    Get all countries
   */

  const response = await fetch(`${USER_URL}/user/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
      "Content-Type": "application/json",
      "Cache-control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/provider/signup").post(async (req, res) => {
  /**
   * #route   POST /api/v1/user/provider/signup
   * #desc    Create provider user account (Protected with admin permissions)
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
   * #desc    Create new client user account
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

router.route("/tmp-login").post(async (req, res) => {
  /**
   * #route   POST /api/v1/user/tmp-login
   * #desc    Temporrary login a user
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

router.route("/user-access-token").get(async (req, res) => {
  /**
   * #route   GET /api/v1/user/user-access-token
   * #desc    Generate new user access token for signup
   */
  const response = await fetch(`${USER_URL}/user/v1/auth${req.url}`, {
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

router.route("/refresh-token").post(async (req, res) => {
  /**
   * #route   POST /api/v1/user/refresh-token
   * #desc    Refresh JWT access token
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

router.route("/password").patch(authenticate, async (req, res) => {
  /**
   * #route   PATCH /api/v1/user/password
   * #desc    Change user's password
   */
  const response = await fetch(`${USER_URL}/user/v1/user${req.url}`, {
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

router
  .route("/rescue/forgot-password")
  .get(async (req, res) => {
    /**
     * #route   GET /api/v1/user/rescue/forgot-password
     * #desc    Initiate Forgot Password Process (Send email with token)
     */
    const response = await fetch(`${USER_URL}/user/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: USER_LOCAL_HOST,
      },
    }).catch(console.log);

    const result = await response.json();
    return res.status(response.status).send(result);
  })
  .post(async (req, res) => {
    /**
     * #route   POST /api/v1/user/rescue/forgot-password
     * #desc    Change user's password with forgot password secret token
     */

    const response = await fetch(`${USER_URL}/user/v1${req.url}`, {
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

router.route("/upload-file").post(authenticate, async (req, res) => {
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

router
  .route("/notification-preferences")
  .get(async (req, res) => {
    /**
     * #route   GET /api/v1/user/notification-preferences
     * #desc    Get user's notification preferences
     */
    const response = await fetch(`${USER_URL}/user/v1/user${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: USER_LOCAL_HOST,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
      },
    }).catch(console.log);

    const result = await response.json();
    return res.status(response.status).send(result);
  })
  .put(async (req, res) => {
    /**
     * #route   PUT /api/v1/user/notification-preferences
     * #desc    Update user's notification preferences
     */
    const response = await fetch(`${USER_URL}/user/v1/user${req.url}`, {
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

export { router };
