const mongoose = require("mongoose");
const router = require("express").Router();
const User = require("../../models/user");

//create 2 gets post put and a delete

//finds all
router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    console.log("error");
    res.status(500).json(err);
  }
});

//finds one
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//post for friends
router.post("/:userId/friends", async (req, res) => {
  try {
    const findFriend = await User.findOne({ username: req.body.username });
    const userData = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: findFriend._id } },
      { new: true }
    );
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const newUser = await User.deleteOne({
      _id: req.params.id,
    });
    res.status(200).json("Deleted Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete for friends
router.delete("/:userId/friends/:friendsId", async (req, res) => {
  try {
    const userData = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: { friendsId: req.params.friendsId } } },
      { new: true }
    );
    res.status(200).json("Deleted Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
