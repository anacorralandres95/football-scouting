"use strict";

const mysqlPool = require("../../../database/mysql-pool");
const Joi = require("@hapi/joi");
const httpServerDomain = process.env.HTTP_SERVER_DOMAIN;


  
  async function getRating(req, res, next) {
    const video_id = req.params.video_id;
    console.log("PARAM", video_id)
    // const payload = { video_id };
    // try {
    //   await validateSchema(payload);
    // } catch (e) {
    //   return res.status(400).send(e);
    // }
    try {

        const connection = await mysqlPool.getConnection();
    const sqlQuery = `SELECT promise_id
      FROM videos
      WHERE video_id = '${video_id}'`;
    const [result] = await connection.query(sqlQuery);
    connection.release();

    if (result.length !== 1) {
      return res.status(401).send("Promise not detected");
    }

  const promise_id = result[0].promise_id;
  console.log("PROMISE_ID DE SENTENCIA", promise_id);




    await mysqlPool.getConnection();
    // const sqlQuery = `SELECT
    // *
    // FROM videos
    // INNER JOIN promise
    // ON videos.promise_id = promise.promise_id
    // WHERE video_id = ?`;
    const sqlQuery2 = `SELECT AVG(rating) as rating
    FROM appreciations 
    WHERE promise_id = '${promise_id}' `;
    
    const [rating] = await connection.execute(sqlQuery2);
    connection.release();


    console.log("RATING", rating);
   
      return res.status(200).send({
          data: rating[0]
        });
    } catch (e) {
      res.status(400).send(e);
    }
  }
  
  module.exports = getRating;
