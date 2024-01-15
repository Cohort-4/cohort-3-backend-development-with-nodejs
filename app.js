import express from "express";

import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const PORT = 9000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello Cohort three student and teacher",
  });
});

app.listen(PORT, () => {
  console.log(`Server is now running on http://localhost:${PORT}`);
});
