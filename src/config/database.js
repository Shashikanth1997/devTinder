const mongoose = require("mongoose");

const connectDB = async() =>{

await mongoose.connect("mongodb+srv://shashikanthdussa08_db_user:o6AjfiQMfC12BbbD@namastenode.asehufv.mongodb.net/devTinder")
}
module.exports = connectDB

// module.exports=connectDB
