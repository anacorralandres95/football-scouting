"use strict";
require("dotenv").config();
import { listen } from "./app/webserver";
import { connect } from "./app/database/mysql-pool";

const httpListeningPort = process.env.PORT;

async function initApp() {
  try {
    await connect();
    await listen(httpListeningPort);
    console.log(`server running at: ${httpListeningPort}`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

initApp();
