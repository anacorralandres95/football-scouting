"use strict";
import { sign } from "jsonwebtoken";
import { hash } from "bcrypt";
import uuidV4 from "uuid/v4";
import cryptoRandomString from "crypto-random-string";
import Joi from "@hapi/joi";
import { setApiKey, send } from "@sendgrid/mail";
import mysqlPool from "../../../database/mysql-pool";
import PASSWORD_REGEX from "../../constants";

const HASH = 10;
const CRYPTO_LENGTH = 64;

setApiKey(process.env.SENDGRID_API_KEY);

async function validateSchema(payload) {
  const { object, string, assert } = Joi;

  const schema = object({
    user_name: string().required(),
    surname1: string().required(),
    surname2: string().required(),
    gender: string().required(),
    postal_code: string().required(),
    phone: string().required(),
    email: string().email().required(),
    password: string().regex(PASSWORD_REGEX).required(),
    user_type: string().required(),
    club: string(),
  });

  assert(payload, schema);
}

async function sendEmailRegistration(email) {
  const msg = {
    to: email,
    from: {
      email: "ana@yopmail.com",
      name: "Champions.",
    },
    subject: "Welcome to Champions",
    text: "Welcome to the fascinating world of football",
    html: `To start exploring please click <a href="http:/localhost:3000">here.</a>`,
  };

  const data = await send(msg);

  return data;
}

async function createAccount(req, res) {
  const accountData = { ...req.body };

  try {
    await validateSchema(accountData);
  } catch (e) {
    return res.status(400).send(e);
  }

  const now = new Date();
  const createdAt = now.toISOString().substring(0, 19).replace("T", " ");
  const user_id = uuidV4();

  const securePassword = await hash(accountData.password, HASH);

  try {
    const connection = await mysqlPool.getConnection();
    const verificationCode = cryptoRandomString({ length: CRYPTO_LENGTH });
    const sqlInsercion = "INSERT INTO user SET ?";

    await connection.query(sqlInsercion, {
      user_id: user_id,
      user_name: accountData.user_name,
      surname1: accountData.surname1,
      surname2: accountData.surname2,
      gender: accountData.gender,
      postal_code: accountData.postal_code,
      phone: accountData.phone,
      email: accountData.email,
      password: securePassword,
      verification_code: verificationCode,
      created_at: createdAt,
      user_type: accountData.user_type,
      club: accountData.club,
    });

    const sqlUser = `SELECT * FROM user WHERE email = '${accountData.email}'`;
    const [user] = await connection.query(sqlUser);

    connection.release();

    const payloadJwt = {
      user_id: user[0].user_id,
      user_type: accountData.user_type,
    };

    const jwtExpiresIn = parseInt(process.env.AUTH_ACCESS_TOKEN_TTL);
    const token = sign(payloadJwt, process.env.AUTH_JWT_SECRET, {
      expiresIn: jwtExpiresIn,
    });

    const response = {
      token,
      user,
    };

    await sendEmailRegistration(accountData.email);

    res.status(201).send(response);
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

export default createAccount;
