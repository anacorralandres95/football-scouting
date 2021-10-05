"use strict";
import { createPool } from "mysql2/promise";

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_PORT, MYSQL_DATABASE } =
  process.env;

const CONNECTION_LIMIT = 10;

let pool = null;

async function connect() {
  const options = {
    connectionLimit: CONNECTION_LIMIT,
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    port: MYSQL_PORT,
    timezone: "Z",
    multipleStatements: true,
  };

  pool = createPool(options);

  try {
    const connection = await pool.getConnection();

    if (connection) {
      connection.release();
    }
  } catch (e) {
    console.error("Mysql pool connected", e);
    throw e;
  }
}

async function getConnection() {
  if (pool === null) {
    throw new Error("MySQL connection is not established");
  }

  const connection = await pool.getConnection();

  return connection;
}

export default {
  connect,
  getConnection,
};
