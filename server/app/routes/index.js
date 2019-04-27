const app = module.exports = require('express')();
const Room = require('../models/room');

app.get('/api', (req, res) => {
    res.send({msg: 'Server is up and running.'});
});

app.use('/api', require('./rooms'));