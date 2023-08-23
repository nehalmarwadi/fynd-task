const mongoose = require('mongoose')
const { Schema } = mongoose

const doctorSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },

  password: { type: String, required: true },

  name: { type: String, required: true },

  phone: { type: Number },

  photo: { type: String },

  ticketPrice: { type: Number },

  role: {
    type: String,
  },

  // Fields for doctors only
  specialization: { type: String },

  qualifications: {
    type: Array,
  },

  experiences: {
    type: Array,
  },

  bio: { type: String, maxLength: 50 },

  about: { type: String },

  timeSlots: { type: Array },

  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],

  averageRating: {
    type: Number,
    default: 0,
  },

  totalRating: {
    type: Number,
    default: 0,
  },

  isApproved: {
    type: String,
    enum: ["pending", "approved", "cancelled"],
    default: "pending",
  },

  appointments: [{ type: Schema.Types.ObjectId, ref: "Appointment" }],

});

const Doctor = mongoose.model('Doctor', doctorSchema)
module.exports = { Doctor }