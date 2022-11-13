import express from "express";
import fetch from "node-fetch";

import { authenticate } from "#middlewares/auth";

const router = express.Router();

const CLIENT_LOCAL_HOST = "http://localhost:3001";

const CLIENT_URL = process.env.CLIENT_URL;

router
  .route("/")
  .get(authenticate, async (req, res) => {
    /**
     * #route   GET /api/v1/client
     * #desc    Get current client data
     */

    const response = await fetch(`${CLIENT_URL}/client/v1/client${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: CLIENT_LOCAL_HOST,
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
     * #route   PUT /api/v1/client
     * #desc    Update current client data
     */
    const response = await fetch(`${CLIENT_URL}/client/v1/client${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: CLIENT_LOCAL_HOST,
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
     * #route   DELETE /api/v1/client
     * #desc    Delete current client data
     */
    const response = await fetch(`${CLIENT_URL}/client/v1/client${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: CLIENT_LOCAL_HOST,
        "x-user-id": req.user.user_id,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

router
  .route("/image")
  .put(authenticate, async (req, res) => {
    /**
     * #route   PUT /api/v1/client/image
     * #desc    Update the client image
     */
    const response = await fetch(`${CLIENT_URL}/client/v1/client${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: CLIENT_LOCAL_HOST,
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
     * #route   DELETE /api/v1/client/image
     * #desc    Delete the client image
     */
    const response = await fetch(`${CLIENT_URL}/client/v1/client${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: CLIENT_LOCAL_HOST,
        "x-user-id": req.user.user_id,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

router
  .route("/data-processing-agreement")
  .put(authenticate, async (req, res) => {
    /**
     * #route   PUT /api/v1/client/data-processing-agreement
     * #desc    Update the client data-processing-agreement
     */
    const response = await fetch(`${CLIENT_URL}/client/v1/client${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: CLIENT_LOCAL_HOST,
        "x-user-id": req.user.user_id,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

export { router };
