import express from "express";
import fetch from "node-fetch";

import { authenticate } from "#middlewares/auth";

const router = express.Router();

const PROVIDER_LOCAL_HOST = "http://localhost:3002";

const PROVIDER_URL = process.env.PROVIDER_URL;

router
  .route("/")
  .get(authenticate, async (req, res) => {
    /**
     * #route   GET /api/v1/provider
     * #desc    Get current provider data
     */

    const response = await fetch(
      `${PROVIDER_URL}/provider/v1/provider${req.url}`,
      {
        method: req.method,
        headers: {
          ...req.headers,
          host: PROVIDER_LOCAL_HOST,
          "Content-type": "application/json",
          "Cache-control": "no-cache",
        },
      }
    ).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  })
  .put(authenticate, async (req, res) => {
    /**
     * #route   PUT /api/v1/provider
     * #desc    Update current provider data
     */
    const response = await fetch(
      `${PROVIDER_URL}/provider/v1/provider${req.url}`,
      {
        method: req.method,
        headers: {
          ...req.headers,
          host: PROVIDER_LOCAL_HOST,
          "Content-type": "application/json",
        },
        ...(req.body && { body: JSON.stringify(req.body) }),
      }
    ).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  })
  .delete(authenticate, async (req, res) => {
    /**
     * #route   DELETE /api/v1/provider
     * #desc    Delete current provider data
     */
    const response = await fetch(
      `${PROVIDER_URL}/provider/v1/provider${req.url}`,
      {
        method: req.method,
        headers: {
          ...req.headers,
          host: PROVIDER_LOCAL_HOST,
          "Content-type": "application/json",
        },
        ...(req.body && { body: JSON.stringify(req.body) }),
      }
    ).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

router
  .route("/image")
  .put(authenticate, async (req, res) => {
    /**
     * #route   PUT /api/v1/provider/image
     * #desc    Update the provider image
     */
    const response = await fetch(
      `${PROVIDER_URL}/provider/v1/provider${req.url}`,
      {
        method: req.method,
        headers: {
          ...req.headers,
          host: PROVIDER_LOCAL_HOST,
          "Content-type": "application/json",
        },
        ...(req.body && { body: JSON.stringify(req.body) }),
      }
    ).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  })
  .delete(authenticate, async (req, res) => {
    /**
     * #route   DELETE /api/v1/provider/image
     * #desc    Delete the provider image
     */
    const response = await fetch(
      `${PROVIDER_URL}/provider/v1/provider${req.url}`,
      {
        method: req.method,
        headers: {
          ...req.headers,
          host: PROVIDER_LOCAL_HOST,
          "Content-type": "application/json",
        },
        ...(req.body && { body: JSON.stringify(req.body) }),
      }
    ).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

export { router };
