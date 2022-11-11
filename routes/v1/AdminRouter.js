import express from "express";
import fetch from "node-fetch";

const router = express.Router();

const ADMIN_LOCAL_HOST = "http://localhost:3007";

const ADMIN_URL = process.env.ADMIN_URL;

router
  .route("/country/faqs")
  .get(async (req, res) => {
    /**
     * #route   GET /api/v1/admin/country/faqs
     * #desc    Get all faqs for a country
     */

    const response = await fetch(`${ADMIN_URL}/admin/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: ADMIN_LOCAL_HOST,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
      },
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  })
  .put(async (req, res) => {
    // TODO: Add country level authentication
    /**
     * #route   PUT /api/v1/admin/country/faqs
     * #desc    Add given faqs to a country
     */

    const response = await fetch(`${ADMIN_URL}/admin/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: ADMIN_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  })
  .post(async (req, res) => {
    // TODO: Add global level authentication
    /**
     * #route   POST /api/v1/admin/country/faqs
     * #desc    Initialise faqs for a new country
     */

    const response = await fetch(`${ADMIN_URL}/admin/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: ADMIN_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  })
  .delete(async (req, res) => {
    // TODO: Add country level authentication
    /**
     * #route   DELETE /api/v1/admin/country/faqs
     * #desc    Delete given faqs for a country
     */

    const response = await fetch(`${ADMIN_URL}/admin/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: ADMIN_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

export { router };
