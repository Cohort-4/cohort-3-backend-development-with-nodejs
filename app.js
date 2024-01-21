import express from "express";
import usersRoute from "./route/user.js";

import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const PORT = 9000;

app.use("/users", usersRoute);
app.get("/", (req, res) => {
  res.json({
    message: "Hello Cohort three Homepage",
  });
});

app.listen(PORT, () => {
  console.log(`Server is now running on http://localhost:${PORT}`);
});
