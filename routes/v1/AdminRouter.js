import express from "express";
import fetch from "node-fetch";

import { authenticateAdmin, authorizeAdmin } from "#middlewares/auth";

const router = express.Router();

const ADMIN_LOCAL_HOST = "http://localhost:3007";

const ADMIN_URL = process.env.ADMIN_URL;

router.route("/").get(authenticateAdmin, async (req, res) => {
  /**
   * #route   GET /api/v1/admin
   * #desc    Get Current admin
   */

  const response = await fetch(`${ADMIN_URL}/admin/v1/admin${req.url}`, {
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
});

router
  .route("/signup")
  .post(authenticateAdmin, authorizeAdmin("global"), async (req, res) => {
    /**
     * #route   POST /api/v1/admin/signup
     * #desc    Create new admin user account (Only global admin can create an admin account)
     */
    const response = await fetch(`${ADMIN_URL}/admin/v1/auth${req.url}`, {
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

router.route("/login").post(async (req, res) => {
  /**
   * #route   POST /api/v1/admin/login
   * #desc    Login admin
   */
  const response = await fetch(`${ADMIN_URL}/admin/v1/auth${req.url}`, {
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

router.route("/refresh-token").post(async (req, res) => {
  /**
   * #route   POST /api/v1/admin/refresh-token
   * #desc    Refresh admin JWT access token
   */
  const response = await fetch(`${ADMIN_URL}/admin/v1/auth${req.url}`, {
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
  .put(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
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
  .post(authenticateAdmin, authorizeAdmin("global"), async (req, res) => {
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
  .delete(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
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

router
  .route("/country/sos-centers")
  .get(async (req, res) => {
    /**
     * #route   GET /api/v1/admin/country/sos-centers
     * #desc    Get all sos centers for a country
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
  .put(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #route   PUT /api/v1/admin/country/sos-centers
     * #desc    Add given sos centers to a country
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
  .post(authenticateAdmin, authorizeAdmin("global"), async (req, res) => {
    /**
     * #route   POST /api/v1/admin/country/sos-centers
     * #desc    Initialise sos centers for a new country
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
  .delete(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #route   DELETE /api/v1/admin/country/sos-centers
     * #desc    Delete given sos centers for a country
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

router
  .route("/country/articles")
  .get(async (req, res) => {
    /**
     * #route   GET /api/v1/admin/country/articles
     * #desc    Get all articles for a country
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
  .put(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #route   PUT /api/v1/admin/country/articles
     * #desc    Add given articles to a country
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
  .post(authenticateAdmin, authorizeAdmin("global"), async (req, res) => {
    /**
     * #route   POST /api/v1/admin/country/articles
     * #desc    Initialise articles for a new country
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
  .delete(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #route   DELETE /api/v1/admin/country/articles
     * #desc    Delete given articles for a country
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
