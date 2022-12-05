import express from "express";
import fetch from "node-fetch";

import { authenticate } from "#middlewares/auth";

const router = express.Router();

const MESSAGING_LOCAL_HOST = "http://localhost:3006";

const MESSAGING_URL = process.env.MESSAGING_URL;

router.route("/").get(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Messaging']
   * #swagger.method = 'GET'
   * #swagger.path = '/messaging'
   * #swagger.description = 'Get a chat by given ID'
   * #swagger.security = [{ "AnyUserBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['chatId'] = { in: 'query', required: true, type: 'string', description: 'ID Of The Chat' }
   * #swagger.responses[200] = { description: 'Chat Data Object' }
   * #swagger.responses[401] = { description: 'User Not Authorised' }
   * #swagger.responses[404] = { description: 'Chat Not Found' }
   */

  const response = await fetch(`${MESSAGING_URL}/messaging/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: MESSAGING_LOCAL_HOST,
      "Content-type": "application/json",
      "Cache-control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/").put(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Messaging']
   * #swagger.method = 'PUT'
   * #swagger.path = '/messaging'
   * #swagger.description = 'Add a message to the given chat'
   * #swagger.security = [{ "AnyUserBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $chatId: '22e3b2f6-5c95-4044-b444-592b5d41338a', $message: { $type: 'text', $time: '1668787200', $content: 'An example message.' } } }
   * #swagger.responses[200] = { description: 'Updated Chat Data Object' }
   * #swagger.responses[401] = { description: 'User Not Authorised' }
   * #swagger.responses[404] = { description: 'Chat Not Found' }
   */
  const response = await fetch(`${MESSAGING_URL}/messaging/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: MESSAGING_LOCAL_HOST,
      "x-user-id": req.user.user_id,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router
  .route("/client-socket")
  .get(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Messaging']
     * #swagger.method = 'GET'
     * #swagger.path = '/messaging/client-socket'
     * #swagger.description = 'Get a client socket by given chat ID'
     * #swagger.security = [{ "ClientBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['chatId'] = { in: 'query', required: true, type: 'string', description: 'ID Of The Chat' }
     * #swagger.responses[200] = { description: 'Socket Data' }
     * #swagger.responses[401] = { description: 'Client Not Authorised' }
     * #swagger.responses[404] = { description: 'Chat Not Found' }
     */

    const response = await fetch(`${MESSAGING_URL}/messaging/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: MESSAGING_LOCAL_HOST,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
      },
    }).catch(console.log);

    const result = await response.json();
    return res.status(response.status).send(result);
  })
  .put(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Messaging']
     * #swagger.method = 'PUT'
     * #swagger.path = '/messaging/client-socket'
     * #swagger.description = 'Update the client socket ID for a given chat ID'
     * #swagger.security = [{ "ClientBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $chatId: '22e3b2f6-5c95-4044-b444-592b5d41338a', $socketId: 'ySjFsdF9JwVOJvbDAAAJ' } }
     * #swagger.responses[200] = { description: 'Updated Chat Data Object' }
     * #swagger.responses[401] = { description: 'Client Not Authorised' }
     * #swagger.responses[404] = { description: 'Chat Not Found' }
     */
    const response = await fetch(`${MESSAGING_URL}/messaging/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: MESSAGING_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();
    return res.status(response.status).send(result);
  });

router
  .route("/provider-socket")
  .get(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Messaging']
     * #swagger.method = 'GET'
     * #swagger.path = '/messaging/provider-socket'
     * #swagger.description = 'Get a provider socket by given chat ID'
     * #swagger.security = [{ "ProviderBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['chatId'] = { in: 'query', required: true, type: 'string', description: 'ID Of The Chat' }
     * #swagger.responses[200] = { description: 'Socket Data' }
     * #swagger.responses[401] = { description: 'Provider Not Authorised' }
     * #swagger.responses[404] = { description: 'Chat Not Found' }
     */

    const response = await fetch(`${MESSAGING_URL}/messaging/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: MESSAGING_LOCAL_HOST,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
      },
    }).catch(console.log);

    const result = await response.json();
    return res.status(response.status).send(result);
  })
  .put(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Messaging']
     * #swagger.method = 'PUT'
     * #swagger.path = '/messaging/provider-socket'
     * #swagger.description = 'Update the provider socket ID for a given chat ID'
     * #swagger.security = [{ "ProviderBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $chatId: '22e3b2f6-5c95-4044-b444-592b5d41338a', $socketId: 'ySjFsdF9JwVOJvbDAAAJ' } }
     * #swagger.responses[200] = { description: 'Updated Chat Data Object' }
     * #swagger.responses[401] = { description: 'Provider Not Authorised' }
     * #swagger.responses[404] = { description: 'Chat Not Found' }
     */
    const response = await fetch(`${MESSAGING_URL}/messaging/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: MESSAGING_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();
    return res.status(response.status).send(result);
  });

export { router };
