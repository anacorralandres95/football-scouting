"use strict";
import { object, string, date, number, assert } from "@hapi/joi";
import uuidV4 from "uuid/v4";
import { getConnection } from "../../../database/mysql-pool";
import { config, v2 } from "cloudinary";

const IMAGE_SIZE = 200;

config({
  cloud_name: process.env.CLOUDINARI_CLOUD_NAME,
  api_key: process.env.CLOUDINARI_API_KEY,
  api_secret: process.env.CLOUDINARI_API_SECRET,
});

async function validateSchema(payload) {
  const schema = object({
    avatar_url: string(),
    name: string().required(),
    surname1: string().required(),
    surname2: string(),
    gender: string().required(),
    comunity: string().required(),
    province: string().required(),
    date_birth: date(),
    team: string().required(),
    height: number(),
    weight: number(),
    demarcation: string().required(),
    best_leg: string().required(),
    user_id: string(),
  });

  assert(payload, schema);
}

async function uploadAvatar(imageBuffer, user_id) {
  return new Promise((resolve, reject) => {
    v2.uploader
      .upload_stream(
        {
          resource_type: "image",
          public_id: user_id,
          width: IMAGE_SIZE,
          height: IMAGE_SIZE,
          format: "jpg",
          crop: "limit",
        },
        async (err, result) => {
          if (err) {
            return reject(err);
          }
          return resolve(result.secure_url);
        }
      )
      .end(imageBuffer);
  });
}

async function createPlayer(req, res) {
  const { file } = req;
  const { user_id, user_type } = req.claims;

  if (user_type !== "Padre") {
    return res.status(403).send("No autorizado");
  }

  const playerData = {
    ...req.body,
    user_id,
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
    .then(async (imageUrl) => {
      try {
        const connection = await getConnection();
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
          avatar_url: imageUrl,
        });

        connection.release();

        res.header("Location", imageUrl);
        res.status(201).send("Player created");
      } catch (e) {
        return res.status(500).send(e.message);
      }
    })
    .catch(() => {
      return res.status(500).send();
    });
}

export default createPlayer;
