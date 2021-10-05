"use strict";
import { getConnection } from "../../../database/mysql-pool";

async function getRating(req, res) {
  const video_id = req.params.video_id;

  try {
    const sqlQuery = `SELECT promise_id
      FROM videos
      WHERE video_id = '${video_id}'`;

    const connection = await getConnection();
    const [result] = await connection.query(sqlQuery);

    connection.release();

    if (result.length !== 1) {
      return res.status(401).send("Promise not detected");
    }

    const promise_id = result[0].promise_id;

    await getConnection();

    const sqlQuery2 = `SELECT AVG(rating) as rating
      FROM appreciations 
      WHERE promise_id = '${promise_id}' `;
    const [rating] = await connection.execute(sqlQuery2);

    connection.release();

    return res.status(200).send({
      data: rating[0],
    });
  } catch (e) {
    res.status(400).send(e);
  }
}

export default getRating;
