const mongoose = require('mongoose');

const UserScheme = mongoose.Schema({
    userId: {
        type: Number,
        require: true,
        unique: true
    }
});

const userModel = mongoose.model('User', UserScheme);

module.exports = userModel;