const express = require("express");
const router = express.Router();
const UserModel = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// lets register the user
// when user register we have required username its email password

router.post("/register", async (req, res) => {
  try {
    const userData = req.body;
    // console.log(userData)
    const extinguishUser = await UserModel.findOne({ email: userData.email });
    if (extinguishUser) {
      return res
        .status(400)
        .json({ message: "User already exits. try different Email" });
    }
    const hashPassword = await bcrypt.hash(userData.password, 10);
    const newUser = new UserModel({ ...userData, password: hashPassword });
    const savedUser = await newUser.save();
    res.status(201).json({
      message: `${userData.username} registerd succesfullly`,
      user: savedUser,
    });
  } catch (error) {
    res.status(500).json({ message: "error to register user", error: error });
  }
});

// login route
router.post("/login", async (req, res) => {
  try {
    // login a new User !
    const { email, password } = req.body;
    // first step to check user registered or not

    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "user not exists.Please register first" });
    }

    // check password
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(400).json({ message: "wrong password!" });
    }

    // generate token
    const token = jwt.sign({ _id: user._id}, "masai", {
      expiresIn: "20m",
    });
    res
      .status(200)
      .json({ message: `${user.username} logged successfully`, token });
  } catch (error) {
    res.status(500).json({ message: "error to login user!", error: error });
  }
});
module.exports = router;
