'use strict'

const app           = module.exports = require('express')();
const { Room }      = require('../models');
const bodyParser    = require('body-parser');

app.use(bodyParser.json());

app.post('/rooms', (req, res) => {
    Room.create(req.body).then((room) => {
        res.json(room);
    }).catch((err) => {
        console.log(err);
    })
});

app.get('/rooms', (req, res) => {
    Room.findAll().then((rooms) => {
        res.json(rooms);
    });
});