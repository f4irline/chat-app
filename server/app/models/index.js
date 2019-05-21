'use strict'

const config        = require('../../config/config');
const Sequelize     = require('sequelize');

const RoomModel     = require('./room');
const MessageModel  = require('./message');
const UserModel     = require ('./user');

let sequelize = undefined;

if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
        logging: false,
    });
} else {
    sequelize = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
        host: config.mysql.host,
        dialect: 'mysql',
        logging: false,
    });    
}

const Room = RoomModel(sequelize, Sequelize);
const Message = MessageModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

Room.hasMany(Message, {as: 'messages'});
Message.belongsTo(Room, {foreignKey: 'roomId', as: 'room'});

sequelize.sync()
    .then(() => {
        Room.findOrCreate({where: {roomName: 'General'}});
        console.log('Database and tables created.');
    });



module.exports = {
    Room,
    Message,
    User
};