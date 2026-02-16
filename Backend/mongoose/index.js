

// // we have to setup our express server 
// const express = require("express")
// const connectDb = require("./config/db")
// const UserModel = require("./models/user.model")
// const app = express()
// app.use(express.json())
// // craete a user with the help of user model 
// // to create a user we have to get the data from 
// // the postman
// // or send the data from the postman 
// // or in user router we have to geth the user data 
// // with the help of user we can get the data of the user

// // post the data from the users route 
// // and add that data into the mongoose database

// // create a user
// app.post("/users" , async(req , res)=>{
//     try {
//         // or// we can get the data like this way
//         // const data = req.body then paste the data into in place of req.body

//         const user = new UserModel(req.body)
//         const savedUser = await user.save()
//         res.status(201).json({message:"user created" , user:savedUser})
//     } catch (error) {
//         res.status(500).json({message:"user not created"  , error:error})
//     }
// })

// // Now user created successfully 
// // Its a time to get all users 

// app.get("/users" , async(req , res)=>{
//     // get user by querris if querry is not present it 
//     // works like  a fileter operation.

// try {
//     const filter = req.query
//     const users = await UserModel.find(filter) 
//     if(users.length === 0){
//         return res.status(404).json({message:"No users present!"})
//     }
//     res.status(200).json({message:"get all users!" , users:users})    
// } catch (error) {
//     res.status(500).json({message:"error to get all userrs" , error:error})
// }
// })


// // get user with id 

// app.get("/users/:id" , async(req , res )=>{
//      const id = req.params.id
//      try {
//         const user = await UserModel.findById(id)

//          if(user.length === 0 ){
//             return res.status(404).json({message:"user not found"})
//         }

//         res.status(200).json({user:user})
       
//      } catch (error) {
//         res.status(500).json({error:error})
//      }
// })

// // update user by id

// app.patch("/users/update/:id" ,async (req , res)=>{
//     try {
//         const id = req.params.id
//         const updateUser = await UserModel.findByIdAndUpdate(id , req.body , {
//             new:true
//         })
//         return res.status(200).json({message:"user updated successffully" , user:updateUser})
//     } catch (error) {
//     res.status(500).json({error:error})
//     }
// })

// // delete the user
// app.delete("/users/delete/:id" ,async (req , res)=>{
//     try {
//         const id = req.params.id
//         const deleteUser = await UserModel.findByIdAndDelete(id)
//         if(!deleteUser){
//             res.status(404).json({message:"user not found ! or user already deleted"})
//         }
//         return res.status(200).json({message:"user delete successffully" , user:deleteUser})
//     } catch (error) {
//     res.status(500).json({error:error})
//     }
// })

// // create a health router
// app.get("/health" , (req , res)=>{
//     res.status(200).json({message:"connected"})
// })

// // for any routes
// app.use((req , res)=>{
//     res.status(404).json({message:"Page not found!"})
// })
// app.listen(3000 , async()=>{
//     await connectDb()
//     console.log("server is running")
// })

// add code into a separate controller file.


const express = require("express")
const connectDb = require("./config/db")
const userController = require("./controller/user.controller")
const productController = require("./controller/product.controller")
const app = express()
app.use(express.json())


// user route

app.use("/users" , userController)
app.use("/products" , productController)

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is running" })
})

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" })
})

app.listen(3000, async () => {
  await connectDb()
  console.log("Server running on port 3000")
})
