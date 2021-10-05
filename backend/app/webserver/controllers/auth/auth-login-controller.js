"use strict";

import { compare } from "bcrypt";
import { object, string, assert } from "@hapi/joi";
import { sign } from "jsonwebtoken";
import { getConnection } from "../../../database/mysql-pool";

async function validateSchema(payload) {
  const schema = object({
    email: string().email().required(),
    password: string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .required(),
  });

  assert(payload, schema);
}

async function login(req, res) {
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
    const connection = await getConnection();
    const [result] = await connection.query(sqlQuery);

    connection.release();

    if (result.length !== 1) {
      return res.status(401).send("Account not registered");
    }

    const user = result[0];
    const isPassworkOk = await compare(authData.password, user.password);

    if (!isPassworkOk) {
      return res.status(401).send("Account not registered");
    }

    const payloadJwt = {
      user_id: user.user_id,
      user_type: user.user_type,
    };

    const jwtExpiresIn = parseInt(process.env.AUTH_ACCESS_TOKEN_TTL);
    const token = sign(payloadJwt, process.env.AUTH_JWT_SECRET, {
      expiresIn: jwtExpiresIn,
    });

    const response = {
      token,
      user,
    };

    return res.status(200).send(response);
  } catch (e) {
    return res.status(500).send({
      message: e.message,
    });
  }
}

export default login;
