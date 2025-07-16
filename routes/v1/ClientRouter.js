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
     * #swagger.path = '/client'
     * #swagger.description = 'Get current client data'
     * #swagger.security = [{ "ClientBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.responses[200] = { description: 'Client Data Object' }
     * #swagger.responses[401] = { description: 'Client Not Authorised' }
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
     * #swagger.path = '/client'
     * #swagger.description = 'Update current client data'
     * #swagger.security = [{ "ClientBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { name: 'John', surname: 'Doe', $nickname: 'JD123', email: 'john.doe@email.com', userAccessToken: 'b1igkLasNQ', sex: 'unspecified', yearOfBirth: 2000, urbanRural: 'urban' } }
     * #swagger.responses[200] = { description: 'Updated Client Data Object' }
     * #swagger.responses[401] = { description: 'Client Not Authorised' }
     * #swagger.responses[404] = { description: 'Client Not Found' }
     * #swagger.responses[409] = { description: 'Email Already Used' }
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
     * #swagger.path = '/client'
     * #swagger.description = 'Delete current client data'
     * #swagger.security = [{ "ClientBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $password: 'SomePass123' } }
     * #swagger.responses[200] = { description: 'Deleted Client Data Object' }
     * #swagger.responses[401] = { description: 'Client Not Authorised' }
     * #swagger.responses[404] = { description: 'Incorrect Password' }
     * #swagger.responses[404] = { description: 'Client Not Found' }
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

router.route("/by-id").get(async (req, res) => {
  /**
   * #swagger.tags = ['Client']
   * #swagger.method = 'GET'
   * #swagger.path = '/client/by-id'
   * #swagger.description = 'Get client data by id'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['clientId'] = { in: 'query', required: true, type: 'string', description: 'The ID of the client' }
   * #swagger.responses[200] = { description: 'Client Data Object' }
   * #swagger.responses[404] = { description: 'Client Not Found' }
   */

  const response = await fetch(`${CLIENT_URL}/client/v1/client${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: CLIENT_LOCAL_HOST,
      "Content-type": "application/json",
      "Cache-control": "no-cache",
    },
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
     * #swagger.path = '/client/image'
     * #swagger.description = 'Update the client image'
     * #swagger.security = [{ "ClientBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.responses[200] = { description: 'Updated Client Data Object' }
     * #swagger.responses[401] = { description: 'Client Not Authorised' }
     * #swagger.responses[404] = { description: 'Client Not Found' }
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
     * #swagger.path = '/client/image'
     * #swagger.description = 'Delete the client image'
     * #swagger.security = [{ "ClientBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.responses[200] = { description: 'Updated Client Data Object' }
     * #swagger.responses[401] = { description: 'Client Not Authorised' }
     * #swagger.responses[404] = { description: 'Client Not Found' }
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
     * #swagger.path = '/client/data-processing-agreement'
     * #swagger.description = 'Update the client data-processing-agreement'
     * #swagger.security = [{ "ClientBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $dataProcessing: true } }
     * #swagger.responses[200] = { description: 'Updated Client Data Object' }
     * #swagger.responses[401] = { description: 'Client Not Authorised' }
     * #swagger.responses[404] = { description: 'Client Not Found' }
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

router.route("/consultation/all").get(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Client']
   * #swagger.method = 'GET'
   * #swagger.path = '/client/consultation/all'
   * #swagger.description = 'Get all consultations for a client'
   * #swagger.security = [{ "ClientBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.responses[200] = { description: 'Array of Objects Containing All Suggested, Scheduled, and Finished Consultations' }
   * #swagger.responses[401] = { description: 'Client Not Authorised' }
   * #swagger.responses[404] = { description: 'Provider Not Found' }
   */

  const response = await fetch(`${CLIENT_URL}/client/v1${req.url}`, {
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
});

router
  .route("/consultation/security-check")
  .get(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Client']
     * #swagger.method = 'GET'
     * #swagger.path = '/client/consultation/security-check'
     * #swagger.description = 'Get security check answers by given consultation id'
     * #swagger.security = [{ "ClientBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['consultationId'] = { in: 'query', required: true, type: 'string', description: 'The ID of the consultation' }
     * #swagger.responses[200] = { description: 'Consultation Security Check Answers Data Object' }
     * #swagger.responses[401] = { description: 'Client Not Authorised' }
     */

    const response = await fetch(`${CLIENT_URL}/client/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: CLIENT_LOCAL_HOST,
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
     * #swagger.path = '/client/consultation/security-check'
     * #swagger.description = 'Update consultation security check answers'
     * #swagger.security = [{ "ClientBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $consultationId: '2dc1092c-a13d-4d55-9b1f-81d3b3e974c1', $contactsDisclosure: 'true', $suggestOutsideMeeting: 'false', $identityCoercion: 'true', $unsafeFeeling: 'true', $moreDetails: 'Some more details'  } }
     * #swagger.responses[200] = { description: 'Updated Consultation Security Check Answers Data Object' }
     * #swagger.responses[401] = { description: 'Client Not Authorised' }
     */
    const response = await fetch(`${CLIENT_URL}/client/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: CLIENT_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  })
  .post(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Client']
     * #swagger.method = 'POST'
     * #swagger.path = '/client/consultation/security-check'
     * #swagger.description = 'Update consultation security check answers'
     * #swagger.security = [{ "ClientBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $consultationId: '2dc1092c-a13d-4d55-9b1f-81d3b3e974c1', $contactsDisclosure: 'true', $suggestOutsideMeeting: 'false', $identityCoercion: 'true', $unsafeFeeling: 'true', $moreDetails: 'Some more details'  } }
     * #swagger.responses[200] = { description: 'Created Consultation Security Check Answers Data Object' }
     * #swagger.responses[401] = { description: 'Client Not Authorised' }
     */
    const response = await fetch(`${CLIENT_URL}/client/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: CLIENT_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

router.route("/mood-tracker/today").get(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Client']
   * #swagger.method = 'GET'
   * #swagger.path = '/client/mood-tracker/today'
   * #swagger.description = 'Get a mood tracker entry for the current client for the current day'
   * #swagger.security = [{ "ClientBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.responses[200] = { description: 'Mood Track Data Object' }
   * #swagger.responses[401] = { description: 'Client Not Authorised' }
   */

  const response = await fetch(`${CLIENT_URL}/client/v1${req.url}`, {
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
});

router.route("/mood-tracker/entries").get(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Client']
   * #swagger.method = 'GET'
   * #swagger.path = '/client/mood-tracker/entries'
   * #swagger.description = 'Get n mood tracker entries for the current client'
   * #swagger.security = [{ "ClientBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['limit'] = { in: 'query', required: true, type: 'number', description: 'The amount of entries' }
   * #swagger.parameters['pageNum'] = { in: 'query', required: true, type: 'string', description: 'The pageNum to be used' }
   * #swagger.responses[200] = { description: 'Mood Track Data Object' }
   * #swagger.responses[401] = { description: 'Client Not Authorised' }
   */

  const response = await fetch(`${CLIENT_URL}/client/v1${req.url}`, {
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
});

router.route("/mood-tracker").post(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Client']
   * #swagger.method = 'POST'
   * #swagger.path = '/client/mood-tracker'
   * #swagger.description = 'Add mood tracker entry for the current client for the current day'
   * #swagger.security = [{ "ClientBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $mood: 'happy', comment: 'Additional comment', } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[401] = { description: 'Client Not Authorised' }
   */
  const response = await fetch(`${CLIENT_URL}/client/v1${req.url}`, {
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
  .route("/information-portal-suggestion")
  .post(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Client']
     * #swagger.method = 'POST'
     * #swagger.path = '/client/information-portal-suggestion'
     * #swagger.description = 'Add a suggestion for the information portal'
     * #swagger.security = [{ "ClientBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $suggestion: 'Add more categories' } }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[401] = { description: 'Client Not Authorised' }
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

router.route("/add-rating").post(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Client']
   * #swagger.method = 'POST'
   * #swagger.path = '/client/add-rating'
   * #swagger.description = 'Add a client rating'
   * #swagger.security = [{ "ClientBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $rating: 5, $comment: 'The platform is very helpful' } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[401] = { description: 'Client Not Authorised' }
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
  .route("/add-push-notification-token")
  .put(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Client']
     * #swagger.method = 'PUT'
     * #swagger.path = '/client//add-push-notification-token'
     * #swagger.description = 'Add a push notification token for the client'
     * #swagger.security = [{ "ClientBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $pushNotificationToken: 'ExponentPushToken[0yOW7cAK4encXa8_CwxEvc]' } }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[401] = { description: 'Client Not Authorised' }
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

router.route("/check-coupon").get(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Client']
   * #swagger.method = 'GET'
   * #swagger.path = '/client/check-coupon'
   * #swagger.description = 'Check if a coupon is valid'
   * #swagger.security = [{ "ClientBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['couponCode'] = { in: 'query', required: true, type: 'string', description: 'Coupon code' }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[401] = { description: 'Client Not Authorised' }
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
});

router
  .route("/consultation/unblock-slot")
  .put(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Client']
     * #swagger.method = 'PUT'
     * #swagger.path = '/client/consultation/unblock-slot'
     * #swagger.description = 'Client to unblock a slot'
     * #swagger.security = [{ "AnyUserBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $consultationId: '22e3b2f6-5c95-4044-b444-592b5d41338a'} }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[401] = { description: 'User Not Authorised' }
     * #swagger.responses[404] = { description: 'Consultation Not Found' }
     */
    const response = await fetch(`${CLIENT_URL}/client/v1${req.url}`, {
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

router.route("/my-qa/answered/all").get(async (req, res) => {
  /**
   * #swagger.tags = ['Client']
   * #swagger.method = 'GET'
   * #swagger.path = '/client/my-qa/answered/all'
   * #swagger.description = 'Get all anwered questions'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[401] = { description: 'Client Not Authorised' }
   */
  const response = await fetch(`${CLIENT_URL}/client/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: CLIENT_LOCAL_HOST,
      "Content-type": "application/json",
      "Cache-Control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router.route("/my-qa/create-question").post(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Client']
   * #swagger.method = 'POST'
   * #swagger.path = '/client/my-qa/create-question'
   * #swagger.description = 'Create a question'
   * #swagger.security = [{ "ClientBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $question: 'How to focus better' } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[401] = { description: 'Client Not Authorised' }
   */
  const response = await fetch(`${CLIENT_URL}/client/v1${req.url}`, {
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

router.route("/my-qa/client-questions").get(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Client']
   * #swagger.method = 'GET'
   * #swagger.path = '/client/my-qa/client-questions'
   * #swagger.description = 'Get all questions asked by a client'
   * #swagger.security = [{ "ClientBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[401] = { description: 'Client Not Authorised' }
   */
  const response = await fetch(`${CLIENT_URL}/client/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: CLIENT_LOCAL_HOST,
      "x-user-id": req.user.user_id,
      "Content-type": "application/json",
      "Cache-Control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router.route("/my-qa/questions").get(async (req, res) => {
  /**
   * #swagger.tags = ['Client']
   * #swagger.method = 'GET'
   * #swagger.path = '/client/my-qa/all-questions'
   * #swagger.description = 'Get all questions'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['orderBy'] = { in: 'query', required: true, type: 'string', description: 'The sorting order' }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[401] = { description: 'Client Not Authorised' }
   */
  const response = await fetch(`${CLIENT_URL}/client/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: CLIENT_LOCAL_HOST,
      "Content-type": "application/json",
      "Cache-Control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router.route("/my-qa/answer-vote").post(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Client']
   * #swagger.method = 'POST'
   * #swagger.path = '/client/my-qa/vote-answer'
   * #swagger.description = 'Vote an answer'
   * #swagger.security = [{ "ClientBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $answerId: '22e3b2f6-5c95-4044-b444-592b5d41338a', $vote: 'like' } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[401] = { description: 'Client Not Authorised' }
   */
  const response = await fetch(`${CLIENT_URL}/client/v1${req.url}`, {
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

router.route("/chat-history").put(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Client']
   * #swagger.method = 'PUT'
   * #swagger.path = '/client/chat-history'
   * #swagger.description = 'Delete chat history for a client'
   * #swagger.security = [{ "ClientBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code' }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[401] = { description: 'Client Not Authorised' }
   */
  const response = await fetch(`${CLIENT_URL}/client/v1/client${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      "x-user-id": req.user.user_id,
      host: CLIENT_LOCAL_HOST,
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router
  .route("/add-category-interaction")
  .post(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Client']
     * #swagger.method = 'POST'
     * #swagger.path = '/client/add-category-interaction'
     * #swagger.description = 'Add category interaction'
     * #swagger.security = [{ "ClientBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $category_id: '22e3b2f6-5c95-4044-b444-592b5d41338a' } }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[401] = { description: 'Client Not Authorised' }
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

router.route("/category-interactions").get(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Client']
   * #swagger.method = 'GET'
   * #swagger.path = '/client/category-interactions'
   * #swagger.description = 'Get category interactions'
   * #swagger.security = [{ "ClientBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[401] = { description: 'Client Not Authorised' }
   */
  const response = await fetch(`${CLIENT_URL}/client/v1/client${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: CLIENT_LOCAL_HOST,
      "x-user-id": req.user.user_id,
      "Content-type": "application/json",
    },
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router.route("/organization").get(async (req, res) => {
  /**
   * #swagger.tags = ['Client']
   * #swagger.method = 'GET'
   * #swagger.path = '/client/organization'
   * #swagger.description = 'Get all organizations'
   * #swagger.security = [{ "ClientBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[401] = { description: 'Client Not Authorised' }
   */

  const response = await fetch(`${CLIENT_URL}/client/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: CLIENT_LOCAL_HOST,
      "Cache-Control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/organization/:organizationId").get(async (req, res) => {
  /**
   * #swagger.tags = ['Client']
   * #swagger.method = 'GET'
   * #swagger.path = '/client/organization/:organizationId'
   * #swagger.description = 'Get an organization by id'
   * #swagger.security = [{ "ClientBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[401] = { description: 'Client Not Authorised' }
   */
  const response = await fetch(`${CLIENT_URL}/client/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: CLIENT_LOCAL_HOST,
      "Cache-Control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router
  .route("/add-platform-suggestion")
  .post(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Client']
     * #swagger.method = 'POST'
     * #swagger.path = '/client/add-platform-suggestion'
     * #swagger.description = 'Add platform suggestion'
     * #swagger.security = [{ "ClientBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $suggestion: 'I love the app' } }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[401] = { description: 'Client Not Authorised' }
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
