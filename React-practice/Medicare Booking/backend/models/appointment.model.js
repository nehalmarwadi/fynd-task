const mongoose = require('mongoose')
const { Schema } = mongoose

const appointmentSchema = new mongoose.Schema(
  {
    doctor: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    ticketPrice: { type: String, required: true },
    
    appointmentDate: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },

    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Appointment = mongoose.model('Appointment', appointmentSchema)
module.exports = { Appointment }
