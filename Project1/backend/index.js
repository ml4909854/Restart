

// create server

const express = require("express")
const connectDB = require("./config/db")
const userController = require("./contorllers/user.controller")
const blogController = require("./contorllers/blog.controller")
const cors = require("cors")
const app = express()

// parsing data
app.use(express.json())


//crouters
app.use("/users" ,userController )
app.use("/blogs" ,blogController )


// health route
app.get("/" , (req , res)=>{
    res.status(200).json("connected!")
})


//check undefiened routerl
app.use((req , res)=>{
    res.status(404).json("page not found!")
})


let PORT = process.env.PORT
console.log(PORT)
app.listen(PORT , async()=>{
    await connectDB()
    console.log("server is running")
})