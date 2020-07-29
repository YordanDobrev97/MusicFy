const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', async function(req, res) {
    const { email, password } = req.body;
    const newUser = new User({
        email: email,
        password: password
    });

    try {
        const savedUser = newUser.save();
        res.json(savedUser);
        console.log(newUser)
    } catch (e) {
        res.json('error')
    }
});

module.exports = router;