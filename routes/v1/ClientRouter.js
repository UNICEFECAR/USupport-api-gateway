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

export { router };
