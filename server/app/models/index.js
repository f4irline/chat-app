const config = require('../../config/config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
    host: config.mysql.host,
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => {
        console.log('Connected');
    })
    .catch((err) => {
        console.log(err);
    })

module.exports = sequelize;