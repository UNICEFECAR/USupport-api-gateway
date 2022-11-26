import express from "express";
import fetch from "node-fetch";

const router = express.Router();

const EMAIL_LOCAL_HOST = "http://localhost:3008";

const EMAIL_URL = process.env.EMAIL_URL;

router.route("/admin").post(async (req, res) => {
  /**
   * #swagger.tags = ['Email']
   * #swagger.method = 'POST'
   * #swagger.path = '/api/v1/email/admin/'
   * #swagger.description = 'Send email'
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

  const result = await response?.json();

  return res.status(response?.status).send(result);
});

router.route("/system/forgot-password").post(async (req, res) => {
  /**
   * #swagger.tags = ['Email']
   * #swagger.method = 'POST'
   * #swagger.path = '/api/v1/email/system/forgot-password'
   * #swagger.description = 'Send email for forgot password'
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

  const result = await response?.json();

  return res.status(response?.status).send(result);
});

router.route("/system/welcome").post(async (req, res) => {
  /**
   * #swagger.tags = ['Email']
   * #swagger.method = 'POST'
   * #swagger.path = '/api/v1/email/system/welcome'
   * #swagger.description = 'Send welcome email'
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

  const result = await response?.json();

  return res.status(response?.status).send(result);
});

export { router };
