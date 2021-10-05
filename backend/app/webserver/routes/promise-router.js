"use strict";
const router = require("express").Router();
import multer from "multer";

import createPlayer from "../controllers/promise/addpromise-controller";
import checkAccountSession from "../controllers/account/check-account-controller";

const upload = multer();

router.post(
  "/",
  checkAccountSession,
  upload.single("avatar_url"),
  createPlayer
);

export default router;
