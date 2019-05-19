'use strict'

const bcrypt = require('bcryptjs');

module.exports = (sequelize, type) => {
    const User = sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userName: {
            type: type.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: type.STRING,
            allowNull: false,
        },
    });

    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

    User.beforeCreate((user) => {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    return User;
};
