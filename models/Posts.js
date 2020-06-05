const mongoose = require("mongoose");

//creating schemas!!

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Posts", PostSchema);
