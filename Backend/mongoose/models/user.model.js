

// next step to create a model 
// first step to create a schma
// then create a model 
// after that create a controller

const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
},{
    versionKey:false,
    timestamps:true
})


module.exports = mongoose.model("user" , UserSchema)