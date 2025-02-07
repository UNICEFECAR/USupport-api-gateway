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
     * #swagger.path = '/admin'
     * #swagger.description = 'Get Current admin'
     * #swagger.security = [{ "AnyAdminBearer": [] }]
     * #swagger.responses[200] = { description: 'Admin Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
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
     * #swagger.path = '/admin'
     * #swagger.description = 'Update current admin data'
     * #swagger.security = [{ "AnyAdminBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $role: 'country', $name: 'John', $surname: 'Doe', phone: '+441234567890', $email: 'john.doe@email.com' } }
     * #swagger.responses[200] = { description: 'Updated Admin Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[404] = { description: 'Admin Not Found' }
     * #swagger.responses[409] = { description: 'Email Already Used' }
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
  .route("/by-id")
  .get(authenticateAdmin, authorizeAdmin("global"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/by-id'
     * #swagger.description = 'Get admin by id'
     * #swagger.security = [{ "GlobalAdminBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['adminId'] = { in: 'query', required: true, type: 'string', description: 'ID of The Admin' }
     * #swagger.responses[200] = { description: 'Admin Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     * #swagger.responses[404] = { description: 'Admin Not Found' }
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
  .put(authenticateAdmin, authorizeAdmin("global"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'PUT'
     * #swagger.path = '/admin/by-id'
     * #swagger.description = 'Update admin data by id'
     * #swagger.security = [{ "GlobalAdminBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $role: 'country', $name: 'John', $surname: 'Doe', phone: '+441234567890', $email: 'john.doe@email.com', $isActive: true } }
     * #swagger.responses[200] = { description: 'Updated Admin Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     * #swagger.responses[404] = { description: 'Admin Not Found' }
     * #swagger.responses[409] = { description: 'Email Already Used' }
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
  })
  .delete(authenticateAdmin, authorizeAdmin("global"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'DELETE'
     * #swagger.path = '/admin/by-id'
     * #swagger.description = 'Delete admin data by id'
     * #swagger.security = [{ "GlobalAdminBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $adminId: '22e3b2f6-5c95-4044-b444-592b5d41338a' } }
     * #swagger.responses[200] = { description: 'Deleted Admin Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     * #swagger.responses[404] = { description: 'Admin Not Found' }
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
  .route("/all")
  .get(authenticateAdmin, authorizeAdmin("global"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/all'
     * #swagger.description = 'Get all all global admins or country admins for a given country'
     * #swagger.security = [{ "GlobalAdminBearer": [] }]
     * #swagger.responses[200] = { description: 'Admin Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     * #swagger.responses[404] = { description: 'Admin Not Found' }
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
     * #swagger.tags = ['Admin']
     * #swagger.method = 'POST'
     * #swagger.path = '/admin/signup'
     * #swagger.description ='Create new admin user account (Only global admin can create an admin account)'
     * #swagger.security = [{ "GlobalAdminBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { adminCountryId: '22e3b2f6-5c95-4044-b444-592b5d41338a', adminRegionId: '22e3b2f6-5c95-4044-b444-592b5d41338a', $name: 'John', $surname: 'Doe', phone: '+441234567890', $email: 'john.doe@email.com', $password: 'SomePass123', $role: 'country', $isActive: true } }
     * #swagger.responses[200] = { description: 'New Admin Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     * #swagger.responses[409] = { description: 'Email Already Used' }
     */

    // Put a placeholder password in order to pass the passport validation
    // This password won't be used in any way to authenticate the provider
    const payload = { ...req.body, password: "asdasdA1" };

    const response = await fetch(`${ADMIN_URL}/admin/v1/auth${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: ADMIN_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(payload) }),
    }).catch(console.log);

    const result = await response.json();
    return res.status(response.status).send(result);
  });

router.route("/login").post(async (req, res) => {
  /**
   * #swagger.tags = ['Admin']
   * #swagger.method = 'POST'
   * #swagger.path = '/admin/login'
   * #swagger.description = 'Login admin'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $email: 'john.doe@email.com', $password: 'SomePass123', $role: 'country', $otp: '1234' } }
   * #swagger.responses[200] = { description: 'Admin Access and Refresh Tokens' }
   * #swagger.responses[404] = { description: 'Incorrect Email' }
   * #swagger.responses[404] = { description: 'Incorrect Password' }
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
   * #swagger.path = '/admin/refresh-token'
   * #swagger.description = 'Refresh admin JWT access token'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $refreshToken: '22e3b2f6-5c95-4044-b444-592b5d41338a' } }
   * #swagger.responses[200] = { description: 'New Access and Refresh Tokens' }
   * #swagger.responses[401] = { description: 'Refresh Token Not Valid' }
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
   * #swagger.path = '/admin/password'
   * #swagger.description = 'Change admin's password'
   * #swagger.security = [{ "AnyAdminBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $oldPassword: 'OldPass123', $newPassword: 'NewPass123' } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[401] = { description: 'Admin Not Authorised' }
   * #swagger.responses[404] = { description: 'Incorrect Password' }
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

router.route("/rescue/forgot-password-link").post(async (req, res) => {
  /**
   * #swagger.tags = ['Admin']
   * #swagger.method = 'POST'
   * #swagger.path = '/admin/rescue/forgot-password-link'
   * #swagger.description = 'Initiate Forgot Password Process (Send email with token)'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['email'] = { in: 'query', required: true, type: 'string', description: 'Email of The Admin' }
   * #swagger.parameters['role'] = { in: 'query', required: true, type: 'string', description: 'Role of The Admin - country, global, or regional' }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[404] = { description: 'Admin Not Found' }
   */
  const response = await fetch(`${ADMIN_URL}/admin/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: ADMIN_LOCAL_HOST,
      "Cache-control": "no-cache",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/rescue/forgot-password").post(async (req, res) => {
  /**
   * #swagger.tags = ['Admin']
   * #swagger.method = 'POST'
   * #swagger.path = '/admin/rescue/forgot-password'
   * #swagger.description = 'Change admin's password with forgot password secret token'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $token: '22e3b2f6-5c95-4044-b444-592b5d41338a', $password: 'NewPass123' } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[409] = { description: 'Invalid Reset Password Token' }
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
     * #swagger.path = '/admin/country/faqs'
     * #swagger.description = 'Get all FAQs for a country'
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['platform'] = { in: 'query', required: true, type: 'string', description: 'Platform for the FAQs (website, client, or provider)' }
     * #swagger.responses[200] = { description: 'Array of FAQ IDs' }
     * #swagger.responses[404] = { description: 'Platform Not Found' }
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
     * #swagger.path = '/admin/country/faqs'
     * #swagger.description = 'Add an FAQ to a country'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $platform: 'website', $id: '1' } }
     * #swagger.responses[200] = { description: 'Updated Array of FAQ IDs' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     * #swagger.responses[404] = { description: 'Platform Not Found' }
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
     * #swagger.path = '/admin/country/faqs'
     * #swagger.description = 'Initialise FAQs for a new country'
     * #swagger.security = [{ "GlobalAdminBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $platform: 'website' } }
     * #swagger.responses[200] = { description: 'Array of FAQ IDs' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     * #swagger.responses[404] = { description: 'Platform Not Found' }
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
     * #swagger.path = '/admin/country/faqs'
     * #swagger.description = 'Delete an FAQ from a country'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $platform: 'website', $id: '1' } }
     * #swagger.responses[200] = { description: 'Updated Array of FAQ IDs' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     * #swagger.responses[404] = { description: 'Platform Not Found' }
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
     * #swagger.path = '/admin/country/sos-centers'
     * #swagger.description = 'Get all sos centers for a country'
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.responses[200] = { description: 'Array of Sos Centers IDs' }
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
     * #swagger.path = '/admin/country/sos-centers'
     * #swagger.description = 'Add given sos center to a country'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $id: '1' } }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     * #swagger.responses[200] = { description: 'Updated Array of Sos Centers IDs' }
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
     * #swagger.path = '/admin/country/sos-centers'
     * #swagger.description = 'Initialise sos centers for a new country'
     * #swagger.security = [{ "GlobalAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.responses[200] = { description: 'Array of Sos Centers IDs' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
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
     * #swagger.path = '/admin/country/sos-centers'
     * #swagger.description = 'Delete given sos center from a country'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $id: '1' } }
     * #swagger.responses[200] = { description: 'Updated Array of Sos Centers IDs' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
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
     * #swagger.path = '/admin/country/articles'
     * #swagger.description = 'Get all articles for a country'
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.responses[200] = { description: 'Array of Articles IDs' }
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
     * #swagger.path = '/admin/country/articles'
     * #swagger.description = 'Add given articles to a country'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $id: '1' } }
     * #swagger.responses[200] = { description: 'Updated Array of Articles IDs' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
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
     * #swagger.path = '/admin/country/articles'
     * #swagger.description = 'Initialise articles for a new country'
     * #swagger.security = [{ "GlobalAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.responses[200] = { description: 'Array of Articles IDs' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
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
     * #swagger.path = '/admin/country/articles'
     * #swagger.description = 'Delete given articles for a country'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $id: '1' } }
     * #swagger.responses[200] = { description: 'Updated Array of Articles IDs' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
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
  .route("/country/min-max-client-age")
  .put(authenticateAdmin, authorizeAdmin("global"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'PUT'
     * #swagger.path = '/admin/country/min-max-client-age'
     * #swagger.description = 'Update the country min and max client age'
     * #swagger.security = [{ "GlobalAdminBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $minClientAge: 16, $maxClientAge: 24 } }
     * #swagger.responses[200] = { description: 'Country Data Object' }
     * #swagger.responses[404] = { description: 'Country Not Found' }
     */

    const response = await fetch(`${ADMIN_URL}/admin/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: ADMIN_LOCAL_HOST,
        "Content-Type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();
    return res.status(response.status).send(result);
  });

router
  .route("/statistics/global")
  .get(authenticateAdmin, authorizeAdmin("global"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/statistics/global'
     * #swagger.description = 'Get all global statistics'
     * #swagger.security = [{ "GlobalAdminBearer": [] }]
     * #swagger.responses[200] = { description: 'Statistics Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
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
  });

router.route("/statistics/country").get(authenticateAdmin, async (req, res) => {
  /**
   * #swagger.tags = ['Admin']
   * #swagger.method = 'GET'
   * #swagger.path = '/admin/statistics/country'
   * #swagger.description = 'Get all country statistics'
   * #swagger.security = [{ "AnyAdminBearer": [] }]
   * #swagger.parameters['countryId'] = { in: 'query', required: true, type: 'string', description: 'ID of The Country' }
   * #swagger.responses[200] = { description: 'Statistics Data Object' }
   * #swagger.responses[401] = { description: 'Admin Not Authorised' }
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
});

router
  .route("/statistics/security-check")
  .get(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/statistics/security-check'
     * #swagger.description = 'Get security check answers for all consultations that had issues'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.responses[200] = { description: 'Consultation Security Check Answers Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
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
  });

router.route("/2fa").post(async (req, res) => {
  /**
   * #swagger.tags = ['Admin']
   * #swagger.method = 'POST'
   * #swagger.path = '/admin/2fa'
   * #swagger.description = 'Request Admin 2FA OTP'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $email: 'john.doe@email.com', $password: 'SomePass123', $role: 'global' } }
   * #swagger.responses[200] = { description: 'Admin 2FA OTP for login' }
   * #swagger.responses[404] = { description: 'Invalid Email' }
   * #swagger.responses[404] = { description: 'Invalid Password' }
   * #swagger.responses[429] = { description: 'Too Many OTP Requests' }
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
  .route("/statistics/information-portal-suggestions")
  .get(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/statistics/information-portal-suggestions'
     * #swagger.description = 'Get all information portal suggestions'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['countryId'] = { in: 'query', required: true, type: 'string', description: 'ID of the country of the admin' }
     * #swagger.responses[200] = { description: 'Information Portal Suggestions Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
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
  });

router
  .route("/statistics/client-ratings")
  .get(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/statistics/client-ratings'
     * #swagger.description = 'Get all information portal suggestions'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.responses[200] = { description: 'Client Ratings Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
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
  });

router
  .route("/statistics/contact-forms")
  .get(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/statistics/contact-forms'
     * #swagger.description = 'Get all contact forms'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.responses[200] = { description: 'Contact Forms Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
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
  });

router
  .route("/statistics/provider-activities")
  .get(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/statistics/provider-activities'
     * #swagger.description = 'Get statistics for a specific provider'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['providerId'] = { in: 'query', required: true, type: 'string', description: 'ID of The Provider' }
     * #swagger.responses[200] = { description: 'Provider Statistics Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
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
  });

router
  .route("/sponsor")
  .get(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/sponsor'
     * #swagger.description = 'Get all sponsors'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.responses[200] = { description: 'Sponsors Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
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
  .post(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'POST'
     * #swagger.path = '/admin/sponsor'
     * #swagger.description = 'Create a sponsor'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $name: 'Unicef', $email: 'mail@user.com',  phone: '+7887777770', image: 'default' } }
     * #swagger.responses[200] = { description: 'Sponsor Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
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
  .put(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'PUT'
     * #swagger.path = '/admin/sponsor'
     * #swagger.description = 'Edit a sponsor'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $sponsorId: '2dc1092c-a13d-4d55-9b1f-81d3b3e974c1', $name: 'Unicef', $email: 'mail@user.com', phone: '+7887777770', image: 'default' } }
     * #swagger.responses[200] = { description: 'Sponsor Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     * #swagger.responses[401] = { description: 'Sponsor not found' }
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
  .route("/sponsor/create-campaign")
  .post(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'POST'
     * #swagger.path = '/admin/sponsor/create-campaign'
     * #swagger.description = 'Create a campaign for a sponsor'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $sponsorId: '2dc1092c-a13d-4d55-9b1f-81d3b3e974c1', $name: 'Unicef Campaign', $couponCode: 'UN1', $budget: 5000, $numberOfCoupons: 500, $maxCouponsPerClient: 3, $startDate: '1668384000', $endDate: '1768384000', $termsAndConditions: 'Default Terms of Use'} }
     **/
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
  .route("/sponsor/update-campaign")
  .put(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'PUT'
     * #swagger.path = '/admin/sponsor/update-campaign'
     * #swagger.description = 'Update a campaign for a sponsor'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $campaignId: '2dc1092c-a13d-4d55-9b1f-81d3b3e974c1', $name: 'Unicef Campaign', $couponCode: 'UN1', $budget: 5000, $numberOfCoupons: 500, $maxCouponsPerClient: 3, $startDate: '1668384000', $endDate: '1768384000', $termsAndConditions: 'Default Terms of Use'} }
     **/
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
  .route("/sponsor/by-id")
  .get(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/sponsor'
     * #swagger.description = 'Get a sponsor by id and the data about his campaigns'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.paramteres['sponsorId'] = { in: 'query', required: true, type: 'string', description: 'The id of the sponsor' }
     * #swagger.responses[200] = { description: 'Sponsors Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
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
  });

router
  .route("/sponsor/campaign/by-id")
  .get(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/sponsor/campaign/by-id'
     * #swagger.description = 'Get the data about a campaign by it's id'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.paramteres['campaignId'] = { in: 'query', required: true, type: 'string', description: 'The id of the campaign' }
     * #swagger.responses[200] = { description: 'Campaign Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
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
  });

router
  .route("/sponsor/coupons-data")
  .get(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/sponsor/coupons-data'
     * #swagger.description = 'Get the data about all the used coupons in a specific campaign'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.paramteres['campaignId'] = { in: 'query', required: true, type: 'string', description: 'The id of the campaign' }
     * #swagger.responses[200] = { description: 'Campaign Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
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
  });

router
  .route("/all-providers")
  .get(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/all-providers'
     * #swagger.description = 'Get all providers'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['limit'] = { in: 'query', required: true, type: 'number', description: 'The amount of providers to fetch' }
     * #swagger.parameters['offset'] = { in: 'query', required: true, type: 'number', description: 'The offset/pageNumber of providers to fetch' }
     * #swagger.parameters['price'] = { in: 'query', required: false, type: 'number', description: 'The minimum price of a provider' }
     * #swagger.parameters['status'] = { in: 'query', required: false, type: 'string', description: 'The status of a provider - active/inactive' }
     * #swagger.parameters['free'] = { in: 'query', required: false, type: 'string', description: 'If the provider is free or not - true/false as a string' }
     * #swagger.parameters['specialization'] = { in: 'query', required: false, type: 'string', description: 'The specialization of a provider - psychologist, psychotherapist, psychiatrist, any' }
     * #swagger.responses[200] = { description: 'Providers Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
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
  .route("/all-provider-names")
  .get(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/all-providers'
     * #swagger.description = 'Get all providers'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.responses[200] = { description: 'Providers Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
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
  .route("/update-provider-status")
  .put(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'PUT'
     * #swagger.path = '/admin/update-provider-status'
     * #swagger.description = 'Change the status of a provider'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.paramteres['providerId'] = { in: 'query', required: true, type: 'string', description: 'The id of the provider' }
     * #swagger.paramteres['status'] = { in: 'body', schema: { $status: 'inactive', $providerDetailId: '2dc1092c-a13d-4d55-9b1f-81d3b3e974c1  } }
     * #swagger.responses[200] = { description: 'Providers Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     */
    const response = await fetch(`${ADMIN_URL}/admin/v1/admin${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: ADMIN_LOCAL_HOST,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

router
  .route("/my-qa/archived")
  .get(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/my-qa/archived'
     * #swagger.description = 'Get all archived questions'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.responses[200] = { description: 'Archived questions Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
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
  });

router
  .route("/my-qa/delete-question")
  .put(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'PUT'
     * #swagger.path = '/admin/my-qa/delete-question'
     * #swagger.description = 'Delete a question'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.paramteres['questionId'] = { in: 'query', required: true, type: 'string', description: 'The id of the question' }
     * #swagger.responses[200] = { description: 'Archived questions Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     */
    const response = await fetch(`${ADMIN_URL}/admin/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: ADMIN_LOCAL_HOST,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
        "x-admin-id": req.admin.admin_id,
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

router
  .route("/my-qa/activate-question")
  .put(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'PUT'
     * #swagger.path = '/admin/my-qa/activate-questions'
     * #swagger.description = 'Activate a question'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.paramteres['questionId'] = { in: 'query', required: true, type: 'string', description: 'The id of the question' }
     * #swagger.responses[200] = { description: 'Archived questions Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     */

    const response = await fetch(`${ADMIN_URL}/admin/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: ADMIN_LOCAL_HOST,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
        "x-admin-id": req.admin.admin_id,
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

router
  .route("/my-qa/questions")
  .get(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/my-qa/questions'
     * #swagger.description = 'Get all questions'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['type'] = { in: 'query', required: true, type: 'string', description: 'The type of questions the provider needs - answered/unanswered/self-answered' }
     * #swagger.responses[200] = { description: 'Questions Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
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
  });

router.route("/pskz-db-snapshot-webhook").post(async (req, res) => {
  /**
   * #swagger.tags = ['Admin']
   * #swagger.method = 'POST'
   * #swagger.path = '/admin/pskz-db-snapshot-webhook'
   * #swagger.description = 'Perform s3 bucked upload.'
   * #swagger.parameters['obj'] = { in: 'body', schema: { $buket: 's3-bucket-name', $key: 'file-name' } }
   * #swagger.responses[200] = { status: 'succes', message: "Successfully uploaded", data: payload }
   * #swagger.responses[400] = { status: 'error', message: "<error_message>", data: payload   */

  const response = await fetch(`${ADMIN_URL}/admin/v1/admin${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      "Cache-control": "no-cache",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch((err) => {
    throw err;
  });

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/logout").post(async (req, res) => {
  /**
   * #swagger.tags = ['Admin']
   * #swagger.method = 'POST'
   * #swagger.path = '/admin/logout'
   * #swagger.description = 'Logout admin by adding his JWT to the blacklist'
   * #swagger.security = [{ "AnyAdminBearer": [] }]
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[401] = { description: 'Admin Not Authorised' }
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

router.get("/platform-metrics", authenticateAdmin, async (req, res) => {
  /**
   * #swagger.tags = ['Admin']
   * #swagger.method = 'GET'
   * #swagger.path = '/admin/platform-metrics'
   * #swagger.description = 'Get all platform metrics'
   * #swagger.security = [{ "GlobalAdminBearer": [] }]
   * #swagger.responses[200] = { description: 'Platform Metrics Data Object' }
   * #swagger.responses[401] = { description: 'Admin Not Authorised' }
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

router.get(
  "/statistics/provider-ratings",
  authenticateAdmin,
  async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/provider-ratings'
     * #swagger.description = 'Get all platform ratings'
     * #swagger.security = [{ "GlobalAdminBearer": [] }]
     * #swagger.responses[200] = { description: 'Provider Ratings Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
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
  }
);

router.get("/organization/all", authenticateAdmin, async (req, res) => {
  /**
   * #swagger.tags = ['Admin']
   * #swagger.method = 'GET'
   * #swagger.path = '/admin/organization/all'
   * #swagger.description = 'Get all organizations'
   * #swagger.security = [{ "GlobalAdminBearer": [] }]
   * #swagger.responses[200] = { description: 'Organization Data Object' }
   * #swagger.responses[401] = { description: 'Admin Not Authorised' }
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
});

router.get("/organization/all/details", authenticateAdmin, async (req, res) => {
  /**
   * #swagger.tags = ['Admin']
   * #swagger.method = 'GET'
   * #swagger.path = '/admin/organization/all/details'
   * #swagger.description = 'Get all organizations'
   * #swagger.security = [{ "GlobalAdminBearer": [] }]
   * #swagger.responses[200] = { description: 'Organization Data Object' }
   * #swagger.responses[401] = { description: 'Admin Not Authorised' }
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
});

router
  .route("/organization")
  .post(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'POST'
     * #swagger.path = '/admin/organization'
     * #swagger.description = 'Create a new organization'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $name: 'Organization Name'}
     * #swagger.responses[200] = { description: 'Organization Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     * #swagger.responses[400] = { description: 'Organization already exists' }
     */
    const response = await fetch(`${ADMIN_URL}/admin/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: ADMIN_LOCAL_HOST,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
        "x-admin-id": req.admin.admin_id,
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  })
  .put(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'PUT'
     * #swagger.path = '/admin/organization'
     * #swagger.description = 'Edit an organization'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['obj'] = { in: 'body', schema: { $organizationId: '2dc1092c-a13d-4d55-9b1f-81d3b3e974c1', $name: 'Organization Name'}
     * #swagger.responses[200] = { description: 'Organization Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     * #swagger.responses[400] = { description: 'Organization already exists' }
     */
    const response = await fetch(`${ADMIN_URL}/admin/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: ADMIN_LOCAL_HOST,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
        "x-admin-id": req.admin.admin_id,
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

router.get("/organization/:id", authenticateAdmin, async (req, res) => {
  /**
   * #swagger.tags = ['Admin']
   * #swagger.method = 'GET'
   * #swagger.path = '/admin/organization-details'
   * #swagger.description = 'Get all organization details'
   * #swagger.security = [{ "GlobalAdminBearer": [] }]
   * #swagger.responses[200] = { description: 'Organization Details Data Object' }
   * #swagger.responses[401] = { description: 'Admin Not Authorised' }
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
});

router.post(
  "/organization/assign-provider",
  authenticateAdmin,
  authorizeAdmin("country"),
  async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'POST'
     * #swagger.path = '/admin/organization/assign-provider'
     * #swagger.description = 'Assign a provider to an organization'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $providerDetailId: '2dc1092c-a13d-4d55-9b1f-81d3b3e974c1', $organizationId: '2dc1092c-a13d-4d55-9b1f-81d3b3e974c1' } }
     * #swagger.responses[200] = { description: 'Organization Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     */
    const response = await fetch(`${ADMIN_URL}/admin/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: ADMIN_LOCAL_HOST,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
        "x-admin-id": req.admin.admin_id,
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  }
);

router.put(
  "/organization/remove-provider",
  authenticateAdmin,
  authorizeAdmin("country"),
  async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'PUT'
     * #swagger.path = '/admin/organization/remove-provider'
     * #swagger.description = 'Remove a provider from an organization'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['obj'] = { in: 'body', schema: { $providerDetailId: '2dc1092c-a13d-4d55-9b1f-81d3b3e974c1', $organizationId: '2dc1092c-a13d-4d55-9b1f-81d3b3e974c1' } }
     * #swagger.responses[200] = { description: 'Organization Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     */
    const response = await fetch(`${ADMIN_URL}/admin/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: ADMIN_LOCAL_HOST,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
        "x-admin-id": req.admin.admin_id,
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  }
);

export { router };
