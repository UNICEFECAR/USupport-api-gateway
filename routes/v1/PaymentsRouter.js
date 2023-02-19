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
     * #swagger.security = [{ "UserBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { consultationId: '90838065-6c13-4b43-ad8e-9f10c5b6ae7e' } }
     * #swagger.responses[200] = { description: 'Payment Intent information: clientSecret, price and currency' }
     * #swagger.responses[401] = { description: 'User Not Authorised' }
     * #swagger.responses[404] = { description: 'Consultation Not Found' }
     * #swagger.responses[404] = { description: 'Currency Not Found' }
     * #swagger.responses[404] = { description: 'Currency Not Found' }
     * #swagger.responses[404] = { description: 'Stripe customer ID Not Found' }
     * #swagger.responses[404] = { description: 'Transaction Not Found' }
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
   * #swagger.method = 'POST'
   * #swagger.path = '/payments/one-time/webhook'
   * #swagger.description = 'Endpoint to handle Webhooks received from Stripe.'
   * #swagger.security = [{ "AnyUserBearer": [] }]
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['stripe-signature'] = { in: 'header', required: true, type: 'string', description: 'Stripe signature' }
   * #swagger.responses[200] = { description: 'Consultation ID Object' }
   * #swagger.responses[404] = { description: 'Webhook event keys not found' }
   * #swagger.responses[404] = { description: 'Metadata keys not found' }
   * #swagger.responses[404] = { description: 'Transaction not found' }
   * #swagger.responses[404] = { description: 'Consultation not found' }
   * #swagger.responses[500] = { description: 'Schedule consultation error' }
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
   * #swagger.method = 'GET'
   * #swagger.path = '/payments/one-time/history'
   * #swagger.description = 'Get Pyments History'
   * #swagger.security = [{ "ClientBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['limit'] = { in: 'query', required: true, type: 'string', description: 'The maximum number of payments to retrieve.' }
   * * #swagger.parameters['start_after_payment_intent_id'] = { in: 'query', required: true, type: 'string', description: 'The stripe payment intent id after which to start retrieving payments.' }
   * #swagger.responses[200] = { description: 'Payment history object data' }
   * #swagger.responses[500] = { description: 'Payment Intents not found' }
   */

  const response = await fetch(`${PAYMENTS_URL}/payments/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: PAYMENTS_LOCAL_HOST,
      "x-user-id": req.user.user_id,
      "Content-type": "application/json",
      "Cache-control": "no-cache",
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
   * #swagger.security = [{ "ClientBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { consultationId: '90838065-6c13-4b43-ad8e-9f10c5b6ae7e' } }
   * #swagger.responses[200] = { description: 'Success message' }
   * #swagger.responses[401] = { description: 'User Not Authorised' }
   * #swagger.responses[404] = { description: 'Transaction Not Found' }
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
