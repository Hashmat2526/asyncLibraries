const router = require("express").Router();

const mongoose = require("mongoose");

const Post = mongoose.model("Post");

router.get("/", async (req, res) => {
  const posts = await Post.find({}); // curly braces empty means fetch all
  res.send(posts);
});
router.post("/", async (req, res) => {
  const post = new Post();
  post.title = req.body.title;
  post.content = req.body.content;
  await post.save();
  res.send(post);
});

router.get("/:postId", async (req, res) => {
  const post = await Post.findOne({ _id: req.params.postId });
  console.log("working...");
  res.send(post);
});

router.put("/:postId", async (req, res) => {
  const post = await Post.findOneAndUpdate(
    {
      _id: req.params.postId
    },
    req.body,
    {
      new: true,
      runValidators: true
    }
  );
  res.send(post);
});

router.delete("/:postId", async (req, res) => {
  const post = await Post.findByIdAndDelete({
    _id: req.params.postId
  });
  res.send(post);
});

module.exports = router;
