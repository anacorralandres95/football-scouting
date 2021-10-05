"use strict";
import uuidV4 from "uuid/v4";
import { getConnection } from "../../../database/mysql-pool";
import { config, v2 } from "cloudinary";

const IMAGE_WIDTH = 300;
const IMAGE_HEIGHT = 200;
const IMAGE_QUALITY = 100;

config({
  cloud_name: process.env.CLOUDINARI_CLOUD_NAME,
  api_key: process.env.CLOUDINARI_API_KEY,
  api_secret: process.env.CLOUDINARI_API_SECRET,
});

async function uploadVideo(videoBuffer, user_id) {
  return new Promise((resolve, reject) => {
    v2.uploader
      .upload_stream(
        {
          resource_type: "video",
          public_id: user_id,
          width: IMAGE_WIDTH,
          height: IMAGE_HEIGHT,
          format: "webm",
          dpr: "3.0",
          quality: IMAGE_QUALITY,
          crop: "limit",
        },
        async (err, result) => {
          if (err) {
            return reject(err);
          }

          return resolve(result.secure_url);
        }
      )
      .end(videoBuffer);
  });
}

async function createVideo(req, res) {
  const { file } = req;
  const { user_id, user_type } = req.claims;

  if (user_type !== "Padre") {
    return res.status(403).send("No autorizado");
  }

  const promiseData = {
    ...req.body,
  };

  const video_id = uuidV4();
  const now = new Date();
  const createdAt = now.toISOString().substring(0, 19).replace("T", " ");

  let videoUploadedPromise = Promise.resolve(null);
  if (file && file.buffer) {
    videoUploadedPromise = uploadVideo(file.buffer, user_id);
  }
  videoUploadedPromise
    .then(async (videoUrl) => {
      try {
        const sqlQuery = `SELECT promise_id
          FROM promise
          WHERE user_id = '${user_id}'`;

        const connection = await getConnection();
        const [result] = await connection.query(sqlQuery);

        connection.release();

        if (result.length !== 1) {
          return res.status(401).send("Promise not detected");
        }

        const promise_id = result[0].promise_id;

        await getConnection();
        const sqlInsercion = "INSERT INTO videos SET ?";

        await connection.query(sqlInsercion, {
          title: promiseData.title,
          description: promiseData.description,
          created_at: createdAt,
          promise_id,
          video_id,
          video_url: videoUrl,
        });

        connection.release();

        res.header("Location", videoUrl);
        res.status(201).send("Video created");
      } catch (e) {
        return res.status(500).send(e.message);
      }
    })
    .catch(() => {
      return res.status(500).send();
    });
}

export default createVideo;
