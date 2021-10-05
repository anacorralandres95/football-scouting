"use strict";
const Joi = require("@hapi/joi");
const uuidV4 = require("uuid/v4");
const mysqlPool = require("../../../database/mysql-pool");
const cloudinary = require('cloudinary');
const httpServerDomain = process.env.HTTP_SERVER_DOMAIN;

cloudinary.config({
  cloud_name: process.env.CLOUDINARI_CLOUD_NAME,
  api_key: process.env.CLOUDINARI_API_KEY,
  api_secret: process.env.CLOUDINARI_API_SECRET,
});


async function validateSchema(payload) {
  const schema = Joi.object({
    avatar_url: Joi.string(),
    name: Joi.string().required(),
    surname1: Joi.string().required(),
    surname2: Joi.string(),
    gender: Joi.string().required(),
    comunity: Joi.string().required(),
    province: Joi.string().required(),
    date_birth: Joi.date(),
    team: Joi.string().required(),
    height: Joi.number(),
    weight: Joi.number(),
    demarcation: Joi.string().required(),
    best_leg: Joi.string().required(),
    user_id: Joi.string()
  });

  Joi.assert(payload, schema);
}

async function uploadAvatar(imageBuffer, user_id) {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader
    .upload_stream({
      resource_type: "image",
      public_id: user_id, // id en la url nombre pasraiamos video_id
      width: 200,
      height: 200,
      format: "jpg",
      crop: "limit"
    }, async (err, result) => {
      if (err) {
        return reject(err);
      }
      
      console.log("RESULT IMAGE", result);
      return resolve(result.secure_url);
    })
    .end(imageBuffer);
  });
}


async function createPlayer(req, res, next) {
  const { file } = req;
  console.log("promiseFile", file);
  console.log("ClaimsPromise", req.claims);
  console.log("BodyPromise", req.body);
  const { user_id, user_type } = req.claims;
  // console.log("USER_ID PROMISE" , user_id);
  // console.log("USER_TYPE PROMISE" , user_type);


  if (user_type !== "Padre") {
    return res.status(403).send("No autorizado");
  }

  // const { user_id, user_type } = JSON.parse(localStorage.getItem("currentUser"));

  console.log("USER_ID PROMISE" , req.claims);

  const playerData = {
    ...req.body,
    user_id
  };

  try {
    await validateSchema(playerData);
  } catch (e) {
    return res.status(400).send(e);
  }
  
  const promise_id = uuidV4();
  
  let imageUploadedPromise = Promise.resolve(null);
    if (file && file.buffer) {
  imageUploadedPromise = uploadAvatar(file.buffer, promise_id);
  }
  imageUploadedPromise
  .then(async imageUrl => {
    
  try {

    const connection = await mysqlPool.getConnection();
    const sqlInsercion = "INSERT INTO promise SET ?";

    await connection.query(sqlInsercion, {
      user_id: playerData.user_id,
      promise_id,
      name: playerData.name,
      surname1: playerData.surname1,
      surname2: playerData.surname2,
      gender: playerData.gender,
      comunity: playerData.comunity,
      province: playerData.province,
      date_birth: playerData.date_birth,
      team: playerData.team,
      height: playerData.height,
      weight: playerData.weight,
      demarcation: playerData.demarcation,
      best_leg: playerData.best_leg,
      avatar_url: imageUrl
    });

    // const sqlUser = `SELECT * FROM user WHERE email = '${accountData.email}'`;
    // const [user] = await connection.query(sqlUser);

    connection.release();
    res.header('Location', imageUrl);

    console.log("IMAGEURL", imageUrl);

    res.status(201).send("Player created");
  } catch (e) {
    console.error(e);
    return res.status(500).send(e.message);
  }
})
  .catch(err => {
    console.error("cloudinary error", err);
    return res.status(500).send();
  });
}

module.exports = createPlayer;



