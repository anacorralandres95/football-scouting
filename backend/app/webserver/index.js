"use strict";
import express, { json } from "express";
import { json as _json } from "body-parser";
import cors from "cors";
import { account, promise, auth, video } from "./routes";

const app = express();
app.use(_json());
app.use(json());
app.use(cors());

app.use("/api/account", account);
app.use("/api/promise", promise);
app.use("/api/auth", auth);
app.use("/api/video", video);

app.get("/", (_, res) => {
  res.send("base url: /api");
});

let server = null;
async function listen(port) {
  try {
    if (server) {
      return server;
    }

    server = await app.listen(port);
    return server;
  } catch (e) {
    console.error("Can't listen", e);
    throw e;
  }
}

async function close() {
  if (server) {
    await server.close();
    server = null;
  } else {
    console.error("Can't close a non started server");
  }
}

export default {
  listen,
  close,
};
