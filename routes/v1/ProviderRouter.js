import express from "express";
import fetch from "node-fetch";

import {
  authenticate,
  authenticateAdmin,
  authorizeAdmin,
} from "#middlewares/auth";

const router = express.Router();

const PROVIDER_LOCAL_HOST = "http://localhost:3002";

const PROVIDER_URL = process.env.PROVIDER_URL;

router
  .route("/")
  .get(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Provider']
     * #swagger.method = 'GET'
     * #swagger.path = '/provider'
     * #swagger.description = 'Get current provider data'
     * #swagger.security = [{ "ProviderBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.responses[200] = { description: 'Provider Data Object' }
     * #swagger.responses[401] = { description: 'Provider Not Authorised' }
     */

    const response = await fetch(
      `${PROVIDER_URL}/provider/v1/provider${req.url}`,
      {
        method: req.method,
        headers: {
          ...req.headers,
          host: PROVIDER_LOCAL_HOST,
          "x-user-id": req.user.user_id,
          "Content-type": "application/json",
          "Cache-control": "no-cache",
        },
      }
    ).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  })
  .put(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Provider']
     * #swagger.method = 'PUT'
     * #swagger.path = '/provider'
     * #swagger.description = 'Update current provider data'
     * #swagger.security = [{ "ProviderBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $name: 'John', patronym: 'Johny', $surname: 'Doe', nickname: 'JD123', $email: 'john.doe@email.com', phonePrefix: '+44', phone: '1234567890', specializations: ['psychologist', 'coach'], street: 'Some Street', city: 'Another City', postcode: '1234', education: ['Education 1', 'Education 2'], sex: 'unspecified', consultationPrice: 60, description: 'Some Long Description Here...', workWithIds: ['22e3b2f6-5c95-4044-b444-592b5d41338a', 'ccd6a85d-ab7d-4700-953d-cda0775f37e5'], languageIds: ['69f03082-ee81-4a11-a7a2-84e82bd54369', '2dc1092c-a13d-4d55-9b1f-81d3b3e974c1'], videoLink: 'https://video.link' } }
     * #swagger.responses[200] = { description: 'Updated Provider Data Object' }
     * #swagger.responses[401] = { description: 'Provider Not Authorised' }
     * #swagger.responses[409] = { description: 'Email Already Used' }
     */
    const response = await fetch(
      `${PROVIDER_URL}/provider/v1/provider${req.url}`,
      {
        method: req.method,
        headers: {
          ...req.headers,
          host: PROVIDER_LOCAL_HOST,
          "x-user-id": req.user.user_id,
          "Content-type": "application/json",
        },
        ...(req.body && { body: JSON.stringify(req.body) }),
      }
    ).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  })
  .delete(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Provider']
     * #swagger.method = 'DELETE'
     * #swagger.path = '/provider'
     * #swagger.description = 'Delete current provider data'
     * #swagger.security = [{ "ProviderBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $password: 'SomePass123' } }
     * #swagger.responses[200] = { description: 'Deleted Provider Data Object' }
     * #swagger.responses[401] = { description: 'Provider Not Authorised' }
     * #swagger.responses[404] = { description: 'Incorrect Password' }
     * #swagger.responses[404] = { description: 'Provider Not Found' }
     */
    const response = await fetch(
      `${PROVIDER_URL}/provider/v1/provider${req.url}`,
      {
        method: req.method,
        headers: {
          ...req.headers,
          host: PROVIDER_LOCAL_HOST,
          "x-user-id": req.user.user_id,
          "Content-type": "application/json",
        },
        ...(req.body && { body: JSON.stringify(req.body) }),
      }
    ).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

router.route("/by-id").get(async (req, res) => {
  /**
   * #swagger.tags = ['Provider']
   * #swagger.method = 'GET'
   * #swagger.path = '/provider/by-id'
   * #swagger.description = 'Get provider data by id, excluding the street, city and postcode data'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['providerId'] = { in: 'query', required: true, type: 'string', description: 'The ID of the provider' }
   * #swagger.responses[200] = { description: 'Provider Data Object' }
   * #swagger.responses[404] = { description: 'Provider Not Found' }
   */

  const response = await fetch(
    `${PROVIDER_URL}/provider/v1/provider${req.url}`,
    {
      method: req.method,
      headers: {
        ...req.headers,
        host: PROVIDER_LOCAL_HOST,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
      },
    }
  ).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router
  .route("/by-id/admin")
  .get(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Provider']
     * #swagger.method = 'GET'
     * #swagger.path = '/provider/by-id/admin'
     * #swagger.description = 'Country admin to get provider data by id'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['x-admin-id'] = { in: 'header', required: true, type: 'string', description: 'ID of the Coutnry Admin making the request' }
     * #swagger.parameters['providerId'] = { in: 'query', required: true, type: 'string', description: 'ID of the Provider' }
     * #swagger.responses[200] = { description: 'Provider Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     * #swagger.responses[404] = { description: 'Provider Not Found' }
     */

    const response = await fetch(
      `${PROVIDER_URL}/provider/v1/provider/by-id?providerId=${req.query.providerId}`,
      {
        method: req.method,
        headers: {
          ...req.headers,
          host: PROVIDER_LOCAL_HOST,
          "x-admin-id": req.admin.admin_id,
          "Content-type": "application/json",
          "Cache-control": "no-cache",
        },
      }
    ).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  })
  .put(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Provider']
     * #swagger.method = 'PUT'
     * #swagger.path = '/provider'
     * #swagger.description = 'Country admin to update provider data by id'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $providerId: '2dc1092c-a13d-4d55-9b1f-81d3b3e974c1', $name: 'John', patronym: 'Johny', $surname: 'Doe', nickname: 'JD123', $email: 'john.doe@email.com', phonePrefix: '+44', phone: '1234567890', specializations: ['psychologist', 'coach'], street: 'Some Street', city: 'Another City', postcode: '1234', education: ['Education 1', 'Education 2'], sex: 'unspecified', consultationPrice: 60, description: 'Some Long Description Here...', workWithIds: ['22e3b2f6-5c95-4044-b444-592b5d41338a', 'ccd6a85d-ab7d-4700-953d-cda0775f37e5'], languageIds: ['69f03082-ee81-4a11-a7a2-84e82bd54369', '2dc1092c-a13d-4d55-9b1f-81d3b3e974c1'] } }
     * #swagger.responses[200] = { description: 'Updated Provider Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     * #swagger.responses[409] = { description: 'Email Already Used' }
     */
    const response = await fetch(
      `${PROVIDER_URL}/provider/v1/provider${req.url}`,
      {
        method: req.method,
        headers: {
          ...req.headers,
          host: PROVIDER_LOCAL_HOST,
          "Content-type": "application/json",
        },
        ...(req.body && { body: JSON.stringify(req.body) }),
      }
    ).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  })
  .delete(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Provider']
     * #swagger.method = 'DELETE'
     * #swagger.path = '/provider'
     * #swagger.description = 'Country admin to delete current provider data'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $providerId: '2dc1092c-a13d-4d55-9b1f-81d3b3e974c1' } }
     * #swagger.responses[200] = { description: 'Deleted Provider Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     * #swagger.responses[404] = { description: 'Provider Not Found' }
     * #swagger.responses[404] = { description: 'User Not Found' }
     */
    const response = await fetch(
      `${PROVIDER_URL}/provider/v1/provider${req.url}`,
      {
        method: req.method,
        headers: {
          ...req.headers,
          host: PROVIDER_LOCAL_HOST,
          "Content-type": "application/json",
        },
        ...(req.body && { body: JSON.stringify(req.body) }),
      }
    ).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

router.route("/all").get(async (req, res) => {
  /**
   * #swagger.tags = ['Provider']
   * #swagger.method = 'GET'
   * #swagger.path = '/provider/all'
   * #swagger.description = 'Get all providers for a given country'
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.responses[200] = { description: 'List With All the Providers Data Objects' }
   */

  const response = await fetch(
    `${PROVIDER_URL}/provider/v1/provider${req.url}`,
    {
      method: req.method,
      headers: {
        ...req.headers,
        host: PROVIDER_LOCAL_HOST,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
      },
    }
  ).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router
  .route("/image")
  .put(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Provider']
     * #swagger.method = 'PUT'
     * #swagger.path = '/provider/image'
     * #swagger.description = 'Update the provider image'
     * #swagger.security = [{ "ProviderBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.responses[200] = { description: 'Updated Provider Data Object' }
     * #swagger.responses[401] = { description: 'Provider Not Authorised' }
     * #swagger.responses[404] = { description: 'Provider Not Found' }
     */
    const response = await fetch(
      `${PROVIDER_URL}/provider/v1/provider${req.url}`,
      {
        method: req.method,
        headers: {
          ...req.headers,
          host: PROVIDER_LOCAL_HOST,
          "x-user-id": req.user.user_id,
          "Content-type": "application/json",
        },
        ...(req.body && { body: JSON.stringify(req.body) }),
      }
    ).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  })
  .delete(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Provider']
     * #swagger.method = 'DELETE'
     * #swagger.path = '/provider/image'
     * #swagger.description = 'Delete the provider image'
     * #swagger.security = [{ "ProviderBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.responses[200] = { description: 'Updated Provider Data Object' }
     * #swagger.responses[401] = { description: 'Provider Not Authorised' }
     * #swagger.responses[404] = { description: 'Provider Not Found' }
     */
    const response = await fetch(
      `${PROVIDER_URL}/provider/v1/provider${req.url}`,
      {
        method: req.method,
        headers: {
          ...req.headers,
          host: PROVIDER_LOCAL_HOST,
          "x-user-id": req.user.user_id,
          "Content-type": "application/json",
        },
        ...(req.body && { body: JSON.stringify(req.body) }),
      }
    ).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

router
  .route("/image/admin")
  .put(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Provider']
     * #swagger.method = 'PUT'
     * #swagger.path = '/provider/image/admin'
     * #swagger.description = 'Country admin to update the provider image'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $providerId: '2dc1092c-a13d-4d55-9b1f-81d3b3e974c1', image: 'SomeImageName' } }
     * #swagger.responses[200] = { description: 'Updated Provider Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     * #swagger.responses[404] = { description: 'Provider Not Found' }
     */
    const response = await fetch(
      `${PROVIDER_URL}/provider/v1/provider${req.url}`,
      {
        method: req.method,
        headers: {
          ...req.headers,
          host: PROVIDER_LOCAL_HOST,
          "Content-type": "application/json",
        },
        ...(req.body && { body: JSON.stringify(req.body) }),
      }
    ).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  })
  .delete(authenticateAdmin, authorizeAdmin("country"), async (req, res) => {
    /**
     * #swagger.tags = ['Provider']
     * #swagger.method = 'DELETE'
     * #swagger.path = '/provider/image/admin'
     * #swagger.description = 'Country admin to delete the provider image'
     * #swagger.security = [{ "CountryAdminBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $providerId: '2dc1092c-a13d-4d55-9b1f-81d3b3e974c1' } }
     * #swagger.responses[200] = { description: 'Updated Provider Data Object' }
     * #swagger.responses[401] = { description: 'Admin Not Authorised' }
     * #swagger.responses[401] = { description: 'No Permissions' }
     * #swagger.responses[404] = { description: 'Provider Not Found' }
     */
    const response = await fetch(
      `${PROVIDER_URL}/provider/v1/provider${req.url}`,
      {
        method: req.method,
        headers: {
          ...req.headers,
          host: PROVIDER_LOCAL_HOST,
          "Content-type": "application/json",
        },
        ...(req.body && { body: JSON.stringify(req.body) }),
      }
    ).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

router.route("/clients").get(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Provider']
   * #swagger.method = 'GET'
   * #swagger.path = '/provider/clients'
   * #swagger.description = 'Get all the clients of the current provider'
   * #swagger.security = [{ "ProviderBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.responses[200] = { description: 'Clients Data Object' }
   * #swagger.responses[401] = { description: 'Provider Not Authorised' }
   * #swagger.responses[404] = { description: 'Client Not Found' }
   */
  const response = await fetch(
    `${PROVIDER_URL}/provider/v1/provider${req.url}`,
    {
      method: req.method,
      headers: {
        ...req.headers,
        host: PROVIDER_LOCAL_HOST,
        "x-user-id": req.user.user_id,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
      },
    }
  ).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router
  .route("/availability/single-week")
  .get(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Provider']
     * #swagger.method = 'GET'
     * #swagger.path = '/provider/availability/single-week'
     * #swagger.description = 'Get current provider availability for a single week'
     * #swagger.security = [{ "ProviderBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['startDate'] = { in: 'query', required: true, type: 'string', description: 'The Start Date (Timestamp at 00:00) of the Week' }
     * #swagger.responses[200] = { description: 'Providers Availability Object' }
     * #swagger.responses[401] = { description: 'Provider Not Authorised' }
     */

    const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: PROVIDER_LOCAL_HOST,
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
     * #swagger.tags = ['Provider']
     * #swagger.method = 'PUT'
     * #swagger.path = '/provider/availability/single-week'
     * #swagger.description = 'Update the provider availability for a single week'
     * #swagger.security = [{ "ProviderBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $startDate: '1668384000', $slot: '1668416400' } }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[400] = { description: 'Slot is Not Within The Given Week' }
     * #swagger.responses[401] = { description: 'Provider Not Authorised' }
     */
    const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: PROVIDER_LOCAL_HOST,
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
     * #swagger.tags = ['Provider']
     * #swagger.method = 'DELETE'
     * #swagger.path = '/provider/availability/single-week'
     * #swagger.description = 'Delete the provider availability for a single week'
     * #swagger.security = [{ "ProviderBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $startDate: '1668384000', $slot: '1668416400' } }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[401] = { description: 'Provider Not Authorised' }
     */
    const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: PROVIDER_LOCAL_HOST,
        "x-user-id": req.user.user_id,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

router
  .route("/availability/clear-slot")
  .delete(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Provider']
     * #swagger.method = 'DELETE'
     * #swagger.path = '/provider/availability/clear-slot'
     * #swagger.description = 'Delete all availability for a particular slot'
     * #swagger.security = [{ "ProviderBearer": [] }]
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $startDate: '1668384000', $slot: '1668384000', $campaignIds: ['3489eecc-6d96-40bd-8b2d-1d8568cd8c7b'] } }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[401] = { description: 'Provider Not Authorised' }
     */
    const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: PROVIDER_LOCAL_HOST,
        "x-user-id": req.user.user_id,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

router.route("/availability/template").put(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Provider']
   * #swagger.method = 'PUT'
   * #swagger.path = '/provider/availability/template'
   * #swagger.description = 'Update the provider availability for a template'
   * #swagger.security = [{ "ProviderBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $template: [ { "startDate": "1668384000", "slots": ["1668729600", "1668754800", "1668765600", "1668873600"] } ] } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[400] = { description: 'Slot is Not Within The Given Week' }
   * #swagger.responses[401] = { description: 'Provider Not Authorised' }
   */
  const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: PROVIDER_LOCAL_HOST,
      "x-user-id": req.user.user_id,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router.route("/availability/single-day").get(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Provider']
   * #swagger.method = 'GET'
   * #swagger.path = '/provider/availability/single-day'
   * #swagger.description = 'Get provider availability for a single day, excluding any slots that are already booked'
   * #swagger.security = [{ "AnyUserBearer": [] }]
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['providerId'] = { in: 'query', required: false, type: 'string', description: 'The Provider ID, Only If Requested By Client ' }
   * #swagger.parameters['startDate'] = { in: 'query', required: true, type: 'string', description: 'The Start Date (Timestamp at 00:00) of the Week' }
   * #swagger.parameters['day'] = { in: 'query', required: true, type: 'string', description: 'The Day (Timestamp at 00:00)' }
   * #swagger.responses[200] = { description: 'Provider Availability Object' }
   * #swagger.responses[401] = { description: 'User Not Authorised' }
   */

  const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: PROVIDER_LOCAL_HOST,
      "x-user-id": req.user.user_id,
      "Content-type": "application/json",
      "Cache-control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router
  .route("/consultation/single-week")
  .get(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Provider']
     * #swagger.method = 'GET'
     * #swagger.path = '/provider/consultation/single-week'
     * #swagger.description = 'Get all the consultations of the current provider for a single week'
     * #swagger.security = [{ "ProviderBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['startDate'] = { in: 'query', required: true, type: 'string', description: 'The Start Date (Timestamp at 00:00) of the Week' }
     * #swagger.responses[200] = { description: 'Provider Consultations Object' }
     * #swagger.responses[401] = { description: 'Provider Not Authorised' }
     * #swagger.responses[404] = { description: 'Client Not Found' }
     */

    const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: PROVIDER_LOCAL_HOST,
        "x-user-id": req.user.user_id,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
      },
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

router.route("/consultation/count").get(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Provider']
   * #swagger.method = 'GET'
   * #swagger.path = '/provider/consultation/count'
   * #swagger.description = 'Get the count of all past and future consultations for the current provider'
   * #swagger.security = [{ "ProviderBearer": [] }]
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.responses[200] = { description: 'Provider Consultations Count' }
   * #swagger.responses[401] = { description: 'Provider Not Authorised' }
   */

  const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: PROVIDER_LOCAL_HOST,
      "x-user-id": req.user.user_id,
      "Content-type": "application/json",
      "Cache-control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router
  .route("/consultation/all/past/by-id")
  .get(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Provider']
     * #swagger.method = 'GET'
     * #swagger.path = '/provider/consultation/all/past/by-id'
     * #swagger.description = 'Get all the past consultations of the current provider for a specific client'
     * #swagger.security = [{ "ProviderBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['clientId'] = { in: 'query', required: true, type: 'string', description: 'The ID of the Client' }
     * #swagger.responses[200] = { description: 'Provider Consultations Object' }
     * #swagger.responses[401] = { description: 'Provider Not Authorised' }
     * #swagger.responses[404] = { description: 'Client Not Found' }
     */

    const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: PROVIDER_LOCAL_HOST,
        "x-user-id": req.user.user_id,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
      },
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

router.route("/consultation/all/past").get(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Provider']
   * #swagger.method = 'GET'
   * #swagger.path = '/provider/consultation/all/past'
   * #swagger.description = 'Get all the past consultations of the current provider for all clients'
   * #swagger.security = [{ "ProviderBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.responses[200] = { description: 'Provider Consultations Object' }
   * #swagger.responses[401] = { description: 'Provider Not Authorised' }
   * #swagger.responses[404] = { description: 'Client Not Found' }
   */

  const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: PROVIDER_LOCAL_HOST,
      "x-user-id": req.user.user_id,
      "Content-type": "application/json",
      "Cache-control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router
  .route("/consultation/all/upcoming")
  .get(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Provider']
     * #swagger.method = 'GET'
     * #swagger.path = '/provider/consultation/all/upcoming'
     * #swagger.description = 'Get all the upcoming consultations of the current provider for all clients'
     * #swagger.security = [{ "ProviderBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.responses[200] = { description: 'Provider Consultations Object' }
     * #swagger.responses[401] = { description: 'Provider Not Authorised' }
     * #swagger.responses[404] = { description: 'Client Not Found' }
     */

    const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: PROVIDER_LOCAL_HOST,
        "x-user-id": req.user.user_id,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
      },
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

router.route("/consultation/single-day").get(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Provider']
   * #swagger.method = 'GET'
   * #swagger.path = '/provider/consultation/single-day'
   * #swagger.description = 'Get current provider consultations for a single day'
   * #swagger.security = [{ "ProviderBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['date'] = { in: 'query', required: true, type: 'string', description: 'The Day For The Consultations (Timestamp)' }
   * #swagger.responses[200] = { description: 'Provider Consultations Object' }
   * #swagger.responses[401] = { description: 'Provider Not Authorised' }
   * #swagger.responses[404] = { description: 'Client Not Found' }
   */

  const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: PROVIDER_LOCAL_HOST,
      "x-user-id": req.user.user_id,
      "Content-type": "application/json",
      "Cache-control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router
  .route("/consultation/single-week")
  .get(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Provider']
     * #swagger.method = 'GET'
     * #swagger.path = '/provider/consultation/single-week'
     * #swagger.description = 'Get current provider consultations for a single week'
     * #swagger.security = [{ "ProviderBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['startDate'] = { in: 'query', required: true, type: 'string', description: 'The Start Date (Timestamp at 00:00) of the Week' }
     * #swagger.responses[200] = { description: 'Provider Consultations Object' }
     * #swagger.responses[401] = { description: 'Provider Not Authorised' }
     * #swagger.responses[404] = { description: 'Client Not Found' }
     */

    const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: PROVIDER_LOCAL_HOST,
        "x-user-id": req.user.user_id,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
      },
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

router.route("/consultation/block").post(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Provider']
   * #swagger.method = 'POST'
   * #swagger.path = '/provider/consultation/block'
   * #swagger.description = 'Block a consultation'
   * #swagger.security = [{ "AnyUserBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { clientId: '22e3b2f6-5c95-4044-b444-592b5d41338a', providerId: '3ac854bd-fa11-4d00-acea-ce9c78ca6007', $time: '1668787200' } }
   * #swagger.responses[200] = { description: 'Consultation ID Object' }
   * #swagger.responses[401] = { description: 'User Not Authorised' }
   * #swagger.responses[404] = { description: 'Consultation Not Found' }
   */
  const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: PROVIDER_LOCAL_HOST,
      "x-user-id": req.user.user_id,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router.route("/consultation/schedule").put(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Provider']
   * #swagger.method = 'PUT'
   * #swagger.path = '/provider/consultation/schedule'
   * #swagger.description = 'Schedule a consultation'
   * #swagger.security = [{ "ClientBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $consultationId: '22e3b2f6-5c95-4044-b444-592b5d41338a' } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[401] = { description: 'Client Not Authorised' }
   * #swagger.responses[404] = { description: 'Consultation Not Found' }
   */
  const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: PROVIDER_LOCAL_HOST,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router.route("/consultation/suggest").put(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Provider']
   * #swagger.method = 'PUT'
   * #swagger.path = '/provider/consultation/suggest'
   * #swagger.description = 'Suggest a consultation'
   * #swagger.security = [{ "ProviderBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $consultationId: '22e3b2f6-5c95-4044-b444-592b5d41338a' } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[401] = { description: 'Provider Not Authorised' }
   * #swagger.responses[404] = { description: 'Consultation Not Found' }
   */
  const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: PROVIDER_LOCAL_HOST,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router
  .route("/consultation/accept-suggest")
  .put(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Provider']
     * #swagger.method = 'PUT'
     * #swagger.path = '/provider/consultation/accept-suggest'
     * #swagger.description = 'Accept a suggested consultation'
     * #swagger.security = [{ "ClientBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $consultationId: '22e3b2f6-5c95-4044-b444-592b5d41338a' } }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[401] = { description: 'Client Not Authorised' }
     * #swagger.responses[404] = { description: 'Consultation Not Found' }
     */
    const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: PROVIDER_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

router
  .route("/consultation/reject-suggest")
  .put(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Provider']
     * #swagger.method = 'PUT'
     * #swagger.path = '/provider/consultation/rejected-suggest'
     * #swagger.description = 'Reject a suggested consultation'
     * #swagger.security = [{ "ClientBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $consultationId: '22e3b2f6-5c95-4044-b444-592b5d41338a' } }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[401] = { description: 'Client Not Authorised' }
     * #swagger.responses[404] = { description: 'Consultation Not Found' }
     */
    const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: PROVIDER_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

router
  .route("/consultation/reschedule")
  .post(authenticate, async (req, res) => {
    /**
     * #swagger.tags = ['Provider']
     * #swagger.method = 'POST'
     * #swagger.path = '/provider/consultation/reschedule'
     * #swagger.description = 'Reschedule a consultation'
     * #swagger.security = [{ "ClientBearer": [] }]
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $consultationId: '22e3b2f6-5c95-4044-b444-592b5d41338a', $newConsultationId: '9366a503-68f0-4a69-8f5e-bb401c05844f' } }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[401] = { description: 'Client Not Authorised' }
     * #swagger.responses[404] = { description: 'Consultation Not Found' }
     */
    const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: PROVIDER_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

router.route("/consultation/cancel").put(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Provider']
   * #swagger.method = 'PUT'
   * #swagger.path = '/provider/consultation/cancel'
   * #swagger.description = 'Cancel a consultation'
   * #swagger.security = [{ "AnyUserBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $consultationId: '22e3b2f6-5c95-4044-b444-592b5d41338a', $canceledBy: 'client' } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[401] = { description: 'User Not Authorised' }
   * #swagger.responses[404] = { description: 'Consultation Not Found' }
   */
  const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: PROVIDER_LOCAL_HOST,
      "x-user-id": req.user.user_id,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router.route("/consultation/join").put(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Provider']
   * #swagger.method = 'PUT'
   * #swagger.path = '/provider/consultation/join'
   * #swagger.description = 'Client/Provider join a consultation'
   * #swagger.security = [{ "AnyUserBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $consultationId: '22e3b2f6-5c95-4044-b444-592b5d41338a', $userType: 'client' } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[400] = { description: 'Consultation Not Scheduled' }
   * #swagger.responses[401] = { description: 'User Not Authorised' }
   * #swagger.responses[404] = { description: 'Consultation Not Found' }
   */
  const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: PROVIDER_LOCAL_HOST,
      "x-user-id": req.user.user_id,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router.route("/consultation/leave").put(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Provider']
   * #swagger.method = 'PUT'
   * #swagger.path = '/provider/consultation/leave'
   * #swagger.description = 'Client/Provider leave a consultation'
   * #swagger.security = [{ "AnyUserBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $consultationId: '22e3b2f6-5c95-4044-b444-592b5d41338a', $userType: 'client' } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[401] = { description: 'User Not Authorised' }
   * #swagger.responses[404] = { description: 'Consultation Not Found' }
   */
  const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: PROVIDER_LOCAL_HOST,
      "x-user-id": req.user.user_id,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router.route("/consultation/time").get(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['User']
   * #swagger.method = 'GET'
   * #swagger.path = '/user/consultation/time'
   * #swagger.description = 'Get consultation time by id'
   * #swagger.security = [{ "AnyUserBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['consultationId'] = { in: 'query', required: true, type: 'string', description: 'ID of the consultation' }
   * #swagger.responses[200] = { description: 'Consultation Data' }
   * #swagger.responses[401] = { description: 'User Not Authorised' }
   * #swagger.responses[404] = { description: 'Consultation Not Found' }
   */

  const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: PROVIDER_LOCAL_HOST,
      "x-user-id": req.user.user_id,
      "Content-type": "application/json",
      "Cache-control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router.route("/services").get(async (req, res) => {
  /**
   * #swagger.tags = ['Provider']
   * #swagger.method = 'GET'
   * #swagger.path = '/provicer/services'
   * #swagger.description = 'Get all services'
   * #swagger.security = [{ "ProviderBearer": [] }]
   * #swagger.responses[200] = { description: 'Array Of Service Data Objects' }
   * #swagger.responses[401] = { description: 'User Not Authorised' }
   */

  const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
    method: "GET",
    headers: {
      ...req.headers,
      host: PROVIDER_LOCAL_HOST,
      "Content-Type": "application/json",
      "Cache-control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();
  return res.status(response.status).send(result);
});

router.route("/services/add").post(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Provider']
   * #swagger.method = 'POST'
   * #swagger.path = '/provider/services/add'
   * #swagger.description = 'Provider to add services after a consultation took place'
   * #swagger.security = [{ "ProviderBearer": [] }]
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $consultationId: '22e3b2f6-5c95-4044-b444-592b5d41338a', $services: [ { serviceId: '22e3b2f6-5c95-4044-b444-592b5d41338a', duration: 15 } ] } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[400] = { description: 'Consultation Not Finished' }
   * #swagger.responses[401] = { description: 'Provider Not Authorised' }
   * #swagger.responses[404] = { description: 'Consultation Not Found' }
   * #swagger.responses[404] = { description: 'Service Not Found' }
   */
  const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: PROVIDER_LOCAL_HOST,
      "x-user-id": req.user.user_id,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router.route("/calendar/five-weeks").get(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Provider']
   * #swagger.method = 'GET'
   * #swagger.path = '/provider/calendar/five-weeks'
   * #swagger.description = 'Get current provider consultations and availability for five weeks'
   * #swagger.security = [{ "ProviderBearer": [] }]
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['startDate'] = { in: 'query', required: true, type: 'string', description: 'The Start Date (Timestamp at 00:00) of the First Week' }
   * #swagger.responses[200] = { description: 'Provider Availability & Consultations Object' }
   * #swagger.responses[401] = { description: 'Provider Not Authorised' }
   */

  const response = await fetch(`${PROVIDER_URL}/provider/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: PROVIDER_LOCAL_HOST,
      "x-user-id": req.user.user_id,
      "Content-type": "application/json",
      "Cache-control": "no-cache",
    },
  }).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router.route("/activities").get(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Provider']
   * #swagger.method = 'GET'
   * #swagger.path = '/provider/activities'
   * #swagger.description = 'Get the activities for the current provider'
   * #swagger.security = [{ "ProviderBearer": [] }]
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.responses[200] = { description: 'Provider Activities Data Object' }
   * #swagger.responses[401] = { description: 'Provider Not Authorised' }
   */

  const response = await fetch(
    `${PROVIDER_URL}/provider/v1/provider${req.url}`,
    {
      method: req.method,
      headers: {
        ...req.headers,
        host: PROVIDER_LOCAL_HOST,
        "x-user-id": req.user.user_id,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
      },
    }
  ).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router.route("/random-providers").get(async (req, res) => {
  /**
   * #swagger.tags = ['Provider']
   * #swagger.method = 'GET'
   * #swagger.path = '/provider/random-providers'
   * #swagger.description = 'Get a list of random providers'
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['numberOfProviders'] = { in: 'query', required: true, type: 'string', description: 'Number of providers' }
   * #swagger.responses[200] = { description: 'Array Of Provider Data Objects' }
   */

  const response = await fetch(
    `${PROVIDER_URL}/provider/v1/provider${req.url}`,
    {
      method: req.method,
      headers: {
        ...req.headers,
        host: PROVIDER_LOCAL_HOST,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
      },
    }
  ).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router.route("/campaigns").get(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Provider']
   * #swagger.method = 'GET'
   * #swagger.path = '/provider/campaigns'
   * #swagger.description = 'Get a list of all campaigns'
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['numberOfProviders'] = { in: 'query', required: true, type: 'string', description: 'Number of providers' }
   * #swagger.responses[200] = { description: 'Array Of Campaign Data Objects' }
   */

  const response = await fetch(
    `${PROVIDER_URL}/provider/v1/provider${req.url}`,
    {
      method: req.method,
      headers: {
        ...req.headers,
        host: PROVIDER_LOCAL_HOST,
        "x-user-id": req.user.user_id,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
      },
    }
  ).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router.route("/campaigns/enroll").post(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Provider']
   * #swagger.method = 'POST'
   * #swagger.path = '/provider/campaigns/enroll'
   * #swagger.description = 'Enroll a provider to a campaign'
   * #swagger.security = [{ "ProviderBearer": [] }]
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['campaignId'] = { in: 'body', required: true, type: 'string', description: 'Campaign ID' }
   * #swagger.responses[200] = { description: 'Campaign Enrolled' }
   * #swagger.responses[401] = { description: 'Provider Not Authorised' }
   */

  const response = await fetch(
    `${PROVIDER_URL}/provider/v1/provider${req.url}`,
    {
      method: req.method,
      headers: {
        ...req.headers,
        host: PROVIDER_LOCAL_HOST,
        "x-user-id": req.user.user_id,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }
  ).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

router.route("/campaigns/consultations").get(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Provider']
   * #swagger.method = 'GET'
   * #swagger.path = '/provider/campaigns-consultations'
   * #swagger.description = 'Get a list of all the provider consultations for a specific campaign '
   * #swagger.security = [{ "ProviderBearer": [] }]
   * #swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the country' }
   * #swagger.parameters['campaignId'] = { in: 'query', required: true, type: 'string', description: 'Campaign ID' }
   * #swagger.responses[200] = { description: 'Array Of Campaign Data Objects' }
   * #swagger.responses[401] = { description: 'Provider Not Authorised' }
   */

  const response = await fetch(
    `${PROVIDER_URL}/provider/v1/provider${req.url}`,
    {
      method: req.method,
      headers: {
        ...req.headers,
        host: PROVIDER_LOCAL_HOST,
        "x-user-id": req.user.user_id,
        "Content-type": "application/json",
        "Cache-control": "no-cache",
      },
    }
  ).catch(console.log);

  const result = await response.json();

  return res.status(response.status).send(result);
});

export { router };
