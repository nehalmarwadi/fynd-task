const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const router = express.Router();
const { Appointment } = require('../models/appointment.model');
const { authorizedUser } = require('../utils/authorizedUser');

const secret = process.env['SECRET'];

// Authorised Calls

router.post('/', authorizedUser, async (req, res) => {
    const { doctor, user, ticketPrice, appointmentDate, status, isPaid } = req.body
    try {
        const newAppointment = new Appointment({
            doctor: doctor,
            user: user,
            ticketPrice: ticketPrice,
            appointmentDate: appointmentDate,
            status: status,
            isPaid: isPaid
        })
        const appointment = await newAppointment.save();
        res.status(201).json({
            success: true,
            comment: "Appointment created",
            result: appointment
        })
    } catch (e) {
        console.log(e.message);
        res.status(409).json({
            success: false,
            error: e.message,
            result: 'Appointment not created'
        })
    }
})

router.get('/user', authorizedUser, async (req, res) => {
    const { _id } = req.body;
    try {
        const appointmentData = await Appointment.find({ user: _id }).populate({ path: 'doctor', select: 'name' })
        res.json({
            success: true,
            result: appointmentData
        })
    } catch (e) {
        console.log(e.message);
        res.status(501).json({
            success: false,
            error: e.message,
            result: "Unable to fetch data"
        })
    }
})

router.get('/doctor', authorizedUser, async (req, res) => {
    const { _id } = req.body;
    try {
        const appointmentData = await Appointment.find({ doctor: _id }).populate({ path: 'user', select: 'name' })
        res.json({
            success: true,
            result: appointmentData
        })
    } catch (e) {
        console.log(e.message);
        res.status(501).json({
            success: false,
            error: e.message,
            result: "Unable to fetch data"
        })
    }
})

router.patch('/updateUser/user', authorizedUser, async (req, res) => {
    const { _id, status } = req.body;
    try {
        await User.findOneAndUpdate({
            user: _id
        }, {
            status: status
        })
        res.json({
            success: true,
            result: "Successfully Updated"
        })
    } catch (e) {
        console.log(e.message);
        res.status(409).json({
            success: false,
            error: e.message,
            result: "Failed to update"
        })
    }
})

router.patch('/updateUser/doctor', authorizedUser, async (req, res) => {
    const { _id, status, isPaid } = req.body;
    try {
        await User.findOneAndUpdate({
            user: _id
        }, {
            status: status,
            isPaid: isPaid
        })
        res.json({
            success: true,
            result: "Successfully Updated"
        })
    } catch (e) {
        console.log(e.message);
        res.status(409).json({
            success: false,
            error: e.message,
            result: "Failed to update"
        })
    }
})

module.exports = router