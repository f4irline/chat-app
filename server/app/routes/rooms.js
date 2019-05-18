'use strict'

const app           = module.exports = require('express')();
const { Room }      = require('../models');
const bodyParser    = require('body-parser');

const passport      = require('passport');

app.use(bodyParser.json());

app.post('/rooms', passport.authenticate('jwt', {session: false}), (req, res) => {
    Room.create(req.body).then((room) => {
        res.json(room);
    }).catch((err) => {
        console.log(err);
    })
});

app.get('/rooms', passport.authenticate('jwt', {session: false}), (req, res) => {
    Room.findAll().then((rooms) => {
        res.json(rooms);
    });
});