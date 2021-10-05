"use strict";
import { getConnection } from "../../../database/mysql-pool";

async function getMyVideos(req, res) {
  const { user_id } = req.claims;

  try {
    const sqlQuery = `SELECT * FROM videos
      INNER JOIN promise
      ON videos.promise_id = promise.promise_id
      WHERE promise.user_id = '${user_id}' 
      AND deleted_at IS NULL
      ORDER BY created_at desc`;

    const connection = await getConnection();
    const [my] = await connection.execute(sqlQuery);

    connection.release();
    return res.status(200).send({
      data: my,
    });
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
}

export default getMyVideos;
