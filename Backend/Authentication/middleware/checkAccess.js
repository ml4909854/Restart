const checkAcess = (role) => {
  return (req, res, next) => {
    try {
      if (role === req.user.role) {
        next()
      } else {
        res.status(403).json({
          message: "You are not authorized. Only admin can access this page."
        })
      }
    } catch (error) {
      res.status(500).json({
        message: "Error verifying access"
      })
    }
  }
}

module.exports = checkAcess
