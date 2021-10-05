'use strict';

const Joi = require('@hapi/joi');
const mysqlPool = require('../../../database/mysql-pool');

// async function validate(payload) {
//   const schema = Joi.object({
//     noteId: Joi.string().guid({
//       version: ['uuidv4'],
//     }).required(),
//     userId: Joi.string().guid({
//       version: ['uuidv4'],
//     }).required(),
//   });

//   Joi.assert(payload, schema);
// }

async function deleteMyVideo(req, res, next) {
  const { user_id } = req.claims;
  const video_id = req.params.video_id;


//   const payload = {
//     noteId
//   };

//   try {
//     await validate(payload);
//   } catch (e) {
//     return res.status(400).send(e);
//   }

  try {

    const connection = await mysqlPool.getConnection();

    const sqlQuery = `SELECT promise_id FROM promise
    WHERE user_id = '${user_id}' `;


    const [result] = await connection.execute(sqlQuery);
    connection.release();

    const promise_id = result[0].promise_id;

    console.log("USERID", promise_id);



    const now = new Date();
    const deletedAt = now
      .toISOString()
      .substring(0, 19)
      .replace("T", " ");


    const deleteMyVideoQuery = `UPDATE videos
    SET deleted_at = '${deletedAt}'
    WHERE promise_id = '${promise_id}'
      AND video_id = '${video_id}'
      AND deleted_at IS NULL`;
    
    await mysqlPool.getConnection();
    const [deletedStatus] = await connection.execute(deleteMyVideoQuery, [now, video_id, promise_id]);
    connection.release();

    if (deletedStatus.changedRows !== 1) {
      return res.status(404).send();
    }

    return res.status(204).send("Borrado");
  } catch (e) {
    console.error(e);
    res.status(500).send({
      message: e.message,
    });
  }
}

module.exports = deleteMyVideo;
