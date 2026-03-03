const validator = require("validator");
const ValidationSignUpData = (req) =>{
    const {firstName,lastName,emailId,password}=req.body
    if(!firstName || !lastName){
throw new Error("Name is not Valid")
    }else if(!validator.isEmail(emailId)){
        throw new Error("Email is not Valid")
    }else if(!validator.isStrongPassword(password)){
        throw new Error("Please enter a strong password")
    }
}

const ValidateEditProfileData = (req) =>{
const allowedEditFields = ["firstName","lastName","photoUrl","emailId","gender","age","about","skills"]
const isEditAllowed = Object.keys(req.body).every(field => allowedEditFields.includes(field))
return isEditAllowed
}

module.exports={ValidationSignUpData,ValidateEditProfileData}