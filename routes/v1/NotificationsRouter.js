import express from "express";
import fetch from "node-fetch";

import { authenticate } from "#middlewares/auth";

const router = express.Router();

const NOTIFICATIONS_LOCAL_HOST = "http://localhost:3005";

const NOTIFICATIONS_URL = process.env.NOTIFICATIONS_URL;

router.route("/user").get(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Notifications']
   * #swagger.method = 'GET'
   * #swagger.path = '/notifications/user'
   * #swagger.description = 'Get notifications for the current user ID'
   * #swagger.security = [{ "AnyUserBearer": [] }]
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['pageNo'] = { in: 'query', required: true, type: 'string', description: 'The notifications page number to get' }
   * #swagger.responses[200] = { description: 'Array of Notification Data Objects' }
   * #swagger.responses[401] = { description: 'User Not Authorised' }
   */

  const response = await fetch(
    `${NOTIFICATIONS_URL}/notifications/v1/${req.url}`,
    {
      method: req.method,
      headers: {
        ...req.headers,
        host: NOTIFICATIONS_LOCAL_HOST,
        "x-user-id": req.user.user_id,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
      },
    }
  ).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/user-has-unread").get(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Notifications']
   * #swagger.method = 'GET'
   * #swagger.path = '/notifications/user-has-unread'
   * #swagger.description = 'Get whether the current user has unread notifications'
   * #swagger.security = [{ "AnyUserBearer": [] }]
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.responses[200] = { description: 'Whether the user has unread notifications' }
   * #swagger.responses[401] = { description: 'User Not Authorised' }
   */

  const response = await fetch(
    `${NOTIFICATIONS_URL}/notifications/v1/${req.url}`,
    {
      method: req.method,
      headers: {
        ...req.headers,
        host: NOTIFICATIONS_LOCAL_HOST,
        "x-user-id": req.user.user_id,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
      },
    }
  ).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/is-read").put(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Notifications']
   * #swagger.method = 'PUT'
   * #swagger.path = '/notifications/is-read'
   * #swagger.description = 'Update the read status of given notifications'
   * #swagger.security = [{ "AnyUserBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $notificationIds: ['22e3b2f6-5c95-4044-b444-592b5d41338a', '22e3b2f6-5c95-4044-b444-592b5d41338b'] } }
   * #swagger.responses[200] = { description: 'Updated Notifications Data Object' }
   * #swagger.responses[401] = { description: 'User Not Authorised' }
   * #swagger.responses[404] = { description: 'Notification Not Found' }
   */
  const response = await fetch(
    `${NOTIFICATIONS_URL}/notifications/v1/${req.url}`,
    {
      method: req.method,
      headers: {
        ...req.headers,
        host: NOTIFICATIONS_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }
  ).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/read-all").put(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Notifications']
   * #swagger.method = 'PUT'
   * #swagger.path = '/notifications/read-all'
   * #swagger.description = 'Update the read status of all notifications for the current user'
   * #swagger.security = [{ "AnyUserBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.responses[200] = { description: 'Updated Notifications Data Object' }
   * #swagger.responses[401] = { description: 'User Not Authorised' }
   * #swagger.responses[404] = { description: 'Notification Not Found' }
   */
  const response = await fetch(
    `${NOTIFICATIONS_URL}/notifications/v1/${req.url}`,
    {
      method: req.method,
      headers: {
        ...req.headers,
        host: NOTIFICATIONS_LOCAL_HOST,
        "x-user-id": req.user.user_id,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }
  ).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

export { router };
