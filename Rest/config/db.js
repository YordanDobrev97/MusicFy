const mongoose = require('mongoose');
const config = require('./config');

module.exports = () =>{
    return mongoose.connect(
        config.dbUrl, 
        { useUnifiedTopology: true, useNewUrlParser: true }, 
        () => { console.log('Connected to mongoose');}
    );
}