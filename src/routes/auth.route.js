import express from "express";
import { login, logout, refreshtoken, register } from "../controller/auth.controller.js";
import trimRequest from "trim-request";
const router = express.Router();

// router.route("/register").post((req,res) => {
//     res.send("hello from register api");
// });

router.route("/register").post(trimRequest.all,register);
router.route("/login").post(trimRequest.all,login);
router.route("/logout").post(trimRequest.all,logout);
router.route("/refreshtoken").post(trimRequest.all,refreshtoken);


export default router;
