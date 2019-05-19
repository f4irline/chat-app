const config = {};

config.mysql = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
}

config.port = process.env.PORT;
config.host = process.env.HOST;
config.secret = process.env.APP_SECRET;

module.exports = config;