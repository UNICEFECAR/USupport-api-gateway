import express from "express";
import fetch from "node-fetch";

import {
  authenticate,
  authenticateAdmin,
  authenticateByPlatform,
  authenticateIfBearer,
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

router.route("/countries-with-languages").get(async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'GET'
   * #swagger.path = '/user/countries-with-languages'
   * #swagger.description = 'Get all countries with their languages'
   * #swagger.responses[200] = { description: 'Countries Data Object' }
   */

  const response = await fetch(`${USER_URL}/user/v1/countries/${req.url}`, {
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
     * #swagger.parameters['obj'] = { in: 'body', schema: { $name: 'John', patronym: 'Johny', $surname: 'Doe', nickname: 'JD123', $email: 'john.doe@email.com', phone: '+441234567890', specializations: ['psychologist', 'coach'], street: 'Some Street', city: 'Another City', postcode: '1234', education: ['Education 1', 'Education 2'], sex: 'unspecified', consultationPrice: 60, description: 'Some Long Description Here...', workWithIds: ['22e3b2f6-5c95-4044-b444-592b5d41338a', 'ccd6a85d-ab7d-4700-953d-cda0775f37e5'], languageIds: ['69f03082-ee81-4a11-a7a2-84e82bd54369', '2dc1092c-a13d-4d55-9b1f-81d3b3e974c1'], videoLink: 'https://video.link' } }
     * #swagger.responses[200] = { description: 'New Provider Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     * #swagger.responses[409] = { description: 'Email Already Used' }
     */

    // Put a placeholder password in order to pass the passport validation
    // This password won't be used in any way to authenticate the provider
    const payload = { userType: "provider", password: "asdasdA1", ...req.body };

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
   * #swagger.parameters['obj'] = { in: 'body', schema: { $userType: 'client', email: 'john.doe@email.com', userAccessToken: 'b1igkLasNQ', $password: 'SomePass123', $otp: '1234', isMobile: false } }
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
      "Cache-control": "no-cache",
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

router.route("/rescue/forgot-password-link").post(async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'POST'
   * #swagger.path = '/user/rescue/forgot-password-link'
   * #swagger.description = 'Initiate Forgot Password Process (Send email with token)'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['email'] = { in: 'query', required: true, type: 'string', description: 'Email of The User' }
   * #swagger.parameters['type'] = { in: 'query', required: true, type: 'string', description: 'Type of The User' }
   * #swagger.responses[200] = { description: 'Success Status' }
   */
  const response = await fetch(`${USER_URL}/user/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
      "Cache-control": "no-cache",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/rescue/forgot-password").post(async (req, res) => {
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
        "x-user-type": req.user.type,
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

router.route("/2fa").post(async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'POST'
   * #swagger.path = '/user/2fa'
   * #swagger.description = 'Request Provider 2FA OTP'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $email: 'john.doe@email.com', $password: 'SomePass123' } }
   * #swagger.responses[200] = { description: 'Provider 2FA OTP for login' }
   * #swagger.responses[404] = { description: 'Invalid Email' }
   * #swagger.responses[404] = { description: 'Invalid Password' }
   * #swagger.responses[429] = { description: 'Too Many OTP Requests' }
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

router.route("/add-contact-form").post(async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'POST'
   * #swagger.path = '/user/add-contact-form/'
   * #swagger.description = 'add contact form to the DB'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $email: 'user@mail.com', $subject: 'Subject', $message: 'Here is a sample message', $sentFrom: 'client'  } }
   * #swagger.responses[200] = { description: 'Success Status' }
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

router.route("/change-language").put(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'PUT'
   * #swagger.path = '/user/change-language'
   * #swagger.description = 'Change user language'
   * #swagger.security = [{ "AnyUserBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $language: 'en', $userType: 'client' } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[401] = { description: 'User Not Authorised' }
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

router.route("/email-otp").post(async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'POST'
   * #swagger.path = '/user/email-otp'
   * #swagger.description = 'Send code to email for email verification'
   * #swagger.parameters['obj'] = { in: 'body', schema: { $email: 'john.doe@email.com'} }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[409] = { description: 'Email already used' }
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

router.route("/validate-captcha").post(async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'POST'
   * #swagger.path = '/user/validate-captcha'
   * #swagger.description = 'Validate captcha'
   * #swagger.parameters['obj'] = { in: 'body', schema: { $captcha: 'captcha'} }
   * #swagger.responses[200] = { description: 'Success Status' }
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

router.route("/validate-platform-password").post(async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'POST'
   * #swagger.path = '/user/validate-platform-password'
   * #swagger.description = 'Validate platform password'
   * #swagger.parameters['obj'] = { in: 'body', schema: { $password: 'password'} }
   * #swagger.responses[200] = { description: 'Success Status' }
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

router.route("/logout").post(async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'POST'
   * #swagger.path = '/user/logout'
   * #swagger.description = 'Logout user by adding his JWT to the blacklist'
   * #swagger.security = [{ "AnyUserBearer": [] }]
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[401] = { description: 'User Not Authorised' }
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

router.get("/access-platform", authenticateIfBearer, async (req, res) => {
  const headers = {
    ...req.headers,
    host: USER_LOCAL_HOST,
    "Content-type": "application/json",
    "cache-control": "no-cache",
  };
  if (req.user) {
    headers["x-user-id"] = req.user.user_id;
  }
  const response = await fetch(`${USER_URL}/user/v1/user${req.url}`, {
    method: req.method,
    headers,
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.get("/content-ratings", authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'GET'
   * #swagger.path = '/user/content-ratings'
   * #swagger.description = 'Get content ratings which a user has given'
   * #swagger.security = [{ "AnyUserBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.responses[200] = { description: 'Content Rating data object' }
   */
  const response = await fetch(`${USER_URL}/user/v1/user${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
      "Content-type": "application/json",
      "x-user-id": req.user.user_id,
      "cache-control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router.get("/ratings-for-content", authenticateByPlatform, async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'GET'
   * #swagger.path = '/user/rating-for-content'
   * #swagger.description = 'Get content rating for user'
   * #swagger.security = [{ "AnyUserBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.responses[200] = { description: 'Content Rating data object' }
   */
  const response = await fetch(`${USER_URL}/user/v1/user${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
      "Content-type": "application/json",
      "x-user-id": req.user?.user_id || null,
      "cache-control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router.post("/content-rating", authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'POST'
   * #swagger.path = '/user/content-rating'
   * #swagger.description = 'Rate content'
   * #swagger.security = [{ "AnyUserBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $contentId: 1, $contentType: 'article', $positive: true} }
   * #swagger.responses[200] = { description: 'Success Status' }
   */
  const response = await fetch(`${USER_URL}/user/v1/user${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
      "Content-type": "application/json",
      "x-user-id": req.user.user_id,
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router.post("/generate-pdf", authenticateByPlatform, async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'POST'
   * #swagger.path = '/user/generate-pdf'
   * #swagger.description = 'Generate PDF from content URL'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $contentUrl: 'https://cms-url.com/api/content/123', $contentType: 'article' } }
   * #swagger.responses[200] = { description: 'PDF file' }
   */
  const response = await fetch(`${USER_URL}/user/v1/user${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: USER_LOCAL_HOST,
      "Content-type": "application/json",
      "x-user-id": req.user?.user_id || null,
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  // Set appropriate headers for PDF download
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", 'attachment; filename="content.pdf"');

  // Send PDF data directly to client
  response.body.pipe(res);
});

export { router };
