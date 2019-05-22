'use-strict';

const { User } = require('../models');

const createUser = async ({ userName, password }) => { 
    return await User.create({ userName, password });
};

const getUser = async (obj) => {
    return await User.findOne({
        where: obj,
    });
};

const getUserById = async (id) => {
    return await User.findOne({
        where: {
            id: id
        }
    });
}

module.exports = {
    createUser,
    getUser,
    getUserById,
}