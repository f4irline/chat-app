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

Room.findOrCreate({where: {roomName: 'General'}})
    .then(([room, created]) => {
        console.log(room.get({
            plain: true
        }));
        console.log(created);
    })

module.exports = {
    Room
};