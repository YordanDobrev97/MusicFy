const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config/config');
const songRoute = require('./routes/songs');

app.use(bodyParser.json());

app.use('/song', songRoute);

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(config.port, () => {
    console.log(`Server starting on port ${config.port}...`);
});

require('./config/db')();