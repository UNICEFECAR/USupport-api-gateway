import express from "express";
import fetch from "node-fetch";

import { authenticate } from "#middlewares/auth";

const router = express.Router();

const USER_LOCAL_HOST = "http://localhost:3010";

const USER_URL = process.env.USER_URL;

router.route("/").get(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'GET'
   * #swagger.path = '/user'
   * #swagger.description = 'Get Current User'
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
   * #swagger.tags = ['User']
   * #swagger.method = 'GET'
   * #swagger.path = '/user/languages'
   * #swagger.description = 'Get all active languages'
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

router.route("/languages/all").get(async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'GET'
   * #swagger.path = '/user/languages/all'
   * #swagger.description = 'Get all languages'
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
   * #swagger.tags = ['User']
   * #swagger.method = 'GET'
   * #swagger.path = '/user/countries'
   * #swagger.description = 'Get all countries'
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

router.route("/countries/by-alpha-2-code").get(async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'GET'
   * #swagger.path = '/user/countries/by-alpha-2-code'
   * #swagger.description = 'Get a specific country by its alpha-2 code'
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

router.route("/countries/min-max-client-age").put(async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'PUT'
   * #swagger.path = '/user/countries/min-max-client-age'
   * #swagger.description = 'Update the country min and max client age'
   */

  const response = await fetch(`${USER_URL}/user/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
      "Content-Type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/work-with").get(async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'GET'
   * #swagger.path = '/user/work-with'
   * #swagger.description = 'Get all work with areas'
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
   * #swagger.tags = ['User']
   * #swagger.method = 'POST'
   * #swagger.path = '/user/provider/signup'
   * #swagger.description = 'Create provider user account (Protected with admin permissions)'
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
   * #swagger.tags = ['User']
   * #swagger.method = 'POST'
   * #swagger.path = '/user/signup'
   * #swagger.description = 'Create new client user account'
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
   * #swagger.tags = ['User']
   * #swagger.method = 'POST'
   * #swagger.path = '/user/login'
   * #swagger.description = 'Login user with email or user access token'
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
   * #swagger.tags = ['User']
   * #swagger.method = 'POST'
   * #swagger.path = '/user/tmp-login'
   * #swagger.description = 'Temporrary login a user'
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
   * #swagger.tags = ['User']
   * #swagger.method = 'GET'
   * #swagger.path = '/user/user-access-token'
   * #swagger.description = 'Generate new user access token for signup'
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
   * #swagger.tags = ['User']
   * #swagger.method = 'POST'
   * #swagger.path = '/user/refresh-token'
   * #swagger.description = 'Refresh JWT access token'
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
   * #swagger.tags = ['User']
   * #swagger.method = 'PATCH'
   * #swagger.path = '/user/password'
   * #swagger.description = 'Change user's password'
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
     * #swagger.tags = ['User']
     * #swagger.method = 'GET'
     * #swagger.path = '/user/rescue/forgot-password'
     * #swagger.description = 'Initiate Forgot Password Process (Send email with token)'
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
     * #swagger.tags = ['User']
     * #swagger.method = 'POST'
     * #swagger.path = '/user/rescue/forgot-password'
     * #swagger.description = 'Change user's password with forgot password secret token'
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
   * #swagger.tags = ['User']
   * #swagger.method = 'POST'
   * #swagger.path = '/user/upload-file/'
   * #swagger.description = 'Upload file to AWS S3 bucket'
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
     * #swagger.tags = ['User']
     * #swagger.method = 'GET'
     * #swagger.path = '/user/notification-preferences'
     * #swagger.description = 'Get user's notification preferences'
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
     * #swagger.tags = ['User']
     * #swagger.method = 'PUT'
     * #swagger.path = '/user/notification-preferences'
     * #swagger.description = 'Update user's notification preferences'
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
