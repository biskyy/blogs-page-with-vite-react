const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  summary: String,
  date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("BlogSchema", blogSchema);
