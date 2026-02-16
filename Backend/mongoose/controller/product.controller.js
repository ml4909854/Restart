

const express = require("express")
const router = express.Router()
const ProductModel = require("../models/product.model.js")


router.post("/", async (req, res) => {
  try {
    const Product = new ProductModel(req.body)
    const savedProduct = await Product.save()
    res.status(201).json({ message: "Product created successfully", Product: savedProduct })
  } catch (error) {
    res.status(500).json({ message: "Failed to create Product", error: error.message })
  }
})

router.get("/", async (req, res) => {
  try {
    const filter = req.query
    const Products = await ProductModel.find(filter)
    res.status(200).json({ count: Products.length, Products })
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Products", error: error.message })
  }
})

router.get("/:id", async (req, res) => {
  try {
    const Product = await ProductModel.findById(req.params.id)
    if (!Product) {
      return res.status(404).json({ message: "Product not found" })
    }
    res.status(200).json(Product)
  } catch (error) {
    res.status(500).json({ message: "Error fetching Product", error: error.message })
  }
})

router.patch("/update/:id", async (req, res) => {
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" })
    }

    res.status(200).json({ message: "Product updated successfully", Product: updatedProduct })
  } catch (error) {
    res.status(500).json({ message: "Update failed", error: error.message })
  }
})

router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id)

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" })
    }

    res.status(200).json({ message: "Product deleted successfully", Product: deletedProduct })
  } catch (error) {
    res.status(500).json({ message: "Delete failed", error: error.message })
  }
})

module.exports = router