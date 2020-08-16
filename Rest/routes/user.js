const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passwordHash = require('password-hash');

router.post('/', async function(req, res) {
    const { email, password } = req.body;
    const hashPassword = passwordHash.generate(password);
    //TODO...
});

module.exports = router;