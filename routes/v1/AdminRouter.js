import express from "express";
import fetch from "node-fetch";

import { authenticateAdmin, authorizeAdmin } from "#middlewares/auth";

const router = express.Router();

const ADMIN_LOCAL_HOST = "http://localhost:3007";

const ADMIN_URL = process.env.ADMIN_URL;

router
  .route("/")
  .get(authenticateAdmin, async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/api/v1/admin'
     * #swagger.description = 'Get Current admin'
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
  })
  .put(authenticateAdmin, async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'PUT'
     * #swagger.path = '/api/v1/admin'
     * #swagger.description = 'Update current admin data'
     */
    const response = await fetch(`${ADMIN_URL}/admin/v1/admin${req.url}`, {
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
  .route("/signup")
  .post(authenticateAdmin, authorizeAdmin("global"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'POST'
     * #swagger.path = '/api/v1/admin/signup'
     * #swagger.description = Create new admin user account (Only global admin can create an admin account)
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
   * #swagger.tags = ['Admin']
   * #swagger.method = 'POST'
   * #swagger.path = '/api/v1/admin/login'
   * #swagger.description = 'Login admin'
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
   * #swagger.tags = ['Admin']
   * #swagger.method = 'POST'
   * #swagger.path = '/api/v1/admin/refresh-token'
   * #swagger.description = 'Refresh admin JWT access token'
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

router.route("/password").patch(authenticateAdmin, async (req, res) => {
  /**
   * #swagger.tags = ['Admin']
   * #swagger.method = 'PATCH'
   * #swagger.path = '/api/v1/admin/password'
   * #swagger.description = 'Change admin's password'
   */
  const response = await fetch(`${ADMIN_URL}/admin/v1/admin${req.url}`, {
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
  .route("/rescue/forgot-password")
  .get(async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/api/v1/admin/rescue/forgot-password'
     * #swagger.description = 'Initiate Forgot Password Process (Send email with token)'
     */
    const response = await fetch(`${ADMIN_URL}/admin/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: ADMIN_LOCAL_HOST,
      },
    }).catch(console.log);

    const result = await response.json();
    return res.status(response.status).send(result);
  })
  .post(async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'POST'
     * #swagger.path = '/api/v1/admin/rescue/forgot-password'
     * #swagger.description = 'Change admin's password with forgot password secret token'
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
  .route("/country/faqs")
  .get(async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/api/v1/admin/country/faqs'
     * #swagger.description = 'Get all faqs for a country'
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
     * #swagger.tags = ['Admin']
     * #swagger.method = 'PUT'
     * #swagger.path = '/api/v1/admin/country/faqs'
     * #swagger.description = 'Add given faqs to a country'
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
     * #swagger.tags = ['Admin']
     * #swagger.method = 'POST'
     * #swagger.path = '/api/v1/admin/country/faqs'
     * #swagger.description = 'Initialise faqs for a new country'
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
     * #swagger.tags = ['Admin']
     * #swagger.method = 'DELETE'
     * #swagger.path = '/api/v1/admin/country/faqs'
     * #swagger.description = 'Delete given faqs for a country'
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
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/api/v1/admin/country/sos-centers'
     * #swagger.description = 'Get all sos centers for a country'
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
     * #swagger.tags = ['Admin']
     * #swagger.method = 'PUT'
     * #swagger.path = '/api/v1/admin/country/sos-centers'
     * #swagger.description = 'Add given sos centers to a country'
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
     * #swagger.tags = ['Admin']
     * #swagger.method = 'POST'
     * #swagger.path = '/api/v1/admin/country/sos-centers'
     * #swagger.description = 'Initialise sos centers for a new country'
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
     * #swagger.tags = ['Admin']
     * #swagger.method = 'DELETE'
     * #swagger.path = '/api/v1/admin/country/sos-centers'
     * #swagger.description = 'Delete given sos centers for a country'
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
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/api/v1/admin/country/articles'
     * #swagger.description = 'Get all articles for a country'
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
     * #swagger.tags = ['Admin']
     * #swagger.method = 'PUT'
     * #swagger.path = '/api/v1/admin/country/articles'
     * #swagger.description = 'Add given articles to a country'
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
     * #swagger.tags = ['Admin']
     * #swagger.method = 'POST'
     * #swagger.path = '/api/v1/admin/country/articles'
     * #swagger.description = 'Initialise articles for a new country'
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
     * #swagger.tags = ['Admin']
     * #swagger.method = 'DELETE'
     * #swagger.path = '/api/v1/admin/country/articles'
     * #swagger.description = 'Delete given articles for a country'
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
