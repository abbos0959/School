const mongoose = require("mongoose");

// const regionsSchema=new mongoose.Schema({
//    region: [
//       {
//          name: {
//             type: String,
//             required: true,
//          },

//          districId: [
//             {
//                type: mongoose.Schema.ObjectId,
//                ref: "districts",
//             },
//          ],
//       },
//    ],

// })


const CountrySchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      unique:true
   },
   region: [
      {
         name: {
            type: String,
            required: true,
         },

         districId: [
            {
               type: mongoose.Schema.ObjectId,
               ref: "districts",
            },
         ],
      },
   ],
  
},
{toJSON:true,
toObject:true});




CountrySchema.virtual("districts",{

})



module.exports = mongoose.model("countries", CountrySchema);
