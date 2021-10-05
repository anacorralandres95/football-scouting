"use strict";

const mysqlPool = require("../../../database/mysql-pool");
const httpServerDomain = process.env.HTTP_SERVER_DOMAIN;


async function getMyVideos(req, res, next) {
    const { user_id } = req.claims;
    console.log("MYVIDEOS USERID" , user_id)

    // const payload = { user_id };

try {

const sqlQuery = `SELECT * FROM videos
INNER JOIN promise
ON videos.promise_id = promise.promise_id
WHERE promise.user_id = '${user_id}' 
AND deleted_at IS NULL
ORDER BY created_at desc`;


const connection = await mysqlPool.getConnection();
const [my] = await connection.execute(sqlQuery);
connection.release();

console.log("MYVIDEOS", my);

return res.status(200).send({
  data: my
});
} catch (e) {
return res.status(500).send({ message: e.message });
}
}

module.exports = getMyVideos;