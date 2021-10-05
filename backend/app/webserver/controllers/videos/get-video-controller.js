"use strict";

const mysqlPool = require("../../../database/mysql-pool");
const Joi = require("@hapi/joi");
const httpServerDomain = process.env.HTTP_SERVER_DOMAIN;


// async function validateShema(payload) {
//     const schema = Joi.object({
//       video_id: Joi.string().guid({
//         version: ['uuidv4'],
//       }).required()
//     });
  
//     Joi.assert(payload, schema);
//   }

// INNER JOIN user
// ON promise.user_id = user.user_id
  

async function getVideoFirst( video_id ) {
    const connection = await mysqlPool.getConnection();
    // const sqlQuery = `SELECT
    // *
    // FROM videos
    // INNER JOIN promise
    // ON videos.promise_id = promise.promise_id
    // WHERE video_id = ?`;
    const sqlQuery = `SELECT
    *
    FROM videos
    INNER JOIN promise
    ON videos.promise_id = promise.promise_id
    
    WHERE video_id = ?`;
    const [videoDataFirst] = await connection.execute(sqlQuery, [
      video_id
    ]);
    connection.release();
    if (videoDataFirst.length < 1) {
      return null;
    }
    console.log("QUERY", videoDataFirst);
    return videoDataFirst;
  }
  
  async function getVideo(req, res, next) {
    const video_id = req.params.video_id;
    console.log("PARAM", video_id)
    const payload = { video_id };
    // try {
    //   await validateSchema(payload);
    // } catch (e) {
    //   return res.status(400).send(e);
    // }
    try {
      const VideoData = await getVideoFirst(video_id);

      const videoResponse = {
          data: VideoData[0],
      };

      console.log("RESULTADO FINAL", videoResponse);
      return res.status(200).send(videoResponse);
    } catch (e) {
      res.status(400).send(e);
    }
  }
  
  module.exports = getVideo;
