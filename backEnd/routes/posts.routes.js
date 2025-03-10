import express from "express";
import { getPosts, createPosts } from "../src/controllers/posts.controller.js";
import { Createmiddleware } from "../middlewares/posts.middleware.js";
const router = express.Router();

router.get("/posts", getPosts);
router.post("/posts", Createmiddleware, createPosts);


export default router;  