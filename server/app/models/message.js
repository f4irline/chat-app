'use strict'

module.exports = (sequelize, type) => {
    return sequelize.define('message', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        msg: type.STRING,
        userName: type.STRING,
        private: type.BOOLEAN
    });
}