const express = require("express");
const connectDB = require("./config/db");
const UserController = require("./controllers/user.controller.js");
const authentication = require("./middleware/auth.middleware.js");
const checkAcess = require("./middleware/checkAccess.js");
const UserModel = require("./models/user.model.js");
const app = express();
app.use(express.json());

app.use("/users", UserController);

// health route
app.get("/health-check", (req, res) => {
  res.send("connected!");
});
// private Data
// without authentication we can't get our private data
// each and everyuone are private route
app.get("/privateData",authentication, (req, res) => {
    res.send("private data");
});


// admin
app.get("/admin" , authentication ,checkAcess("admin"), (req , res)=>{
    res.send("hey admin")
})


app.patch("/promote/:id",
 authentication,
 checkAcess("admin"),
 async(req,res)=>{
   await UserModel.findByIdAndUpdate(req.params.id,{
     $addToSet:{ role:"admin" }
   })

   res.send("User promoted to admin")
})


// page not found router
app.use((req, res) => {
  res.status(404).json({ message: "page not found!" });
});

// server is running
app.listen(3000, async (req, res) => {
  await connectDB();
  console.log("server is running");
});
