import express from "express";

const router = express.Router();

const EMAIL_LOCAL_HOST = "http://localhost:3008";

const EMAIL_URL = process.env.EMAIL_URL

router.route("/")
  .post(async (req, res, next) => { // TODO: Add authentication middleware
    /**
     * #route   POST /api/v1/email/
     * #desc    Send email 
     */

    const response = await fetch(EMAIL_URL + req.url, {
      method: req.method,
      headers: { ...req.headers, host: EMAIL_LOCAL_HOST },
      ...(req.body && { body: JSON.stringify(req.body) }),
    }).catch(console.log);

    const result = await response.json();

    return res.status(response.status).send(result);
  });

export { router };
