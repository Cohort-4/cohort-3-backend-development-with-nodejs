import express from "express";

import {
  getAllUsers,
  createUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

// get all users route
router.get("/", getAllUsers);

// create new user route
router.post("/", createUsers);

//get a single user by id
router.get("/:id", getUser);

// delete user by id

router.delete("/:id", deleteUser);

// update user detaila

router.patch("/:id", updateUser);

export default router;
