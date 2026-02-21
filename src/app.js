const express = require("express");
const connectDB = require("./config/database");
const app = express();
app.use(express.json());

const User = require("./models/user");


app.post("/signup",async(req,res)=>{
   const user = new User(req.body)
   try{
   await user.save()
   res.send("User Added Successfully")
   }catch(err){
    res.status(400).send("Error saving the user:"+err.message)
   }
})

app.patch("/user",async(req,res)=>{
 console.log("Req",req.body)
 const userId = req.body.userId;
 const data = req.body;
 try{
  await User.findByIdAndUpdate({_id:userId},data,{
    returnDocument:"after",
    runValidators:true
  })
  // console.log(user)
  res.send("User updated  Successfully")
 }catch(err){
  res.status(400).send("user not find")
 }
})

connectDB()
  .then(() => {
    console.log("Database connection established");
  })
  .catch(() => {
    console.log("Database not connected");
  });

app.listen(7777, () => {
  console.log("server is successfully running on port 7777");
});

