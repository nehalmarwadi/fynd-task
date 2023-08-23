const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const router = express.Router();
const { User } = require('../models/user.model');
const { authorizedUser } = require('../utils/authorizedUser');

const secret = process.env['SECRET'];

// Non Authorised Calls

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email: email })
        if (user === null) {
            return res.status(404).json({
                success: false,
                result: "No user found"
            })
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (validPassword) {
            const token = jwt.sign({ _id: user._id }, secret, { expiresIn: '24h' });
            res.json({
                success: true,
                result: token
            })
        } else {
            return res.status(401).json({
                success: false,
                result: "Wrong Password"
            })
        }
    } catch (e) {
        console.log(e.message);
        res.status(404).json({
            success: false,
            error: e.message,
            result: "No user found"
        })
    }
})

router.post('/signup', async (req, res) => {
    const { email, password, name, phone, role, gender, photo } = req.body
    try {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const encryptedPassword = await bcrypt.hash(password, salt);
        if (role === 'patient' || 'admin') {
            const newUser = new User({
                email: email,
                name: name,
                password: encryptedPassword,
                phone: phone,
                role: role,
                gender: gender,
                photo: photo
            })
            const user = await newUser.save();
            const token = jwt.sign({ _id: user._id }, secret, { expiresIn: '24h' });
            res.status(201).json({
                success: true,
                comment: "User created",
                result: token
            })
        } else {
            return res.status(409).json({
                success: false,
                result: "User not created"
            })
        }
    } catch (e) {
        console.log(e.message);
        res.status(409).json({
            success: false,
            error: e.message,
            result: 'User not created'
        })
    }
})

// Authorised Calls

router.get('/getUserData', authorizedUser, async (req, res) => {
    const { _id } = req.body;
    try {
        const userData = await User.findOne({ _id: _id })
        res.json({
            success: true,
            result: userData
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

router.patch('/updateUser', authorizedUser, async (req, res) => {
    const {
        name,
        phone,
        photo,
        gender,
        bloodType,
        _id
    } = req.body;
    try {
        await User.findOneAndUpdate({
            _id: _id
        }, {
            name: name,
            phone: phone,
            photo: photo,
            gender: gender,
            bloodType: bloodType
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