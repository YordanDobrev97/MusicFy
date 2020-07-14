const express = require('express');
const router = express.Router();
const Song = require('../models/song');

router.post('/create', async (req, res) => {
    const { songName, artistName, imageUrl } = req.body;
    const newSong = new Song({
        songName,
        artistName,
        imageUrl
    });

   try {
        const savedSong = await newSong.save();
        res.json(savedSong);
   } catch (err) {
       res.json('not added new song!!!')
   }
});

router.get('/all', (req, res) => {
    res.send('All songs!');
});

module.exports = router;