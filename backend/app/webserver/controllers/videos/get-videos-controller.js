"use strict";

const mysqlPool = require("../../../database/mysql-pool");
const httpServerDomain = process.env.HTTP_SERVER_DOMAIN;

async function getVideos(req, res, next) {

try {
// const sqlQuery = `SELECT * FROM videos ORDER BY created_at asc`;

const sqlQuery = `SELECT * FROM videos
JOIN promise 
WHERE videos.promise_id = promise.promise_id
AND deleted_at IS NULL
ORDER BY created_at desc`;


const connection = await mysqlPool.getConnection();
const [rows] = await connection.execute(sqlQuery);
connection.release();

console.log("rows", rows);

return res.status(200).send({
  data: rows
});
} catch (e) {
return res.status(500).send({ message: e.message });
}
}

module.exports = getVideos;