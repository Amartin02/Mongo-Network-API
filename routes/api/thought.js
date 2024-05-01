const mongoose = require("mongoose");
const Thought = require("../../models/thought");
const User = require("../../models/user");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const thoughtData = await Thought.find();
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const thoughtData = await Thought.findOne({ _id: req.params.id });
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//post for reactions
router.post("/:thoughtId/reaction", async (req, res) => {
  try {
    const thoughtData = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { new: true }
    );
    res.status(200).json(thoughtData);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const thoughtData = await Thought.create(req.body);
    const userData = User.findOneAndUpdate(
      { _id: req.body.userId },
      { $push: { thoughts: thoughtData._id } }
    );
    if (!userData) {
      res.status(404).json("No User found");
    }
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const thoughtData = await Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const thoughtData = await User.deleteOne({
      _id: req.params.id,
    });
    res.status(200).json("Deleted Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete for reaction
router.delete("/:thoughtId/reaction/:reactionId", async (req, res) => {
  try {
    const thoughtData = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    );
    res.status(200).json("Deleted Successfully");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
