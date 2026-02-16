const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(helmet())

app.use(cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET","POST"],
    allowedHeaders: ["Content-Type","Authorization"]
}))

const logger = (req,res,next)=>{
    console.log("before")
    next()
    console.log("after")
}

app.use(logger)

app.get("/", (req,res)=>{
    res.json({ message:"Hey!" })
})

app.listen(3000,()=>{
    console.log("Server running on port 3000")
})
