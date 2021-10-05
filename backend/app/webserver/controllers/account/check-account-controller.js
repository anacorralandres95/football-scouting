"use strict";
import { verify } from "jsonwebtoken";

async function checkAccountSession(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send();
  }

  const [prefix, token] = authorization.split(" ");

  if (prefix !== "Bearer") {
    return res.status(401).send("1");
  }

  if (!token) {
    return res.status(401).send("2");
  }

  try {
    const { user_id, user_type } = verify(token, process.env.AUTH_JWT_SECRET);

    req.claims = {
      user_id,
      user_type,
    };

    return next();
  } catch (e) {
    return res.status(401).send("3");
  }
}

export default checkAccountSession;
