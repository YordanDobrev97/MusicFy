const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config/config');
const songRoute = require('./routes/songs');
const userRoute = require('./routes/user');

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/song', songRoute);
app.use('/register', userRoute);

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(config.port, () => {
    console.log(`Server starting on port ${config.port}...`);
});

require('./config/db')();