"use strict";
import { getConnection } from "../../../database/mysql-pool";

async function deleteFavorite(req, res) {
  const { user_id } = req.claims;
  const video_id = req.params.video_id;

  try {
    const now = new Date();
    const deletedAt = now.toISOString().substring(0, 19).replace("T", " ");

    const deleteFavoriteQuery = `UPDATE Favourites
      SET delete_at = '${deletedAt}'
      WHERE user_id = '${user_id}'
      AND video_id = '${video_id}'
      AND delete_at IS NULL`;

    const connection = await getConnection();
    const [deletedStatus] = await connection.execute(deleteFavoriteQuery, [
      now,
      video_id,
      user_id,
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

export default deleteFavorite;
