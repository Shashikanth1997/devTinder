const express = require("express");
const jwt = require("jsonwebtoken")
const connectDB = require("./config/database");
var cookieParser = require('cookie-parser')
// const { ValidationSignUpData } = require("./utils/Validation");
const app = express();
app.use(express.json());
app.use(cookieParser())
const User = require("./models/user");
const authRouter = require("./routes/auth")
const profileRouter = require("./routes/profile")
const requestRouter = require("./routes/request")
app.use("/",authRouter)
app.use("/",profileRouter)
app.use("/",requestRouter)
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




// app.patch("/user/:userId", async (req, res) => {
//   //  console.log("Req",req.body)
//   const userId = req.params?.userId;
//   const data = req.body;

//   try {
//     const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];
//     const isUpdatedAllowed = Object.keys(data).every((k) =>
//       ALLOWED_UPDATES.includes(k),
//     );
//     if (!isUpdatedAllowed) {
//       throw new Error("Update not allowed");
//     }
//     if (data?.skills.length > 10) {
//       throw new Error("Skills can be not more than 10");
//     }
//     await User.findByIdAndUpdate({ _id: userId }, data, {
//       returnDocument: "after",
//       runValidators: true,
//     });
//     // console.log(user)
//     res.send("User updated  Successfully");
//   } catch (err) {
//     res.status(400).send("Update failed" + err.message);
//   }
// });