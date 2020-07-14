const express = require('express');
const app = express();
const config = require('./config/config');

require('./config/db')();

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(config.port, () => {
    console.log(`Server starting on port ${config.port}...`);
});
