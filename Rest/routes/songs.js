const express = require('express');
const router = express.Router();

router.post('/create', async (req, res) => {
    const { songName, artistName, imageUrl, sourceUrl, likes } = req.body;
    //TODO...
});

router.get('/all', (req, res) => {
    //TODO...
});

module.exports = router;