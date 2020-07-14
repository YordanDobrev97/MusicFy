const mongoose = require('mongoose');

const SongScheme = mongoose.Schema({
    songName: String,
    artistName: String,
    imageUrl: String
});

const songModel = mongoose.model('Song', SongScheme);

module.exports = songModel;