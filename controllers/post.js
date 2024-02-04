import { v4 as uuidv4 } from "uuid";

// dummy Database
let posts = [];

// get all users
export const getAllPosts = (req, res) => {
  res.send(posts);
};

// create new user
export const createPosts = (req, res) => {
  const newPost = req.body;
  const postId = uuidv4();
  posts.push({ ...newPost, id: postId });
  res.json({
    status: 201,
    message: `Post with name ${newPost.title} is created successfully`,
  });
};

export const getPost = (req, res) => {
  // console.log(req.params);
  const { id } = req.params;
  const foundPostById = posts.find((post) => post.id === id);
  // console.log(foundPostById);
  res.send(foundPostById);
};

// delete post by id
export const deletePost = (req, res) => {
  const id = req.params.id;
  users = users.filter((post) => post.id !== id);
  res.json({
    message: `Post with the id ${id} has been deleted successfully`,
  });
};

export const updatePost = (req, res) => {
  const { id } = req.params;
  const { name, age, gender } = req.body;
  const post = users.find((post) => post.id === id);
  if (name) {
    post.name = name;
  }
  if (gender) {
    post.gender = gender;
  }
  if (age) {
    post.age = age;
  }
  res.send(`Post with ${id} has been updated successfully`);
};
