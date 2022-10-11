const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    Name:String,   
    Email:String,
    Password:String,
})
const userModel=mongoose.model("user_add",userSchema)
module.exports=userModel