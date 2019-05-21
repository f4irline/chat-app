'use strict'

const express = require('express');

module.exports = function(passport, jwtOptions) {
    const router = express.Router();

    router.get('/api', (req, res) => {
        res.send({msg: 'Server is up and running.'});
    });
    
    router.use('/api', require('./rooms')(passport));
    router.use('/api', require('./auth')(passport, jwtOptions));    

    return router;
}
