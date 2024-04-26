const mongoose = require("mongoose");
const router = require("express").router();
const User = require("../../models/user");

//create 2 gets post put and a delete

//finds all
router.get("/", async (req, res) => {
  try {
    const newUser = await User.findAll();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//finds one
router.get("/:id", async (req, res) => {
  try {
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
router.put("/:id", async (req, res) => {
  try {
    const newUser = await User.findByIdAndUpdate();
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const newUser = await User.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});
