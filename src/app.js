const express = require("express")
const connectDB = require("./config/database")
const User=require("./models/user")
const app =express()
// 
app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "virat",
    lastName: "kohli",
    age: 29,
  });

  try {
    await user.save();
    res.send("Added successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
});


connectDB().then(()=>{
    console.log("Connect Established")
    app.listen(1800,()=>{console.log("this is running in 1800 port")})
}).catch(()=>{
    console.log("Connect not connected")
})
