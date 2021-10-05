"use strict";
import { getConnection } from "../../../database/mysql-pool";

async function createRating(req, res) {
  const { user_id } = req.claims;
  const video_id = req.params.video_id;
  const ratingData = { ...req.body };

  const now = new Date();
  const createdAt = now.toISOString().substring(0, 19).replace("T", " ");

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

    const sqlInsercion = "INSERT INTO appreciations SET ?";

    await connection.query(sqlInsercion, {
      rating: ratingData.rating,
      created_at: createdAt,
      promise_id,
      user_id,
    });

    connection.release();
    res.status(201).send("Rating created");
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

export default createRating;
