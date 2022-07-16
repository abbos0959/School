const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   age: {
      type: Number,
   },
   groupId:{
    type:mongoose.Schema.ObjectId,
    ref:"groups"
   }
});

module.exports=mongoose.model("students",StudentSchema)