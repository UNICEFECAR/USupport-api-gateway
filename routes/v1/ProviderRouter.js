import express from "express";
import fetch from "node-fetch";

import { authenticate } from "#middlewares/auth";

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
   * #swagger.description = 'Get provider data by id'
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

router.route("/all").get(async (req, res) => {
  /**
   * #swagger.tags = ['Provider']
   * #swagger.method = 'GET'
   * #swagger.path = '/provider/all'
   * #swagger.description = 'Get all providers for a given country'
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

router.route("/clients").get(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Provider']
   * #swagger.method = 'GET'
   * #swagger.path = '/provider/clients'
   * #swagger.description = 'Get all the clients of the current provider'
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
   * #swagger.description = 'Get current provider availability for a single day, excluding any slots that are already booked'
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

router.route("/consultation/five-weeks").get(authenticate, async (req, res) => {
  /**
   * #swagger.tags = ['Provider']
   * #swagger.method = 'GET'
   * #swagger.path = '/provider/consultation/five-weeks'
   * #swagger.description = 'Get current provider consultations for five weeks'
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

export { router };
