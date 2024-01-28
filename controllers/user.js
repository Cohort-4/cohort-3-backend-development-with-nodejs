import { v4 as uuidv4 } from "uuid";

// dummy Database
let users = [];

// get all users
export const getAllUsers = (req, res) => {
  res.send(users);
};

// create new user
export const createUsers = (req, res) => {
  const newUser = req.body;
  const userId = uuidv4();
  users.push({ ...newUser, id: userId });
  res.json({
    status: 201,
    message: `user with name ${newUser.name} is created successfully`,
  });
};

export const getUser = (req, res) => {
  // console.log(req.params);
  const { id } = req.params;
  const foundUserById = users.find((user) => user.id === id);
  // console.log(foundUserById);
  res.send(foundUserById);
};

// delete user by id
export const deleteUser = (req, res) => {
  const id = req.params.id;
  users = users.filter((user) => user.id !== id);
  res.json({
    message: `User with the id ${id} has been deleted successfully`,
  });
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, age, gender } = req.body;
  const user = users.find((user) => user.id === id);
  if (name) {
    user.name = name;
  }
  if (gender) {
    user.gender = gender;
  }
  if (age) {
    user.age = age;
  }
  res.send(`User with ${id} has been updated successfully`);
};