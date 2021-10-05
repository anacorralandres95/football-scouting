"use strict";

const jwt = require("jsonwebtoken");

async function checkAccountSession(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).send();
  }

  // Bearer XXXXX
  const [prefix, token] = authorization.split(" ");
  // if (!authorization.startsWith('Bearer ')) {
  if (prefix !== "Bearer") {
    return res.status(401).send("1");
  }

  if (!token) {
    return res.status(401).send("2");
  }

  try {
    const { user_id, user_type } = jwt.verify(
      token,
      process.env.AUTH_JWT_SECRET
    );

    req.claims = {
      user_id,
      user_type
    };

    console.log("HOLA" , req.claims);

    return next();
  } catch (e) {
    console.error(e);
    return res.status(401).send("3");
  }
}

module.exports = checkAccountSession;
