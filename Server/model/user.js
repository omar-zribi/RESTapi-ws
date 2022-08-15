const mongoose=require("mongoose")
const Schema=mongoose.Schema
const userSchema=new Schema({
    fullName:String,
    sex:String,
    email:String,
    phone:String
})
module.exports=mongoose.model("User",userSchema)