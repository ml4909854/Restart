

// first step to connect our local database to our server .
// with the help of mongoose we can connect our server to the monggose

const mongoose = require("mongoose")
const mongoUrl = "mongodb://127.0.0.1:27017/mongoose"

const connectDb = async()=>{
    try {
    await mongoose.connect(mongoUrl)
     console.log("db connected!")
} catch (error) {
    console.log(error , "db connection error!")
}
}

module.exports = connectDb