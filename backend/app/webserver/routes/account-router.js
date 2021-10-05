"use strict";

const router = require("express").Router();
const createAccount = require("../controllers/account/addaccount-controller");

router.post("/", createAccount);

module.exports = router;
