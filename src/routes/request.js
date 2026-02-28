const express = require("express")
const requestRouter = express.Router()
const {userAuth} =  require("../middlewares/auth")
requestRouter.post("/sendConnectionRequest",userAuth,(req,res)=>{
  const user = req.user
console.log("user",user)
res.send("Connect Request Send"+user.firstName)
})
module.exports= requestRouter