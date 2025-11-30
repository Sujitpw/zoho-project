const mongoose = require("mongoose");
const { Schema } = mongoose;

const LoadSchema = new Schema(
  {
    driverfinallocation: {
      type: String,
      required: true,
      trim: true,
      minLength: 2,
      maxLength: 50,
    },

    driverdemand: {
      type: Number,
      required: true,
      trim: true,
    },
    
   Email:{
    type:String,
    required:true,
    trim:true,
    lowercase:true,
    immutable:true,
  },

  
    drivercurrentlocatio: {
      type: String,
      required: true,
      trim: true,
    },

    loaddate: {
      type: String,
      required: true,
      trim: true,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("ReturnLoad", LoadSchema);

