const mongoose = require('mongoose')
const { Schema } = mongoose

const reviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    reviewText: {
      type: String,
      required: true,
    },
    
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

const Review = mongoose.model('Review', reviewSchema)
module.exports = { Review }