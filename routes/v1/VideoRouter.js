import { authenticate } from "#middlewares/auth";
import express from "express";
import fetch from "node-fetch";

const router = express.Router();

const VIDEO_LOCAL_HOST = "http://localhost:3003";

const VIDEO_URL = process.env.VIDEO_URL;

router.get("/twilio-token", authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Video']
   * #swagger.method = 'GET'
   * #swagger.path = '/video/twilio-token'
   * #swagger.description = 'Get client/provider twilio token'
   * #swagger.security = [{ "AnyUserBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['consultationId'] = { in: 'query', required: true, type: 'string', description: 'ID of the consultation' }
   * #swagger.responses[200] = { description: 'Twilio Token Data' }
   * #swagger.responses[401] = { description: 'User Not Authorised' }
   * #swagger.responses[404] = { description: 'Consultation Not Found' }
   */

  const response = await fetch(`${VIDEO_URL}/video/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: VIDEO_LOCAL_HOST,
      "x-user-id": req.user.user_id,
      "Content-type": "application/json",
      "Cache-control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router.put("/join-consultation", authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Video']
   * #swagger.method = 'PUT'
   * #swagger.path = '/video/join-consultation'
   * #swagger.description = 'Client/Provider join a consultation'
   * #swagger.security = [{ "AnyUserBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $consultationId: '22e3b2f6-5c95-4044-b444-592b5d41338a', $userType: 'client' } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[401] = { description: 'User Not Authorised' }
   * #swagger.responses[404] = { description: 'Consultation Not Found' }
   */
  const response = await fetch(`${VIDEO_URL}/video/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: VIDEO_LOCAL_HOST,
      "x-user-id": req.user.user_id,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router.put("/leave-consultation", authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Video']
   * #swagger.method = 'PUT'
   * #swagger.path = '/video/leave-consultation'
   * #swagger.description = 'Client/Provider leave a consultation'
   * #swagger.security = [{ "AnyUserBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $consultationId: '22e3b2f6-5c95-4044-b444-592b5d41338a', $userType: 'client' } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[401] = { description: 'User Not Authorised' }
   * #swagger.responses[404] = { description: 'Consultation Not Found' }
   */
  const response = await fetch(`${VIDEO_URL}/video/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: VIDEO_LOCAL_HOST,
      "x-user-id": req.user.user_id,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router.put("/status", authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Video']
   * #swagger.method = 'PUT'
   * #swagger.path = '/video/change-consultation-status'
   * #swagger.description = 'Change consultation status'
   * #swagger.securty = [{ "AnyUserBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $consultationId: '22e3b2f6-5c95-4044-b444-592b5d41338a', $status: 'active' } }
   */
  const response = await fetch(`${VIDEO_URL}/video/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: VIDEO_LOCAL_HOST,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch((err) => conosole.log(err));

  const result = await response.json();

  return res.status(response.status).send(result);
});

export { router };
