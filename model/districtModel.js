const mongoose = require("mongoose");
const DistrictSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
});


module.exports=mongoose.model("districts",DistrictSchema)
