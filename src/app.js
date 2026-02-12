const express = require("express")
const app =  express()
app.use("/new",(req,res)=>{
    res.send("This is my first program")
})
app.listen(1800,()=>{
    console.log("this is running in 1800 server")
})