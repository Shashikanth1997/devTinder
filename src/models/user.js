const  jwt  = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  firstName: { type: String,required:true ,minLength: 4,maxLength:50},
  lastName: { type: String, },
  emailId: { type: String,
    required:true,
     unique: true,
     lowercase:true,
    validate(value){
    if( !validator.isEmail(value)){
      throw new Error("Invalid email address"+ value)
    }
    } 
    },
  password: { type: String,required:true,
     validate(value){
    if( !validator.isStrongPassword(value)){
      throw new Error("Enter strong Password"+ value)
    }
    } 
   },
  age: { type: Number,min:18 },
  gender: { type: String ,
    validate(value){
      if(!["male","female","other"].includes(value)){
        throw new Error("Gender Data is not Valid")
      }
    }
  },
  photoUrl: { type: String,
     validate(value){
    if( !validator.isURL(value)){
      throw new Error("Invalid Photo URL"+ value)
    }
    } 
  },
  about: { type: String,default:"This is default about a user"},
  skills: { type: [String] },
},{ timestamps: true });


userSchema.methods.getJWT =  async function(){
  const user = this;
  const token = await jwt.sign({_id:user._id},"DEV@Tinder$790",{ expiresIn: "1d" })
  return token
}

userSchema.methods.ValidatePassword = async function(passwordInputByUser){
  const user = this;
  const passwordHash = user.password
    const isPasswordValid = await bcrypt.compare(passwordInputByUser,passwordHash);
    return isPasswordValid
}
const User = mongoose.model("User", userSchema);
module.exports = User;
