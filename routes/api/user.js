const mongoose = require("mongoose");
const router = require("express").router();
const User = require("../../models/user");

//create 2 gets post put and a delete

router.get("/", async (req, res) => {
  try {
  } catch {}
});

router.get("/:id", async (req, res) => {
  try {
  } catch {}
});

router.post("/", async (req, res) => {
  try {
    const newUser = User.create(req.body);
    res.status(200).json(newUser);
  } catch {}
});
