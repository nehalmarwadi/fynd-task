const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const router = express.Router();
const { Review } = require('../models/review.model');
const { authorizedUser } = require('../utils/authorizedUser');

const secret = process.env['SECRET'];


// Non Authorised Calls

router.get('/', async (req, res) => {
    try {
        const reviewData = await Review.find().populate({ path: 'doctor' }).populate({ path: 'user' })
        res.json({
            success: true,
            result: reviewData
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


// Authorised Calls

router.post('/', authorizedUser, async (req, res) => {
    const { doctor, user, reviewText, rating } = req.body
    try {
        const newReview = new Review({
            doctor: doctor,
            user: user,
            reviewText: reviewText,
            rating: rating
        })
        const review = await newReview.save();
        res.status(201).json({
            success: true,
            comment: "Review created",
            result: review
        })
    } catch (e) {
        console.log(e.message);
        res.status(409).json({
            success: false,
            error: e.message,
            result: 'Review not created'
        })
    }
})

module.exports = router