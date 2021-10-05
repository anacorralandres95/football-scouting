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
    video_url: Joi.string(),
    title: Joi.string(),
    description: Joi.string(), 
    promise_id,
    user_id
  });

  Joi.assert(payload, schema);
}


async function uploadVideo(videoBuffer, user_id) {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader
    .upload_stream({
      resource_type: "video",
      public_id: user_id, // id en la url nombre pasraiamos video_id
      width: 300,
      height: 200,
      format: "webm",
      dpr: "3.0",
      quality: 100,
      crop: "limit"
    }, async (err, result) => {
      if (err) {
        return reject(err);
      }
      
      console.log("RESULT video", result);
      return resolve(result.secure_url);
    })
    .end(videoBuffer);
  });
}


async function createVideo(req, res, next) {
  const { file } = req;
  const { user_id, user_type } = req.claims;

  console.log("promiseVideo", file);
  console.log("ClaimsPromiseVideo", req.claims);
  console.log("BodyPromiseVideo", req.body);

  if (user_type !== "Padre") {
    return res.status(403).send("No autorizado");
  }

  // const promiseData = {
  //   ...req.body,
  //   user_id
  // };

  const promiseData = {
    ...req.body
  };

  // try {
  //   await validateSchema(promiseData);
  // } catch (e) {
  //   return res.status(433).send(e);
  // }
  
  const video_id = uuidV4();
  const now = new Date();
  const createdAt = now
    .toISOString()
    .substring(0, 19)
    .replace("T", " ");


  let videoUploadedPromise = Promise.resolve(null);
    if (file && file.buffer) {
      videoUploadedPromise = uploadVideo(file.buffer, user_id);
      console.log("BUFFER", file.buffer);
  }
  videoUploadedPromise
  .then(async videoUrl => {



  try {

    
      const connection = await mysqlPool.getConnection();
      const sqlQuery = `SELECT promise_id
        FROM promise
        WHERE user_id = '${user_id}'`;
      const [result] = await connection.query(sqlQuery);
      connection.release();
      console.log("RESULTADO DE SENTENCIA", result);
  
      if (result.length !== 1) {
        return res.status(401).send("Promise not detected");
      }
  
    const promise_id = result[0].promise_id;
    console.log("PROMISE_ID DE SENTENCIA", promise_id);

    console.log(promise_id);
    


    await mysqlPool.getConnection();
    const sqlInsercion = "INSERT INTO videos SET ?";

    await connection.query(sqlInsercion, {
      title: promiseData.title,
      description: promiseData.description,
      created_at: createdAt,
      promise_id,
      video_id,
      video_url: videoUrl
    });

    connection.release();

    res.header('Location', videoUrl);

    console.log("videoURL", videoUrl);

    res.status(201).send("Video created");
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



module.exports = createVideo;