const express = require("express");
const router = express.Router();
const Post = require("../models/posts");

//gets back all the posts!
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//submits a post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  //saving to our mongoDB database
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific post
router.get("/:postId", async (req, res) => {
  const post = await Post.findById(req.params.postId);
  try {
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete post
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//update a post
router.patch("/:postId", async (req, res) => {
  try {
    const upadatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(upadatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
