'use strict'

module.exports = (sequelize, type) => {
    return sequelize.define('room', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        roomName: {
            type: type.STRING,
            unique: true,
        },
    });
}