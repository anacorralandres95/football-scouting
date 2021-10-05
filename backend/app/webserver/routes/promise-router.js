"use strict";


const router = require("express").Router();
const multer = require("multer");

const createPlayer = require("../controllers/promise/addpromise-controller");
const createAccount = require("../controllers/account/addaccount-controller");
const checkAccountSession = require("../controllers/account/check-account-controller");

const upload = multer();

router.post("/", checkAccountSession, upload.single("avatar_url"), createPlayer);
// router.post("/", checkAccountSession, createPlayer);

module.exports = router;
