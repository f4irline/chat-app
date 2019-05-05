'use strict'

const config    = require('../../config/config');
const Sequelize = require('sequelize');

const RoomModel = require('./room');

const sequelize = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
    host: config.mysql.host,
    dialect: 'mysql',
});

const Room = RoomModel(sequelize, Sequelize);

sequelize.sync()
    .then(() => {
        console.log('Database and tables created.');
    });

module.exports = {
    Room
};