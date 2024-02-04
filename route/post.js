import express from "express";

import {
  getAllPosts,
  createPosts,
  getPost,
  deletePost,
  updatePost,
} from "../controllers/post.js";

const router = express.Router();

// get all posts route
router.get("/", getAllPosts);

// create new user route
router.post("/", createPosts);

//get a single user by id
router.get("/:id", getPost);

// delete user by id

router.delete("/:id", deletePost);

// update user detaila

router.patch("/:id", updatePost);

export default router;
