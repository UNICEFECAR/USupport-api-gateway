import express from "express";
import fetch from "node-fetch";

import {
  authenticate,
  authenticateAdmin,
  authorizeAdmin,
} from "#middlewares/auth";

const router = express.Router();

const USER_LOCAL_HOST = "http://localhost:3010";

const USER_URL = process.env.USER_URL;

router.route("/").get(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'GET'
   * #swagger.path = '/user'
   * #swagger.description = 'Get Current User'
   * #swagger.security = [{ "AnyUserBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.responses[200] = { description: 'User Data Object' }
   * #swagger.responses[404] = { description: 'User Not Found' }
   * #swagger.responses[401] = { description: 'User Not Authorised' }
   */

  const response = await fetch(`${USER_URL}/user/v1/user${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
      "Content-type": "application/json",
      "Cache-control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/languages").get(async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'GET'
   * #swagger.path = '/user/languages'
   * #swagger.description = 'Get all active languages'
   * #swagger.responses[200] = { description: 'Languages Data Object' }
   */

  const response = await fetch(`${USER_URL}/user/v1${req.url}`, {
    method: "GET",
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
      "Content-Type": "application/json",
      "Cache-control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/languages/all").get(async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'GET'
   * #swagger.path = '/user/languages/all'
   * #swagger.description = 'Get all languages'
   * #swagger.responses[200] = { description: 'Languages Data Object' }
   */

  const response = await fetch(`${USER_URL}/user/v1${req.url}`, {
    method: "GET",
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
      "Content-Type": "application/json",
      "Cache-control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/countries").get(async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'GET'
   * #swagger.path = '/user/countries'
   * #swagger.description = 'Get all countries'
   * #swagger.responses[200] = { description: 'Countries Data Object' }
   */

  const response = await fetch(`${USER_URL}/user/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
      "Content-Type": "application/json",
      "Cache-control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/countries/by-alpha-2-code").get(async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'GET'
   * #swagger.path = '/user/countries/by-alpha-2-code'
   * #swagger.description = 'Get a specific country by its alpha-2 code'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.responses[200] = { description: 'Country Data Object' }
   * #swagger.responses[404] = { description: 'Country Not Found' }
   */

  const response = await fetch(`${USER_URL}/user/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
      "Content-Type": "application/json",
      "Cache-control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/work-with").get(async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'GET'
   * #swagger.path = '/user/work-with'
   * #swagger.description = 'Get all work with areas'
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.responses[200] = { description: 'Work With Data Object' }
   */

  const response = await fetch(`${USER_URL}/user/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
      "Content-Type": "application/json",
      "Cache-control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router
  .route("/provider/signup")
  .post(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['User']
     * #swagger.method = 'POST'
     * #swagger.path = '/user/provider/signup'
     * #swagger.description = 'Create provider user account'
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $name: 'John', patronym: 'Johny', $surname: 'Doe', nickname: 'JD123', $email: 'john.doe@email.com', phonePrefix: '+44', phone: '1234567890', specializations: ['psychologist', 'coach'], street: 'Some Street', city: 'Another City', postcode: '1234', education: ['Education 1', 'Education 2'], sex: 'unspecified', consultationPrice: 60, description: 'Some Long Description Here...', workWithIds: ['22e3b2f6-5c95-4044-b444-592b5d41338a', 'ccd6a85d-ab7d-4700-953d-cda0775f37e5'], languageIds: ['69f03082-ee81-4a11-a7a2-84e82bd54369', '2dc1092c-a13d-4d55-9b1f-81d3b3e974c1'], videoLink: 'https://video.link' } }
     * #swagger.responses[200] = { description: 'New Provider Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     * #swagger.responses[409] = { description: 'Email Already Used' }
     */
    const payload = { userType: "provider", ...req.body };

    const response = await fetch(`${USER_URL}/user/v1/auth/signup`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: USER_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(payload) }),
    }).catch(console.log);

    const result = await response.json();
    return res.status(response.status).send(result);
  });

router.route("/signup").post(async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'POST'
   * #swagger.path = '/user/signup'
   * #swagger.description = 'Create new client user account'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { name: 'John', surname: 'Doe', $nickname: 'JD123', email: 'john.doe@email.com', userAccessToken: 'b1igkLasNQ', sex: 'unspecified', yearOfBirth: 2000, urbanRural: 'urban' } }
   * #swagger.responses[200] = { description: 'New Client Data Object' }
   * #swagger.responses[409] = { description: 'Email Already Used' }
   */
  const response = await fetch(`${USER_URL}/user/v1/auth${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/login").post(async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'POST'
   * #swagger.path = '/user/login'
   * #swagger.description = 'Login user with email or user access token'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $userType: 'client', email: 'john.doe@email.com', userAccessToken: 'b1igkLasNQ', $password: 'SomePass123' } }
   * #swagger.responses[200] = { description: 'Client/Provider Access and Refresh Tokens' }
   * #swagger.responses[404] = { description: 'Incorrect Email' }
   * #swagger.responses[404] = { description: 'Incorrect Password' }
   */
  const response = await fetch(`${USER_URL}/user/v1/auth${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/tmp-login").post(async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'POST'
   * #swagger.path = '/user/tmp-login'
   * #swagger.description = 'Temporrary login a client using JWT token'
   * #swagger.responses[200] = { description: 'Client Temporary Access Token That Lasts Forever' }
   */
  const response = await fetch(`${USER_URL}/user/v1/auth${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/user-access-token").get(async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'GET'
   * #swagger.path = '/user/user-access-token'
   * #swagger.description = 'Generate new user access token for signup'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.responses[200] = { description: 'User Access Token Object' }
   */
  const response = await fetch(`${USER_URL}/user/v1/auth${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
      "Content-type": "application/json",
    },
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/refresh-token").post(async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'POST'
   * #swagger.path = '/user/refresh-token'
   * #swagger.description = 'Refresh JWT access token'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $refreshToken: '22e3b2f6-5c95-4044-b444-592b5d41338a' } }
   * #swagger.responses[200] = { description: 'New Access and Refresh Tokens' }
   * #swagger.responses[401] = { description: 'Refresh Token Not Valid' }
   */
  const response = await fetch(`${USER_URL}/user/v1/auth${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/password").patch(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'PATCH'
   * #swagger.path = '/user/password'
   * #swagger.description = 'Change user's password'
   * #swagger.security = [{ "AnyUserBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $oldPassword: 'OldPass123', $newPassword: 'NewPass123' } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[401] = { description: 'User Not Authorised' }
   * #swagger.responses[404] = { description: 'Incorrect Password' }
   */
  const response = await fetch(`${USER_URL}/user/v1/user${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
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
     * #swagger.tags = ['User']
     * #swagger.method = 'GET'
     * #swagger.path = '/user/rescue/forgot-password'
     * #swagger.description = 'Initiate Forgot Password Process (Send email with token)'
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['email'] = { in: 'query', required: true, type: 'string', description: 'Email of The User' }
     * #swagger.parameters['type'] = { in: 'query', required: true, type: 'string', description: 'Type of The User' }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[404] = { description: 'User Not Found' }
     */
    const response = await fetch(`${USER_URL}/user/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: USER_LOCAL_HOST,
      },
    }).catch(console.log);

    const result = await response.json();
    return res.status(response.status).send(result);
  })
  .post(async (req, res) => {
    /**
     * #swagger.tags = ['User']
     * #swagger.method = 'POST'
     * #swagger.path = '/user/rescue/forgot-password'
     * #swagger.description = 'Change user's password with forgot password secret token'
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $token: '22e3b2f6-5c95-4044-b444-592b5d41338a', $password: 'NewPass123' } }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[409] = { description: 'Invalid Reset Password Token' }
     */

    const response = await fetch(`${USER_URL}/user/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: USER_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();
    return res.status(response.status).send(result);
  });

router.route("/upload-file").post(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'POST'
   * #swagger.path = '/user/upload-file/'
   * #swagger.description = 'Upload file to AWS S3 bucket'
   * #swagger.security = [{ "AnyUserBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.consumes = ['multipart/form-data']
   * #swagger.parameters['fileContent'] = { in: 'formData', type: 'file', required: true, description: 'File to upload' }
   * #swagger.parameters['fileName'] = { in: 'formData', type: 'string', required: true, description: 'Name of the file' }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[401] = { description: 'User Not Authorised' }
   * #swagger.responses[500] = { description: 'Internal Server Error' }
   */

  const response = await fetch(`${USER_URL}/user/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
      "Content-type": "application/json",
    },
    body: req,
  }).catch(console.log);

  const result = await response?.json();
  return res.status(response?.status).send(result);
});

router
  .route("/upload-file/admin")
  .post(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['User']
     * #swagger.method = 'POST'
     * #swagger.path = '/user/upload-file/'
     * #swagger.description = 'Upload file to AWS S3 bucket'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.consumes = ['multipart/form-data']
     * #swagger.parameters['fileContent'] = { in: 'formData', type: 'file', required: true, description: 'File to upload' }
     * #swagger.parameters['fileName'] = { in: 'formData', type: 'string', required: true, description: 'Name of the file' }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     * #swagger.responses[500] = { description: 'Internal Server Error' }
     */

    const response = await fetch(`${USER_URL}/user/v1/upload-file`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: USER_LOCAL_HOST,
        "Content-type": "application/json",
      },
      body: req,
    }).catch(console.log);

    const result = await response?.json();
    return res.status(response?.status).send(result);
  });

router
  .route("/notification-preferences")
  .get(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['User']
     * #swagger.method = 'GET'
     * #swagger.path = '/user/notification-preferences'
     * #swagger.description = 'Get user's notification preferences'
     * #swagger.security = [{ "AnyUserBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.responses[200] = { description: 'Notification Preferences Data Object' }
     * #swagger.responses[404] = { description: 'Notification Preferences Not Found' }
     */
    const response = await fetch(`${USER_URL}/user/v1/user${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: USER_LOCAL_HOST,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
      },
    }).catch(console.log);

    const result = await response.json();
    return res.status(response.status).send(result);
  })
  .put(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['User']
     * #swagger.method = 'PUT'
     * #swagger.path = '/user/notification-preferences'
     * #swagger.description = 'Update user's notification preferences'
     * #swagger.security = [{ "AnyUserBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $email: true, $consultationReminder: true, $consultationReminderMin: 15, $inPlatform: true, push: true } }
     * #swagger.responses[200] = { description: 'Updated Notification Preferences Data Object' }
     * #swagger.responses[404] = { description: 'Notification Preferences Not Found' }
     */
    const response = await fetch(`${USER_URL}/user/v1/user${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: USER_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();
    return res.status(response.status).send(result);
  });

router
  .route("/consultation/twilio-token")
  .get(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['User']
     * #swagger.method = 'GET'
     * #swagger.path = '/user/consultation/twilio-token'
     * #swagger.description = 'Get client/provider twilio token'
     * #swagger.security = [{ "AnyUserBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['consultationId'] = { in: 'query', required: true, type: 'string', description: 'ID of the consultation' }
     * #swagger.responses[200] = { description: 'Twilio Token Data' }
     * #swagger.responses[401] = { description: 'User Not Authorised' }
     * #swagger.responses[404] = { description: 'Consultation Not Found' }
     */

    const response = await fetch(`${USER_URL}/user/v1/user${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: USER_LOCAL_HOST,
        "x-user-id": req.user.user_id,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
      },
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

export { router };
