
const jwt = require("jsonwebtoken")
const authentication = (req , res , next)=>{
    try {
        const {token} = req.query
        if(!token){
            return res.status(400).json({message:"Token not found"})
        }
        const decoded = jwt.verify(token  , "masai")
        req.user = decoded
        console.log(decoded)
        next()
    } catch (error) {
        res.status(403).json({message:"Invalid or expired token" , error:error})
    }
}

module.exports = authentication