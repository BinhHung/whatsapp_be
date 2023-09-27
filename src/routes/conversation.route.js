import express from "express";
import trimRequest from "trim-request";
import authMiddleware from "../middlewares/authMiddleware.js";
import{create_open_Conversation, getConversations} from "../controller/conversation.controller.js";


const router = express.Router();

router.route("/").post(trimRequest.all, authMiddleware, create_open_Conversation);
router.route("/").get(trimRequest.all, authMiddleware, getConversations);



export default router; 