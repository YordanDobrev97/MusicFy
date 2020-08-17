const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passwordHash = require('password-hash');

router.post('/', async function(req, res) {
    const { email, password } = req.body;
    const hashPassword = passwordHash.generate(password);
    const newUser = new User({
        email: email,
        password: hashPassword
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