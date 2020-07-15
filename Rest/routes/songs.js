const express = require('express');
const router = express.Router();
const Song = require('../models/song');

router.post('/create', async (req, res) => {
    const { songName, artistName, imageUrl, sourceUrl } = req.body;
    const newSong = new Song({
        songName,
        artistName,
        imageUrl,
        sourceUrl
    });

   try {
        const savedSong = await newSong.save();
        res.json(savedSong);
   } catch (err) {
       res.json('not added new song!!!')
   }
});

router.get('/all', (req, res) => {
    const all = Song.find({}, (err, songs) => {
        const listSongs = {};

        songs.forEach(song => {
            listSongs[song._id] = song;
        })

        res.send(listSongs);
    })
});

module.exports = router;