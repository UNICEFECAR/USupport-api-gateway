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

router.get("/organization/metadata", async (req, res) => {
  /**
   * #swagger.tags = ['Admin']
   * #swagger.method = 'GET'
   * #swagger.path = '/admin/organization/metadata'
   * #swagger.description = 'Get all organization metadata'
   * #swagger.responses[200] = { description: 'Array of Organization Metadata' }
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
  .route("/statistics/platform-suggestions")
  .get(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/statistics/platform-suggestions'
     * #swagger.description = 'Get all platform suggestions'
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
  .route("/statistics/mood-tracker-report")
  .get(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/statistics/mood-tracker-report'
     * #swagger.description = 'Get aggregated mood tracker statistics'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['startDate'] = { in: 'query', required: false, type: 'string', description: 'Filter results starting from this ISO date (inclusive)' }
     * #swagger.parameters['endDate'] = { in: 'query', required: false, type: 'string', description: 'Filter results up to this ISO date (inclusive)' }
     * #swagger.responses[200] = { description: 'Mood tracker aggregated statistics' }
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
   * #swagger.responses[200] = { description: 'Successfully uploaded' }
   * #swagger.responses[400] = { description: '<error_message>' }
   */

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
   * #swagger.parameters['startDate'] = { in: 'query', required: false, type: 'integer', description: 'startDate' }
   * #swagger.parameters['endDate'] = { in: 'query', required: false, type: 'integer', description: 'endDate' }
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

router.put("/content-active-status", authenticateAdmin, async (req, res) => {
  /**
   * #swagger.tags = ['Admin']
   * #swagger.method = 'PUT'
   * #swagger.path = '/admin/content-active-status'
   * #swagger.description = 'Update content module active status for a country'
   * #swagger.security = [{ "CountryAdminBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $contentType: 'videos', $status: 'enabled' } }
   * #swagger.responses[200] = { description: 'Updated Country Data Object' }
   * #swagger.responses[401] = { description: 'Admin Not Authorised' }
   * #swagger.responses[401] = { description: 'No Permissions' }
   * #swagger.responses[404] = { description: 'Country Not Found' }
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

router.get(
  "/statistics/sos-center-clicks",
  // authenticateAdmin,
  async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/statistics/sos-center-clicks'
     * #swagger.description = 'Get aggregated SOS center click statistics'
     * #swagger.security = [{ "AnyAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.responses[200] = { description: 'SOS Center Click Statistics Data Object' }
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

router.get(
  "/statistics/providers/availability/report",
  authenticateAdmin,
  authorizeAdmin("country"),
  async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/statistics/providers/availability/report'
     * #swagger.description = 'Download provider availability report for the next 30 days as CSV'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.responses[200] = { description: 'CSV file download', content: { 'text/csv': { schema: { type: 'string' } } } }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[403] = { description: 'No Permissions' }
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

    const contentType = response.headers.get("content-type");
    const contentDisposition = response.headers.get("content-disposition");

    if (contentType) res.setHeader("Content-Type", contentType);
    if (contentDisposition)
      res.setHeader("Content-Disposition", contentDisposition);

    response.body.pipe(res);
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
     * #swagger.parameters['obj'] = { in: 'body', schema: { $name: 'Organization Name'} }
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
     * #swagger.parameters['obj'] = { in: 'body', schema: { $organizationId: '2dc1092c-a13d-4d55-9b1f-81d3b3e974c1', $name: 'Organization Name'} }
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

router
  .route("/organization/:id")
  .get(authenticateAdmin, async (req, res) => {
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
  })
  .delete(authenticateAdmin, async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'DELETE'
     * #swagger.path = '/admin/organization-details'
     * #swagger.description = 'Delete organization'
     * #swagger.security = [{ "GlobalAdminBearer": [] }]
     * #swagger.responses[200] = { description: 'Organization Deleted Successfully' }
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

router
  .route("/country/videos")
  .get(async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/country/videos'
     * #swagger.description = 'Get all videos for a country'
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.responses[200] = { description: 'Array of Videos IDs' }
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
     * #swagger.path = '/admin/country/videos'
     * #swagger.description = 'Add given video to a country'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $id: '1' } }
     * #swagger.responses[200] = { description: 'Updated Array of Videos IDs' }
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
     * #swagger.path = '/admin/country/videos'
     * #swagger.description = 'Initialise videos for a new country'
     * #swagger.security = [{ "GlobalAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.responses[200] = { description: 'Array of Videos IDs' }
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
     * #swagger.path = '/admin/country/videos'
     * #swagger.description = 'Delete given video from a country'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $id: '1' } }
     * #swagger.responses[200] = { description: 'Updated Array of Videos IDs' }
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
  .route("/country/podcasts")
  .get(async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/country/podcasts'
     * #swagger.description = 'Get all podcasts for a country'
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.responses[200] = { description: 'Array of Podcast IDs' }
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
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'PUT'
     * #swagger.path = '/admin/country/podcasts'
     * #swagger.description = 'Add given podcast to a country'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $id: '1' } }
     * #swagger.responses[200] = { description: 'Updated Array of Podcast IDs' }
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
  .post(async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'POST'
     * #swagger.path = '/admin/country/podcasts'
     * #swagger.description = 'Initialise podcasts for a new country'
     * #swagger.security = [{ "GlobalAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.responses[200] = { description: 'Array of Podcast IDs' }
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
  .delete(async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'DELETE'
     * #swagger.path = '/admin/country/podcasts'
     * #swagger.description = 'Delete given podcast from a country'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $id: '1' } }
     * #swagger.responses[200] = { description: 'Updated Array of Podcast IDs' }
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
  .route("/baseline-assessment")
  .get(authenticateAdmin, async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/baseline-assessment'
     * #swagger.description = 'Get all baseline assessment thresholds'
     * #swagger.security = [{ "GlobalAdminBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.responses[200] = { description: 'Array of Baseline Assessment Thresholds' }
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
  .post(authenticateAdmin, async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'POST'
     * #swagger.path = '/admin/baseline-assessment'
     * #swagger.description = 'Create a new baseline assessment threshold'
     * #swagger.security = [{ "GlobalAdminBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $factor: 'depression', $below: 'Low risk', $above: 'High risk' } }
     * #swagger.responses[201] = { description: 'Created Baseline Assessment Threshold' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     * #swagger.responses[400] = { description: 'Validation Error' }
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

router.get(
  "/baseline-assessment/factor/:factor",
  authenticateAdmin,
  async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/baseline-assessment/factor/{factor}'
     * #swagger.description = 'Get baseline assessment threshold by factor'
     * #swagger.security = [{ "GlobalAdminBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['factor'] = { in: 'path', required: true, type: 'string', description: 'The factor to get threshold for (e.g., depression, anxiety)' }
     * #swagger.responses[200] = { description: 'Baseline Assessment Threshold Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     * #swagger.responses[404] = { description: 'Factor Not Found' }
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

router
  .route("/baseline-assessment/:id")
  .put(authenticateAdmin, async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'PUT'
     * #swagger.path = '/admin/baseline-assessment/{id}'
     * #swagger.description = 'Update baseline assessment threshold by UUID'
     * #swagger.security = [{ "GlobalAdminBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['id'] = { in: 'path', required: true, type: 'string', description: 'UUID of the baseline assessment threshold' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $factor: 'depression', $below: 'Low risk', $above: 'High risk' } }
     * #swagger.responses[200] = { description: 'Updated Baseline Assessment Threshold' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     * #swagger.responses[404] = { description: 'Baseline Assessment Threshold Not Found' }
     * #swagger.responses[400] = { description: 'Validation Error' }
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

router.get(
  "/baseline-assessment/analysis",
  authenticateAdmin,
  async (req, res) => {
    /**
     * #swagger.tags = ['Admin']
     * #swagger.method = 'GET'
     * #swagger.path = '/admin/baseline-assessment/analysis'
     * #swagger.description = 'Get analysis of all completed baseline assessments with median calculations'
     * #swagger.security = [{ "GlobalAdminBearer": [] }]
     * #swagger.responses[200] = { description: 'Analysis of all completed baseline assessments with median calculations' }
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
  }
);

export { router };
