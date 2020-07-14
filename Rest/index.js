const express = require('express');
const app = express();
const config = require('./config/config');
const songRoute = require('./routes/songs');

app.use('/all', songRoute);

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(config.port, () => {
    console.log(`Server starting on port ${config.port}...`);
});

require('./config/db')();