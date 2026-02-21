const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  firstName: { type: String,required:true ,minlength: 4},
  LastName: { type: String, },
  emailId: { type: String,required:true, unique: true,lowercase:true},
  password: { type: String,required:true },
  age: { type: Number,min:18 },
  gender: { type: String ,
    validate(value){
      if(!["male","female","other"].includes(value)){
        throw new Error("Gender Data is not Valid")
      }
    }
  },
  photoUrl: { type: String},
  about: { type: String,default:"This is default about a user"},
  skills: { type: [String] },
},{ timestamps: true });
const User = mongoose.model("User", userSchema);
module.exports = User;
