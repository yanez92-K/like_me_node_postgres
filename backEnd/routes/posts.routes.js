import express from "express";
import {
  getPosts,
  createPosts,
  deletePosts,
  updatePosts,
} from "../src/controllers/posts.controller.js";
import {
  createMiddleware,
  upDateMiddleware,
} from "../middlewares/posts.middleware.js";

const router = express.Router();

router.get("/posts", getPosts);
router.post("/posts", createMiddleware, createPosts);
router.delete("/posts/:id", deletePosts);
router.put("/posts/like/:id",  upDateMiddleware, updatePosts);

export default router;
