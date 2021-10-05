"use strict";

const bcrypt = require("bcrypt");
const Joi = require("@hapi/joi");
const jwt = require("jsonwebtoken");
const mysqlPool = require("../../../database/mysql-pool");

async function validateSchema(payload) {
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .required()
  });

  Joi.assert(payload, schema);
}

async function login(req, res, next) {
  const authData = { ...req.body };

  try {
    await validateSchema(authData);
  } catch (e) {
    return res.status(400).send(e);
  }

  try {
    const sqlQuery = `SELECT *
      FROM user
      WHERE email = '${authData.email}'`;
    const connection = await mysqlPool.getConnection();
    const [result] = await connection.query(sqlQuery);
    connection.release();

    if (result.length !== 1) {
      return res.status(401).send("Account not registered");
    }

    const user = result[0];
    const isPassworkOk = await bcrypt.compare(
      authData.password,
      user.password
    );
    if (!isPassworkOk) {
      return res.status(401).send("Account not registered");
    }

    const payloadJwt = {
      user_id: user.user_id,
      user_type: user.user_type
    };

    const jwtExpiresIn = parseInt(process.env.AUTH_ACCESS_TOKEN_TTL);
    const token = jwt.sign(payloadJwt, process.env.AUTH_JWT_SECRET, {
      expiresIn: jwtExpiresIn
    });

    const response = {
      token,
      user
    };

    return res.status(200).send(response);
  } catch (e) {
    console.error(e);
    return res.status(500).send({
      message: e.message
    });
  }
}

module.exports = login;
