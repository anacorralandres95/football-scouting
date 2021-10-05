"use strict";
import { getConnection } from "../../../database/mysql-pool";
import uuidV4 from "uuid/v4";

async function createComment(req, res) {
  const { user_id } = req.claims;
  const video_id = req.params.video_id;

  const commentData = { ...req.body };
  const comment_id = uuidV4();

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

    const sqlInsercion = "INSERT INTO comments SET ?";

    await connection.query(sqlInsercion, {
      content: commentData.content,
      created_at: createdAt,
      promise_id,
      comment_id,
      video_id,
      user_id,
    });

    connection.release();

    res.status(201).send("Comment created");
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

export default createComment;
