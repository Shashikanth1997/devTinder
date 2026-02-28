const express = require("express")
const bcrypt = require("bcrypt");
const authRouter = express.Router()
const {ValidationSignUpData} = require("../utils/Validation")
const User = require("../models/user");
// SignUp Functionality //
authRouter.post("/signup", async (req, res) => {
  try {
    ValidationSignUpData(req);
    const { firstName, lastName, emailId, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });
    await user.save();
    res.send("User Added Successfully");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

// Login Functionality //
authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId: emailId });
    console.log("LoginUser",user)
    if (!user) {
      throw new Error("Email not found");
    }
    const isPasswordValid = await user.ValidatePassword(password)

    if (isPasswordValid) {
      const token = await user.getJWT();
      console.log(token)
      res.cookie("token",token,{
    expires: new Date(Date.now() + 8 * 3600000) // cookie will be removed after 8 hours
  })
      res.send("Login Successful")
    } else {
      throw new Error("Invalid Password Credentials");
    }
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

module.exports=authRouter
