const mongoose = require('mongoose');

const UserScheme = mongoose.Schema({
    email: String,
    password: String
});

const User = mongoose.model('User', UserScheme);

module.exports = User;