const express = require("express");
const connectDB = require("./config/db");
const UserController = require("./controllers/user.controller.js");
const authentication = require("./middleware/auth.middleware.js");
const app = express();
app.use(express.json());

app.use("/users", UserController);

// private Data
// without authentication we can't get our private data
// each and everyuone are private route
app.get("/privateData",authentication, (req, res) => {
    res.send("private data");
});

// cart router
app.get("/cart",authentication ,  (req, res) => {
  res.send("cart data");
});

// order route
app.get("/order", (req, res) => {
  res.send("order data");
});

// health route
app.get("/health-check", (req, res) => {
  res.send("connected!");
});

// page not found router
app.use((req, res) => {
  res.status(404).json({ message: "page not found!" });
});

// server is running
app.listen(3000, async (req, res) => {
  await connectDB();
  console.log("server is running");
});
