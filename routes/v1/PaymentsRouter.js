import express from "express";
import fetch from "node-fetch";

const router = express.Router();

const PAYMENTS_LOCAL_HOST = "http://localhost:3004";

const PAYMENTS_URL = process.env.PAYMENTS_URL;

router.route("/one-time/create-payment-intent").post(async (req, res) => {
  /**
   * #swagger.tags = ['Payments']
   * #swagger.description = 'Endpoint to test the Payments service.'
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
