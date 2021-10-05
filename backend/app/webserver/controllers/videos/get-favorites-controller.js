"use strict";

const mysqlPool = require("../../../database/mysql-pool");
const httpServerDomain = process.env.HTTP_SERVER_DOMAIN;


async function getFavorites(req, res, next) {
    const { user_id } = req.claims;

    console.log(user_id);

    // const payload = { user_id };

    try {

        const connection = await mysqlPool.getConnection();

        const sqlQuery2 = `SELECT * FROM videos 
        INNER JOIN favourites
        ON videos.video_id = favourites.video_id 
        INNER JOIN promise
        ON videos.promise_id = promise.promise_id
        WHERE favourites.user_id = '${user_id}' 
        AND delete_at IS NULL
        AND videos.deleted_at IS NULL`;


        const [favorites] = await connection.execute(sqlQuery2);
        connection.release();


        console.log("FAVORITOS", favorites)


return res.status(200).send({
    data: favorites
});
} catch (e) {
return res.status(500).send({ message: e.message });
}
}

module.exports = getFavorites;