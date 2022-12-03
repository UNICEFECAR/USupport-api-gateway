import express from "express";
import fetch from "node-fetch";

const router = express.Router();

const EMAIL_LOCAL_HOST = "http://localhost:3008";

const EMAIL_URL = process.env.EMAIL_URL;

router.route("/admin").post(async (req, res) => {
  /**
   * #swagger.tags = ['Email']
   * #swagger.method = 'POST'
   * #swagger.path = '/email/admin/'
   * #swagger.description = 'Send email'
   * #swagger.parameters['obj'] = { in: 'body', schema: { $subject: 'Example Subject', $title: 'Example Title', $text: 'Some Long Text Here ...' } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[500] = { description: 'Internal Server Error' }
   */

  const response = await fetch(`${EMAIL_URL}/email/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: EMAIL_LOCAL_HOST,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response?.json();

  return res.status(response?.status).send(result);
});

router.route("/system/forgot-password").post(async (req, res) => {
  /**
   * #swagger.tags = ['Email']
   * #swagger.method = 'POST'
   * #swagger.path = '/email/system/forgot-password'
   * #swagger.description = 'Send email for forgot password'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $platform: 'client', $forgotPasswordToken: 'A4cgpEWipqpNRH99', "recipientEmail": "john.doe@email.com" } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[500] = { description: 'Internal Server Error' }
   */

  const response = await fetch(`${EMAIL_URL}/email/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: EMAIL_LOCAL_HOST,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response?.json();

  return res.status(response?.status).send(result);
});

router.route("/system/welcome").post(async (req, res) => {
  /**
   * #swagger.tags = ['Email']
   * #swagger.method = 'POST'
   * #swagger.path = '/email/system/welcome'
   * #swagger.description = 'Send welcome email'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $platform: 'client', "recipientEmail": "john.doe@email.com" } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[500] = { description: 'Internal Server Error' }
   */

  const response = await fetch(`${EMAIL_URL}/email/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: EMAIL_LOCAL_HOST,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response?.json();

  return res.status(response?.status).send(result);
});

router.route("/client/consultation/confirm/booking").post(async (req, res) => {
  /**
   * #swagger.tags = ['Email']
   * #swagger.method = 'POST'
   * #swagger.path = '/client/consultation/confirm/booking'
   * #swagger.description = 'Send email to client to confirm consultation booking'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $recipientEmail: 'john.doe@email.com' } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[500] = { description: 'Internal Server Error' }
   */

  const response = await fetch(`${EMAIL_URL}/email/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: EMAIL_LOCAL_HOST,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response?.json();

  return res.status(response?.status).send(result);
});

router
  .route("/client/consultation/confirm/reschedule")
  .post(async (req, res) => {
    /**
     * #swagger.tags = ['Email']
     * #swagger.method = 'POST'
     * #swagger.path = '/client/consultation/confirm/reschedule'
     * #swagger.description = 'Send email to client to confirm consultation reschedule'
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $recipientEmail: 'john.doe@email.com' } }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[500] = { description: 'Internal Server Error' }
     */

    const response = await fetch(`${EMAIL_URL}/email/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: EMAIL_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response?.json();

    return res.status(response?.status).send(result);
  });

router
  .route("/client/consultation/confirm/cancellation")
  .post(async (req, res) => {
    /**
     * #swagger.tags = ['Email']
     * #swagger.method = 'POST'
     * #swagger.path = '/client/consultation/confirm/cancellation'
     * #swagger.description = 'Send email to client to confirm consultation cancellation'
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $recipientEmail: 'john.doe@email.com' } }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[500] = { description: 'Internal Server Error' }
     */

    const response = await fetch(`${EMAIL_URL}/email/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: EMAIL_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response?.json();

    return res.status(response?.status).send(result);
  });

router
  .route("/client/consultation/notify/cancellation")
  .post(async (req, res) => {
    /**
     * #swagger.tags = ['Email']
     * #swagger.method = 'POST'
     * #swagger.path = '/client/consultation/notify/cancellation'
     * #swagger.description = 'Send email to client to notify about consultation cancellation'
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $recipientEmail: 'john.doe@email.com' } }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[500] = { description: 'Internal Server Error' }
     */

    const response = await fetch(`${EMAIL_URL}/email/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: EMAIL_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response?.json();

    return res.status(response?.status).send(result);
  });

router.route("/client/consultation/remind/start").post(async (req, res) => {
  /**
   * #swagger.tags = ['Email']
   * #swagger.method = 'POST'
   * #swagger.path = '/client/consultation/remind/start'
   * #swagger.description = 'Send email to client to remind about consultation start'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $recipientEmail: 'john.doe@email.com' } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[500] = { description: 'Internal Server Error' }
   */

  const response = await fetch(`${EMAIL_URL}/email/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: EMAIL_LOCAL_HOST,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response?.json();

  return res.status(response?.status).send(result);
});

router
  .route("/client/consultation/notify/suggestion")
  .post(async (req, res) => {
    /**
     * #swagger.tags = ['Email']
     * #swagger.method = 'POST'
     * #swagger.path = '/client/consultation/notify/suggestion'
     * #swagger.description = 'Send email to client to notify about consultation suggestion'
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $recipientEmail: 'john.doe@email.com' } }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[500] = { description: 'Internal Server Error' }
     */

    const response = await fetch(`${EMAIL_URL}/email/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: EMAIL_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response?.json();

    return res.status(response?.status).send(result);
  });

router
  .route("/client/consultation/confirm/suggestion-booking")
  .post(async (req, res) => {
    /**
     * #swagger.tags = ['Email']
     * #swagger.method = 'POST'
     * #swagger.path = '/client/consultation/confirm/suggestion-booking'
     * #swagger.description = 'Send email to client to confirm consultation suggestion booking'
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $recipientEmail: 'john.doe@email.com' } }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[500] = { description: 'Internal Server Error' }
     */

    const response = await fetch(`${EMAIL_URL}/email/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: EMAIL_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response?.json();

    return res.status(response?.status).send(result);
  });

router
  .route("/client/consultation/confirm/suggestion-cancellation")
  .post(async (req, res) => {
    /**
     * #swagger.tags = ['Email']
     * #swagger.method = 'POST'
     * #swagger.path = '/client/consultation/confirm/suggestion-cancellation'
     * #swagger.description = 'Send email to client to confirm consultation suggestion cancellation'
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $recipientEmail: 'john.doe@email.com' } }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[500] = { description: 'Internal Server Error' }
     */

    const response = await fetch(`${EMAIL_URL}/email/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: EMAIL_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response?.json();

    return res.status(response?.status).send(result);
  });

router.route("/provider/consultation/notify/booking").post(async (req, res) => {
  /**
   * #swagger.tags = ['Email']
   * #swagger.method = 'POST'
   * #swagger.path = '/provider/consultation/notify/booking'
   * #swagger.description = 'Send email to provider to notify about consultation booking'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $recipientEmail: 'john.doe@email.com' } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[500] = { description: 'Internal Server Error' }
   */

  const response = await fetch(`${EMAIL_URL}/email/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: EMAIL_LOCAL_HOST,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response?.json();

  return res.status(response?.status).send(result);
});

router
  .route("/provider/consultation/notify/reschedule")
  .post(async (req, res) => {
    /**
     * #swagger.tags = ['Email']
     * #swagger.method = 'POST'
     * #swagger.path = '/provider/consultation/notify/reschedule'
     * #swagger.description = 'Send email to provider to notify about consultation reschedule'
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $recipientEmail: 'john.doe@email.com' } }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[500] = { description: 'Internal Server Error' }
     */

    const response = await fetch(`${EMAIL_URL}/email/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: EMAIL_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response?.json();

    return res.status(response?.status).send(result);
  });

router
  .route("/provider/consultation/notify/cancellation")
  .post(async (req, res) => {
    /**
     * #swagger.tags = ['Email']
     * #swagger.method = 'POST'
     * #swagger.path = '/provider/consultation/notify/cancellation'
     * #swagger.description = 'Send email to provider to notify about consultation cancellation'
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $recipientEmail: 'john.doe@email.com' } }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[500] = { description: 'Internal Server Error' }
     */

    const response = await fetch(`${EMAIL_URL}/email/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: EMAIL_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response?.json();

    return res.status(response?.status).send(result);
  });

router
  .route("/provider/consultation/confirm/cancellation")
  .post(async (req, res) => {
    /**
     * #swagger.tags = ['Email']
     * #swagger.method = 'POST'
     * #swagger.path = '/provider/consultation/confirm/cancellation'
     * #swagger.description = 'Send email to provider to confirm consultation cancellation'
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $recipientEmail: 'john.doe@email.com' } }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[500] = { description: 'Internal Server Error' }
     */

    const response = await fetch(`${EMAIL_URL}/email/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: EMAIL_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response?.json();

    return res.status(response?.status).send(result);
  });

router.route("/provider/consultation/remind/start").post(async (req, res) => {
  /**
   * #swagger.tags = ['Email']
   * #swagger.method = 'POST'
   * #swagger.path = '/provider/consultation/remind/start'
   * #swagger.description = 'Send email to provider to remind about consultation start'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $recipientEmail: 'john.doe@email.com' } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[500] = { description: 'Internal Server Error' }
   */

  const response = await fetch(`${EMAIL_URL}/email/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: EMAIL_LOCAL_HOST,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response?.json();

  return res.status(response?.status).send(result);
});

router
  .route("/provider/consultation/confirm/suggestion")
  .post(async (req, res) => {
    /**
     * #swagger.tags = ['Email']
     * #swagger.method = 'POST'
     * #swagger.path = '/provider/consultation/confirm/suggestion'
     * #swagger.description = 'Send email to provider to confirm consultation suggestion'
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $recipientEmail: 'john.doe@email.com' } }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[500] = { description: 'Internal Server Error' }
     */

    const response = await fetch(`${EMAIL_URL}/email/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: EMAIL_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response?.json();

    return res.status(response?.status).send(result);
  });

router
  .route("/provider/consultation/notify/suggestion-booking")
  .post(async (req, res) => {
    /**
     * #swagger.tags = ['Email']
     * #swagger.method = 'POST'
     * #swagger.path = '/provider/consultation/notify/suggestion-booking'
     * #swagger.description = 'Send email to provider to notify about consultation suggestion booking'
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $recipientEmail: 'john.doe@email.com' } }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[500] = { description: 'Internal Server Error' }
     */

    const response = await fetch(`${EMAIL_URL}/email/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: EMAIL_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response?.json();

    return res.status(response?.status).send(result);
  });

router
  .route("/provider/consultation/notify/suggestion-cancellation")
  .post(async (req, res) => {
    /**
     * #swagger.tags = ['Email']
     * #swagger.method = 'POST'
     * #swagger.path = '/provider/consultation/notify/suggestion-cancellation'
     * #swagger.description = 'Send email to provider to notify about consultation suggestion cancellation'
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $recipientEmail: 'john.doe@email.com' } }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[500] = { description: 'Internal Server Error' }
     */

    const response = await fetch(`${EMAIL_URL}/email/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: EMAIL_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response?.json();

    return res.status(response?.status).send(result);
  });

router
  .route("/provider/availability/remind/add-more-slots")
  .post(async (req, res) => {
    /**
     * #swagger.tags = ['Email']
     * #swagger.method = 'POST'
     * #swagger.path = '/provider/availability/remind/add-more-slots'
     * #swagger.description = 'Send email to provider to remind add more availability slots'
     * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
     * #swagger.parameters['obj'] = { in: 'body', schema: { $recipientEmail: 'john.doe@email.com' } }
     * #swagger.responses[200] = { description: 'Success Status' }
     * #swagger.responses[500] = { description: 'Internal Server Error' }
     */

    const response = await fetch(`${EMAIL_URL}/email/v1${req.url}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: EMAIL_LOCAL_HOST,
        "Content-type": "application/json",
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response?.json();

    return res.status(response?.status).send(result);
  });

router.route("/provider/report/weekly").post(async (req, res) => {
  /**
   * #swagger.tags = ['Email']
   * #swagger.method = 'POST'
   * #swagger.path = '/provider/report/weekly'
   * #swagger.description = 'Send email to provider containing weekly report'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $recipientEmail: 'john.doe@email.com' } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[500] = { description: 'Internal Server Error' }
   */

  const response = await fetch(`${EMAIL_URL}/email/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: EMAIL_LOCAL_HOST,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response?.json();

  return res.status(response?.status).send(result);
});

router.route("/provider/report/monthly").post(async (req, res) => {
  /**
   * #swagger.tags = ['Email']
   * #swagger.method = 'POST'
   * #swagger.path = '/provider/report/monthly'
   * #swagger.description = 'Send email to provider containing monthly report'
   * #swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string', description: 'Alpha 2 code of the language' }
   * #swagger.parameters['obj'] = { in: 'body', schema: { $recipientEmail: 'john.doe@email.com' } }
   * #swagger.responses[200] = { description: 'Success Status' }
   * #swagger.responses[500] = { description: 'Internal Server Error' }
   */

  const response = await fetch(`${EMAIL_URL}/email/v1${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      host: EMAIL_LOCAL_HOST,
      "Content-type": "application/json",
    },
    ...(req.body && { body: JSON.stringify(req.body) }),
  }).catch(console.log);

  const result = await response?.json();

  return res.status(response?.status).send(result);
});

export { router };
