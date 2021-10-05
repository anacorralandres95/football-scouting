"use strict";
const router = require("express").Router();
import createAccount from "../controllers/account/addaccount-controller";

router.post("/", createAccount);

export default router;
