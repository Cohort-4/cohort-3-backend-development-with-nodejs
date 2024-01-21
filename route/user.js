import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

// dummy Database
const users = [];

// get all users
router.get("/", (req, res) => {
  res.send(users);
});

// create new user
router.post("/", (req, res) => {
  const newUser = req.body;
  const userId = uuidv4();
  users.push({ ...newUser, id: userId });
  res.json({
    status: 200,
    message: `user with name ${newUser.name} is created successfully`,
  });
});

//get a single user by id

router.get("/", (req, res) => {
  // console.log(req.params);
  const { id } = req.params;

  const foundUserById = users.find((user) => user.id);
  res.send(foundUserById);
  // res.json({
  //   status: 200,
  //   foundUserById,
  //   message: `User with id ${id} successfully retrieved`,
  // });
});

export default router;
