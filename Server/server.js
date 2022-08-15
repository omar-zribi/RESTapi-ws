const express=require("express");
const app=express();
require("dotenv").config({path:"./config/.env"})

const PORT=process.env.PORT||6000;
const connectDb=require('./config/connectDb');
connectDb()
const User=require("./model/user")
app.use(express.json())
app.listen(PORT,(error)=>error?console.log(error):console.log(`server is runing on the port=${PORT}`));
//add new user
app.post("/add",async(req,res)=>{
    const {fullName,sex,email,phone}=req.body
    try {
        const newUser=new User(
            {fullName,sex,email,phone})
            await newUser.save()
            res.send(newUser) 
    } catch (error) {
            res.send(error.message)
    }
})
//getall users
app.get("/getall",async(req,res)=>{
    try {
        const Users=await User.find()
            res.send(Users)
    } catch (error) {
            res.send(error.message)
    }
})
//get 1 user
app.get("/get/:id",async(req,res)=>{
    try {
        const theUser=await User.findById(req.params.id)
            res.send(theUser)
    } catch (error) {
            res.send(error.message)
    }
})
//delete user
app.delete("/delete/:id",async(req,res)=>{
    try {
        const deleteUser=await User.findByIdAndDelete(req.params.id)
            res.send(deleteUser)
    } catch (error) {
            res.send(error.message)
    }
})
//edit user
app.put("/edit/:id",async(req,res)=>{
    try {
        const editUser=await User.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
            res.send(editUser)
    } catch (error) {
            res.send(error.message)
    }
})