const mongoose=require("mongoose")


const DB=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongo ulandi");
    } catch (error) {
        console.log("mongo ulanmadi");
        
    }
}
module.exports=DB