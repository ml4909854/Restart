
const mongoose = require("mongoose")
const mongoUrl = "mongodb://127.0.0.1:27017/authDb"


const connectDB = async() =>{
    try {
        mongoose.connect(mongoUrl)
        console.log("DB connected!")
    } catch (error) {
        console.log(error , "db not connected!")
    }
}

module.exports = connectDB