

const mongoose = require("mongoose")
const ProductSchema = new mongoose.Schema({
    title:String, 
    description:String,
    price:Number
} , {
    versionKey:false,
    timestamps :true
})

module.exports = mongoose.model("product" , ProductSchema)