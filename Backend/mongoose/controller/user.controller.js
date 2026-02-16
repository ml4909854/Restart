

const express = require("express")
const router = express.Router()
const UserModel = require("../models/user.model.js")


router.post("/", async (req, res) => {
  try {
    const user = new UserModel(req.body)
    const savedUser = await user.save()
    res.status(201).json({ message: "User created successfully", user: savedUser })
  } catch (error) {
    res.status(500).json({ message: "Failed to create user", error: error.message })
  }
})

router.get("/", async (req, res) => {
  try {
    const filter = req.query
    const users = await UserModel.find(filter)
    res.status(200).json({ count: users.length, users })
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users", error: error.message })
  }
})

router.get("/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id)
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error: error.message })
  }
})

router.patch("/update/:id", async (req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" })
    }

    res.status(200).json({ message: "User updated successfully", user: updatedUser })
  } catch (error) {
    res.status(500).json({ message: "Update failed", error: error.message })
  }
})

router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id)

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" })
    }

    res.status(200).json({ message: "User deleted successfully", user: deletedUser })
  } catch (error) {
    res.status(500).json({ message: "Delete failed", error: error.message })
  }
})

module.exports = router