const mongoose=require("mongoose")

module.exports=connectDb=async()=>{
    try {
        await mongoose.connect(process.env.db)
        console.log("dataBase is connected")
    } catch (error) {
        console.log(error.message)
    }
}