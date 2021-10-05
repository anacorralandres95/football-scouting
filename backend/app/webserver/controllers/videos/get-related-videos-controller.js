"use strict";

const mysqlPool = require("../../../database/mysql-pool");
const httpServerDomain = process.env.HTTP_SERVER_DOMAIN;


async function getRelated(req, res, next) {
    const video_id = req.params.video_id;

    // const payload = { user_id };

    try {

        const connection = await mysqlPool.getConnection();

        const sqlQuery = `SELECT promise_id FROM videos
        WHERE video_id = '${video_id}' `;


        const [result] = await connection.execute(sqlQuery);
        connection.release();

        const promise_id = result[0].promise_id;

        console.log("PROMISEID", promise_id);




        await mysqlPool.getConnection();

        const sqlQuery2 = `SELECT * FROM videos
        INNER JOIN promise
        On videos.promise_id = promise.promise_id
        WHERE videos.promise_id = '${promise_id}' 
        AND deleted_at IS NULL
        ORDER BY created_at desc`;


        const [related] = await connection.execute(sqlQuery2);
        connection.release();


        console.log("VIDEOS RELACIONADOS", related)


return res.status(200).send({
    data: related
});
} catch (e) {
return res.status(500).send({ message: e.message });
}
}

module.exports = getRelated;