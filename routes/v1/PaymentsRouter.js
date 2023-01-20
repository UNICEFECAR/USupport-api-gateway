import express from "express";
import fetch from "node-fetch";

import { authenticate } from "#middlewares/auth";

const router = express.Router();

const PAYMENTS_LOCAL_HOST = "http://localhost:3004";

const PAYMENTS_URL = process.env.PAYMENTS_URL;

router
  .route("/one-time/create-payment-intent")
  .post(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Payments']
     * #swagger.description = 'Endpoint to test the Payments service.'
     */

    const response = await fetch(`${PAYMENTS_URL}/payments/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: PAYMENTS_LOCAL_HOST,
        "x-user-id": req.user.user_id,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response?.json();

    return res.status(response?.status).send(result);
  });

router.route("/one-time/webhook").post(async (req, res) => {
  /**
   * #swagger.tags = ['Payments']
   * #swagger.description = 'Endpoint to handle Webhooks received from Stripe.'
   */
  const response = await fetch(`${PAYMENTS_URL}/payments/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: PAYMENTS_LOCAL_HOST,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response?.json();

  return res.status(response?.status).send(result);
});

export { router };
