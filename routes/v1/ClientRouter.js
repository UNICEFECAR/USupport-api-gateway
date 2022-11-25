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
     * #swagger.tags = ['Client']
     * #swagger.method = 'GET'
     * #swagger.path = '/api/v1/client'
     * #swagger.description = 'Get current client data'
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
     * #swagger.tags = ['Client']
     * #swagger.method = 'PUT'
     * #swagger.path = '/api/v1/client'
     * #swagger.description = 'Update current client data'
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
     * #swagger.tags = ['Client']
     * #swagger.method = 'DELETE'
     * #swagger.path = '/api/v1/client'
     * #swagger.description = 'Delete current client data'
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
     * #swagger.tags = ['Client']
     * #swagger.method = 'PUT'
     * #swagger.path = '/api/v1/client/image'
     * #swagger.description = 'Update the client image'
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
     * #swagger.tags = ['Client']
     * #swagger.method = 'DELETE'
     * #swagger.path = '/api/v1/client/image'
     * #swagger.description = 'Delete the client image'
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
     * #swagger.tags = ['Client']
     * #swagger.method = 'PUT'
     * #swagger.path = '/api/v1/client/data-processing-agreement'
     * #swagger.description = 'Update the client data-processing-agreement'
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
