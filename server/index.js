const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
const blogs = require("./blogs.json");

app.use(cors(), express.json());

app.listen(
  PORT,
  () => console.log(`Server is running on http://localhost:${PORT}`) // sets the port then console.logs the url once the server is running
);

app.get("/blogs", (req, res) => {
  res.status(200).send(blogs);
});

app.post("/blogs", (req, res) => {
  blogs.push(req.body);
  res.status(200).send("Added a new blog post successfully!");
});
