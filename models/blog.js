const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  image: { type: String, required: [true, "Image Is Required"] },
  views: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
  metaDesc: {
    type: String,
  },
  keywords: [{ type: String }],
  category: [{ type: String }],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

mongoose.models = {};

const Blog = mongoose.model("blogs", BlogSchema);

module.exports = Blog;
