"use strict";

const account = require("./account-router");
const promise = require("./promise-router");
const auth = require("./auth-router");
const video = require("./video-router");
// const notes = require('./notes-router');
// const user = require('./user-router');

module.exports = {
  account,
  promise,
  auth,
  video
  //   notes,
  //   user,
};
