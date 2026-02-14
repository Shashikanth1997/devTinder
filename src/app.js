const express = require("express")
const app =express()
app.use("/user", (req, res,next) => {
    // res.send("Works for All");
    next()
},(req, res,next)=>{
    res.send("Second function")
});

// app.get("/user",(req,res)=>{
//     res.send({firstname:"shashikanth"})
// })
// app.post("/user",(req,res)=>{
//     res.send("Data saved to Db")
// })
// app.use("/new",(req,res)=>{
//     res.send("this is my new Program in express.bless me shivayya")
// })
app.listen(1800,()=>{console.log("this is running in 1800 port")})