import express from "express";
import {
  createPost,
  deletPosts,
  editPost,
  getPosts,
} from "../controllers/blogController.js";

const router = express.Router();
router.post("/createPost", createPost);
router.get("/getPosts", getPosts);
router.delete("/deletePost/:id", deletPosts);
router.put("/editPost/:id", editPost);

export default router;
