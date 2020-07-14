const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3001,
        dbUrl: 'mongodb://localhost:27017/spotify',
    }
}

module.exports = config[env];