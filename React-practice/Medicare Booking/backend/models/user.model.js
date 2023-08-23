const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },

  password: { type: String, required: true },

  name: { type: String, required: true },

  phone: { type: Number },

  photo: { type: String },

  role: {
    type: String,
    enum: ["patient", "admin"],
    default: "patient",
  },

  gender: { type: String, enum: ["male", "female", "other"] },

  bloodType: { type: String },

  appointments: [{ type: Schema.Types.ObjectId, ref: "Appointment" }],
}, { timestamps: true });

const User = mongoose.model('User', userSchema)
module.exports = { User }