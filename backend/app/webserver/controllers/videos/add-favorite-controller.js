"use strict";

const mysqlPool = require("../../../database/mysql-pool");
const Joi = require("@hapi/joi");
const uuidV4 = require("uuid/v4");
const httpServerDomain = process.env.HTTP_SERVER_DOMAIN;


async function createFavorite (req, res, next ) {
    const video_id = req.params.video_id;
    const { user_id } = req.claims;
    console.log(video_id);
    console.log(user_id);



        try {
          
      
      
            const connection = await mysqlPool.getConnection();
          const sqlInsercion = "INSERT INTO favourites SET ?";
      
          await connection.query(sqlInsercion, {
            user_id,
            video_id
          });
      
          connection.release();
    
      
          res.status(201).send("favorite created");
        } catch (e) {
          console.error(e);
          return res.status(500).send(e.message);
        }
      
}

module.exports = createFavorite;

