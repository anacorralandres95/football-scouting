"use strict";
import { getConnection } from "../../../database/mysql-pool";

async function getVideoFirst(video_id) {
  const sqlQuery = `SELECT
    *
    FROM videos
    INNER JOIN promise
    ON videos.promise_id = promise.promise_id
    WHERE video_id = ?`;

  const connection = await getConnection();
  const [videoDataFirst] = await connection.execute(sqlQuery, [video_id]);

  connection.release();

  if (videoDataFirst.length < 1) {
    return null;
  }

  return videoDataFirst;
}

async function getVideo(req, res) {
  const video_id = req.params.video_id;

  try {
    const VideoData = await getVideoFirst(video_id);
    const videoResponse = {
      data: VideoData[0],
    };

    return res.status(200).send(videoResponse);
  } catch (e) {
    res.status(400).send(e);
  }
}

export default getVideo;
