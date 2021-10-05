"use strict";

const mysqlPool = require("../../../database/mysql-pool");
const httpServerDomain = process.env.HTTP_SERVER_DOMAIN;


async function getComments(req, res, next) {
    const video_id = req.params.video_id;

    // const payload = { user_id };

try {

const sqlQuery = `SELECT * FROM comments
WHERE video_id = '${video_id}' 
AND delete_at IS NULL
ORDER BY created_at desc`;


const connection = await mysqlPool.getConnection();
const [comments] = await connection.execute(sqlQuery);
connection.release();

console.log("MYVIDEOS", comments);

return res.status(200).send({
  data: comments
});
} catch (e) {
return res.status(500).send({ message: e.message });
}
}

module.exports = getComments;