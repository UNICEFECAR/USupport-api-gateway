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
          "x-user-id": req.user.user_id,
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
          "x-user-id": req.user.user_id,
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
          "x-user-id": req.user.user_id,
          "Content-type": "application/json",
        },
        ...(req.body && { body: JSON.stringify(req.body) }),
      }
    ).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

router.route("/by-id").get(async (req, res) => {
  /**
   * #route   GET /api/v1/provider/by-id
   * #desc    Get provider data by id
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
});

router.route("/all").get(async (req, res) => {
  /**
   * #route   GET /api/v1/provider/all
   * #desc    Get all providers for a given country
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
          "x-user-id": req.user.user_id,
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
          "x-user-id": req.user.user_id,
          "Content-type": "application/json",
        },
        ...(req.body && { body: JSON.stringify(req.body) }),
      }
    ).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

router
  .route("/availability/single-week")
  .get(authenticate, async (req, res) => {
    /**
     * #route   GET /api/v1/provider/availability/single-week
     * #desc    Get current provider availability for a single week
     */

    const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: PROVIDER_LOCAL_HOST,
        "x-user-id": req.user.user_id,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
      },
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  })
  .put(authenticate, async (req, res) => {
    /**
     * #route   PUT /api/v1/provider/availability/single-week
     * #desc    Update the provider availability for a single week
     */
    const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: PROVIDER_LOCAL_HOST,
        "x-user-id": req.user.user_id,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  })
  .delete(authenticate, async (req, res) => {
    /**
     * #route   DELETE /api/v1/provider/availability/single-week
     * #desc    Delete the provider availability for a single week
     */
    const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: PROVIDER_LOCAL_HOST,
        "x-user-id": req.user.user_id,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

router.route("/availability/template").put(authenticate, async (req, res) => {
  /**
   * #route   PUT /api/v1/provider/availability/template
   * #desc    Update the provider availability for a template
   */
  const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: PROVIDER_LOCAL_HOST,
      "x-user-id": req.user.user_id,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router.route("/availability/single-day").get(authenticate, async (req, res) => {
  /**
   * #route   GET /api/v1/provider/availability/single-day
   * #desc    Get current provider availability for a single day, excluding any slots that are already booked
   */

  const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: PROVIDER_LOCAL_HOST,
      "Content-type": "application/json",
      "Cache-control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

export { router };
