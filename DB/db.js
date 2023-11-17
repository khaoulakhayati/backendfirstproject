const mongoose=require("mongoose")
const connection=async()=>{
try {
    await mongoose.connect("mongodb://127.0.0.1:27017/khaouladb")
    console.log("database is CONNECTED  ")
} catch (error) {
    console.log("database is NOT CONNECTED")
}

}
module.exports =connection;