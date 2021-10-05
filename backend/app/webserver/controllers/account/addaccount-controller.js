"use strict";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const uuidV4 = require("uuid/v4");
const cryptoRandomString = require("crypto-random-string");
const Joi = require("@hapi/joi");
const sendgridMail = require("@sendgrid/mail");
const mysqlPool = require("../../../database/mysql-pool");

const httpServerDomain = process.env.HTTP_SERVER_DOMAIN;

sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);

async function validateSchema(payload) {
  const schema = Joi.object({
    user_name: Joi.string().required(),
    surname1: Joi.string().required(),
    surname2: Joi.string().required(),
    gender: Joi.string().required(),
    postal_code: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{6,30}$/)
      .required(),
    // repeat_password: Joi.ref("password"),
    user_type: Joi.string().required(),
    club: Joi.string()
  });

  Joi.assert(payload, schema);
}

async function sendEmailRegistration(email) {
  const msg = {
    to: email,
    from: {
      email: "jose@yopmail.com",
      name: "Champions."
    },
    subject: "Welcome to Champions",
    text: "Welcome to the fascinating world of football",
    html: `To start exploring please click <a href="http:/localhost:3000">here.</a>`
  };

  const data = await sendgridMail.send(msg);

  return data;
}

async function createAccount(req, res, next) {
  const accountData = { ...req.body };

  try {
    await validateSchema(accountData);
  } catch (e) {
    return res.status(400).send(e);
  }

  const now = new Date();
  const createdAt = now
    .toISOString()
    .substring(0, 19)
    .replace("T", " ");
  const user_id = uuidV4();

  const securePassword = await bcrypt.hash(accountData.password, 10);

  try {
    const connection = await mysqlPool.getConnection();
    const verificationCode = cryptoRandomString({ length: 64 });
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
      club: accountData.club
    });

    const sqlUser = `SELECT * FROM user WHERE email = '${accountData.email}'`;
    const [user] = await connection.query(sqlUser);

    connection.release();

    // const payloadJwt = {
    //   user_id: accountData.user_id,
    //   user_type: accountData.user_type
    // };

    const payloadJwt = {
      user_id: user[0].user_id,
      user_type: accountData.user_type
    };

    console.log("USER-ID" , user[0].user_id);
    console.log("USER-TYPE" , accountData.user_type);

    const jwtExpiresIn = parseInt(process.env.AUTH_ACCESS_TOKEN_TTL);
    const token = jwt.sign(payloadJwt, process.env.AUTH_JWT_SECRET, {
      expiresIn: jwtExpiresIn
    });

    const response = {
      token,
      user
    };

    await sendEmailRegistration(accountData.email);

    res.status(201).send(response);
    console.log(token, user);
  } catch (e) {
    console.error(e);
    return res.status(500).send(e.message);
  }
}

module.exports = createAccount;
