"use strict";
import { getConnection } from "../../../database/mysql-pool";

async function deleteComment(req, res) {
  const video_id = req.params.video_id;
  const comment_id = req.params.comment_id;

  try {
    const now = new Date();
    const deletedAt = now.toISOString().substring(0, 19).replace("T", " ");

    const deleteCommentQuery = `UPDATE comments
      SET delete_at = '${deletedAt}'
      WHERE comment_id = '${comment_id}'
      AND video_id = '${video_id}'
      AND delete_at IS NULL`;

    const connection = await getConnection();
    const [deletedStatus] = await connection.execute(deleteCommentQuery, [
      now,
      video_id,
      comment_id,
    ]);

    connection.release();

    if (deletedStatus.changedRows !== 1) {
      return res.status(404).send();
    }

    return res.status(204).send("Removed");
  } catch (e) {
    res.status(500).send({
      message: e.message,
    });
  }
}

export default deleteComment;
