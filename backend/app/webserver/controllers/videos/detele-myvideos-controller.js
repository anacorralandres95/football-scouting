"use strict";
import { getConnection } from "../../../database/mysql-pool";

async function deleteMyVideo(req, res) {
  const { user_id } = req.claims;
  const video_id = req.params.video_id;

  try {
    const sqlQuery = `SELECT promise_id FROM promise
      WHERE user_id = '${user_id}' `;

    const connection = await getConnection();
    const [result] = await connection.execute(sqlQuery);

    connection.release();

    const promise_id = result[0].promise_id;
    const now = new Date();
    const deletedAt = now.toISOString().substring(0, 19).replace("T", " ");

    const deleteMyVideoQuery = `UPDATE videos
      SET deleted_at = '${deletedAt}'
      WHERE promise_id = '${promise_id}'
      AND video_id = '${video_id}'
      AND deleted_at IS NULL`;

    await getConnection();

    const [deletedStatus] = await connection.execute(deleteMyVideoQuery, [
      now,
      video_id,
      promise_id,
    ]);

    connection.release();

    if (deletedStatus.changedRows !== 1) {
      return res.status(404).send();
    }

    return res.status(204).send("Borrado");
  } catch (e) {
    res.status(500).send({
      message: e.message,
    });
  }
}

export default deleteMyVideo;
