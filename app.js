import express from "express";
import usersRoute from "./route/user.js";
import postsRoute from "./route/post.js"

import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const PORT = 9000;

app.use("/api/v1/users", usersRoute);
app.use("/api/v1/posts", postsRoute);
app.get("/", (req, res) => {
  res.json({
    message: "Hello Cohort three Homepage",
  });
});

app.listen(PORT, () => {
  console.log(`Server is now running on http://localhost:${PORT}`);
});
