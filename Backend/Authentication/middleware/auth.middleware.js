
const jwt = require("jsonwebtoken")
const UserModel = require("../models/user.model.js")
const authentication = async(req , res , next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1]
        if(!token){
            return res.status(400).json({message:"Token not found"})
        }
        const decoded = jwt.verify(token  , "masai")
        const user = await UserModel.findById(decoded._id)
        req.user = user
        next()
    } catch (error) {
        res.status(403).json({message:"Invalid or expired token" , error:error})
    }
}

module.exports = authentication