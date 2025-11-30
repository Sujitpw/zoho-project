const mongoose = require("mongoose");
const { Schema } = mongoose;

const AvailableLoadSchema = new Schema(
  {
    loadId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 100
    },

    from: {
      type: String,
      required: true,
      trim: true
    },

    to: {
      type: String,
      required: true,
      trim: true
    },

    price: {
      type: Number,
      required: true,
    },

    weight: {
      type: String,
      required: true,
      trim: true,
    },

    loadDate: {
      type: String,
      required: true
    },

    shipperName: {
      type: String,
      required: true,
      trim: true
    },

    shipperRating: {
      type: Number,
      default: 0
    },

    urgency: {
      type: String,
      enum: ["Low", "Medium", "High"],
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("AvailableLoad", AvailableLoadSchema);
