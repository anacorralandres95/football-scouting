"use strict";
const mysqlPool = require("../../../database/mysql-pool");

async function createFavorite(req, res) {
  const video_id = req.params.video_id;
  const { user_id } = req.claims;

  try {
    const sqlInsercion = "INSERT INTO favourites SET ?";

    const connection = await mysqlPool.getConnection();
    await connection.query(sqlInsercion, {
      user_id,
      video_id,
    });

    connection.release();
    res.status(201).send("Favorite created");
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

module.exports = createFavorite;
