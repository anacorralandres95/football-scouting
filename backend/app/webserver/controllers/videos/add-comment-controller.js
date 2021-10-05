"use strict";

const mysqlPool = require("../../../database/mysql-pool");
const Joi = require("@hapi/joi");
const uuidV4 = require("uuid/v4");
const httpServerDomain = process.env.HTTP_SERVER_DOMAIN;


async function createComment (req, res, next ) {
    const { user_id } = req.claims;
    const video_id = req.params.video_id;
    console.log(video_id);

    const commentData = { ...req.body };
    console.log("BODY", commentData);

    const comment_id = uuidV4();
    const now = new Date();
    const createdAt = now
        .toISOString()
        .substring(0, 19)
        .replace("T", " ");


        try {

    
            const connection = await mysqlPool.getConnection();
            const sqlQuery = `SELECT promise_id
              FROM videos
              WHERE video_id = '${video_id}'`;
            const [result] = await connection.query(sqlQuery);
            connection.release();
            console.log("RESULTADO DE SENTENCIA", result);
        
            if (result.length !== 1) {
              return res.status(401).send("Promise not detected");
            }
        
          const promise_id = result[0].promise_id;
          console.log("PROMISE_ID DE SENTENCIA", promise_id);
      
          console.log(promise_id);
          
      
      
          await mysqlPool.getConnection();
          const sqlInsercion = "INSERT INTO comments SET ?";
      
          await connection.query(sqlInsercion, {
            content: commentData.content,
            created_at: createdAt,
            promise_id,
            comment_id,
            video_id,
            user_id
          });
      
          connection.release();
    
      
          res.status(201).send("Comment created");
        } catch (e) {
          console.error(e);
          return res.status(500).send(e.message);
        }
      
}

module.exports = createComment;

