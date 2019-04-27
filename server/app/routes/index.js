'use strict'

const app   = module.exports = require('express')();

app.get('/api', (req, res) => {
    res.send({msg: 'Server is up and running.'});
});

app.use('/api', require('./rooms'));