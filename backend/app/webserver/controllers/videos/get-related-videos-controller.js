"use strict";
import { getConnection } from "../../../database/mysql-pool";

async function getRelated(req, res) {
  const video_id = req.params.video_id;

  try {
    const sqlQuery = `SELECT promise_id FROM videos
        WHERE video_id = '${video_id}' `;

    const connection = await getConnection();
    const [result] = await connection.execute(sqlQuery);

    connection.release();

    const promise_id = result[0].promise_id;

    await getConnection();

    const sqlQuery2 = `SELECT * FROM videos
        INNER JOIN promise
        On videos.promise_id = promise.promise_id
        WHERE videos.promise_id = '${promise_id}' 
        AND deleted_at IS NULL
        ORDER BY created_at desc`;

    const [related] = await connection.execute(sqlQuery2);

    connection.release();

    return res.status(200).send({
      data: related,
    });
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
}

export default getRelated;
