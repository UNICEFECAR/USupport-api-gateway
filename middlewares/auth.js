import fetch from "node-fetch";
import { notAuthorized, noPermissions } from "#utils/errors";

const USER_LOCAL_HOST = "http://localhost:3010";
const ADMIN_LOCAL_HOST = "http://localhost:3007";

const ADMIN_URL = process.env.ADMIN_URL;
const USER_URL = process.env.USER_URL;

export const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const language = req.header("x-language-alpha-2");

  // Get current user
  const result = await fetch(`${USER_URL}/user/v1/user`, {
    headers: {
      "x-country-alpha-2": req.header("x-country-alpha-2"),
      "x-language-alpha-2": language,
      ...(authHeader && { Authorization: authHeader }),
      host: USER_LOCAL_HOST,
    },
  })
    .then((raw) => raw.json())
    .catch(console.log);

  if (!result.user_id || result.error) {
    next(notAuthorized(language));
    return;
  } else {
    const user = result;
    req.user = user;

    next();
  }
};

export const authenticateAdmin = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const language = req.header("x-language-alpha-2");

  // Get current admin
  const result = await fetch(`${ADMIN_URL}/admin/v1/admin`, {
    headers: {
      "x-country-alpha-2": req.header("x-country-alpha-2"),
      "x-language-alpha-2": language,
      ...(authHeader && { Authorization: authHeader }),
      host: ADMIN_LOCAL_HOST,
    },
  })
    .then((raw) => raw.json())
    .catch(console.log);

  if (!result || !result.admin_id || result.error) {
    next(notAuthorized(language));
    return;
  } else {
    const admin = result;
    req.admin = admin;

    next();
  }
};

export const authorizeAdmin = (role) => {
  return async (req, res, next) => {
    const admin = req.admin;
    const language = req.header("x-language-alpha-2");

    if (admin.role !== role) {
      next(noPermissions(language));
    } else {
      next();
    }
  };
};
