require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
// const blogs = require("./blogs.json");
const mongoose = require("mongoose");
const Blog = require("./schemas/BlogSchema");

const PORT = 8080;

mongoose.connect(process.env.mongodb_uri);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected to database");
});

app.use(cors(), express.json());

app.listen(
  PORT,
  () => console.log(`Server is running on http://localhost:${PORT}`) // sets the port then console.logs the url once the server is running
);

app.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).send(blogs);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.post("/blogs", async (req, res) => {
  const blog = new Blog(req.body);
  try {
    await blog.save();
    res.status(201).send("added new blog successfully")
  } catch (err) {
    res.status(401).send(`error: ${err.message}`);
  }
});

app.delete("/blogs", async (req, res) => {
  await Blog.deleteMany({})
  res.status(200).send('deleted all')
});