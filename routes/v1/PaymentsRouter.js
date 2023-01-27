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
     * #swagger.method = 'POST'
     * #swagger.path = '/payments/one-time/create-payment-intent'
     * #swagger.description = 'Post create payment intent'
     * #swagger.security = [{ "AnyUserBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { consultationId: '90838065-6c13-4b43-ad8e-9f10c5b6ae7e' } }
     * #swagger.responses[200] = { description: 'Consultation ID Object' }
     * #swagger.responses[401] = { description: 'User Not Authorised' }
     * #swagger.responses[404] = { description: 'Consultation Not Found' }
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

router.route("/one-time/history").get(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Payments']
   * #swagger.description = 'Endpoint to retrieve the payment history.'
   */

  const response = await fetch(`${PAYMENTS_URL}/payments/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: PAYMENTS_LOCAL_HOST,
      "x-user-id": req.user.user_id,
      "Content-type": "application/json",
    },
  }).catch(console.log);

  const result = await response?.json();

  return res.status(response?.status).send(result);
});

router.route("/one-time/refund").post(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Payments']
   * #swagger.method = 'POST'
   * #swagger.path = '/payments/one-time/refund'
   * #swagger.description = 'Post refund existent payment.'
   * #swagger.security = [{ "AnyUserBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { consultationId: '90838065-6c13-4b43-ad8e-9f10c5b6ae7e' } }
   * #swagger.responses[200] = { description: 'Consultation ID Object' }
   * #swagger.responses[401] = { description: 'User Not Authorised' }
   * #swagger.responses[404] = { description: 'Consultation Not Found' }
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

export { router };
