"use strict";
import { getConnection } from "../../../database/mysql-pool";

async function getComments(req, res) {
  const video_id = req.params.video_id;

  try {
    const sqlQuery = `SELECT * FROM comments
      WHERE video_id = '${video_id}' 
      AND delete_at IS NULL
      ORDER BY created_at desc`;

    const connection = await getConnection();
    const [comments] = await connection.execute(sqlQuery);

    connection.release();

    return res.status(200).send({
      data: comments,
    });
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
}

export default getComments;
