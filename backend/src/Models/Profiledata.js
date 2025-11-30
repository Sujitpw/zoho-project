const mongoose = require("mongoose");
const { Schema } = mongoose;

const driverSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
      trim: true,
      minLength: 2,
      maxLength: 50,
    },

    Phone: {
      type: String,
      required: true,
      unique: true, // Phone must be unique for each driver
      trim: true,
    },

    Capacity: {
      type: Number,
      required: true,
      min: 1,
    },

    TruckNumber: {
      type: String,
      required: true,
      trim: true,
    },

    Home: {
      type: String,
      required: true,
      trim: true,
    },

    Route: {
      type: String,
      required: true,
      trim: true,
    },

   Email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    lowercase:true,
    immutable:true,
  },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Driver", driverSchema);
