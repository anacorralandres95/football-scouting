"use strict";
import { getConnection } from "../../../database/mysql-pool";

async function getFavorites(req, res) {
  const { user_id } = req.claims;

  try {
    const sqlQuery2 = `SELECT * FROM videos 
        INNER JOIN favourites
        ON videos.video_id = favourites.video_id 
        INNER JOIN promise
        ON videos.promise_id = promise.promise_id
        WHERE favourites.user_id = '${user_id}' 
        AND delete_at IS NULL
        AND videos.deleted_at IS NULL`;

    const connection = await getConnection();
    const [favorites] = await connection.execute(sqlQuery2);

    connection.release();
    return res.status(200).send({
      data: favorites,
    });
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
}

export default getFavorites;
