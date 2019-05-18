'use-strict';

const { User } = require('../models');

const createUser = async ({ userName, password }) => { 
    return await User.create({ userName, password });
};

const getAllUsers = async () => {
    return await User.findAll();
};

const getUser = async (obj) => {
    return await User.findOne({
        where: obj,
    });
};

module.exports = {
    createUser,
    getAllUsers,
    getUser,
}