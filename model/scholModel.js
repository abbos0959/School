const mongoose = require("mongoose");
const ScholModel = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   districtId: {
      type: mongoose.Schema.ObjectId,
      ref: "districts",
   },
});


module.exports = mongoose.model("schools", ScholModel);
