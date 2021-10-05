"use strict";
import { getConnection } from "../../../database/mysql-pool";

async function getVideos(_, res) {
  try {
    const sqlQuery = `SELECT * FROM videos
      JOIN promise 
      WHERE videos.promise_id = promise.promise_id
      AND deleted_at IS NULL
      ORDER BY created_at desc`;

    const connection = await getConnection();
    const [rows] = await connection.execute(sqlQuery);

    connection.release();

    return res.status(200).send({
      data: rows,
    });
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
}

export default getVideos;
