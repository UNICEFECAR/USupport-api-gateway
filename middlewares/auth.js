import fetch from "node-fetch";
import { notAuthorized } from "#utils/errors";

const USER_LOCAL_HOST = "http://localhost:3010";
const USER_URL = process.env.USER_URL;

export const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Get current user
  const result = await fetch(`${USER_URL}/user/v1/user`, {
    headers: {
      ...(authHeader && { Authorization: authHeader }),
      host: USER_LOCAL_HOST,
    },
  })
    .then((raw) => raw.json())
    .catch(console.log);

  if (!result.user_id || result.error) {
    next(notAuthorized());
    return;
  } else {
    const user = result;
    req.user = user;

    next();
  }
};

// TODO: create admin authorization middleware
