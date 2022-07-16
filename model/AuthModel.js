const mongoose=require("mongoose")





const Schema=new mongoose.Schema({

    name:{
        type:String,
        required:[true,"siz ism kiritishingiz shart"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"siz email kiritishingiz shart"],
        unique:[true,"Bunday email  mavjud"]

    }

})

module.exports=mongoose.model("user",Schema)