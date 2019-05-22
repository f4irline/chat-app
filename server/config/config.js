const config = {};

/**
 * For MySQL installation (not used currently).
 */
config.mysql = {
    host: process.env.DB_HOST | undefined,
    user: process.env.DB_USER | undefined,
    password: process.env.DB_PASSWORD | undefined,
    database: process.env.DB | undefined,
}

config.port = process.env.PORT;
config.host = process.env.HOST;
config.secret = process.env.APP_SECRET;

module.exports = config;