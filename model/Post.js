const mongoose = require("mongoose");

const post_schema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required"
  },
  content: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Post", post_schema);
