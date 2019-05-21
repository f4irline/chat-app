'use strict'

const express       = require('express');
const { Room }      = require('../models');
const bodyParser    = require('body-parser');

module.exports = function (passport) {
    const router = express.Router();

    router.use(bodyParser.json());

    router.post('/rooms', passport.authenticate('jwt', {session: false}), (req, res) => {
        Room.create(req.body).then((room) => {
            res.json(room);
        }).catch((err) => {
            console.log(err);
        })
    });
    
    router.get('/rooms', passport.authenticate('jwt', {session: false}), (req, res) => {
        Room.findAll().then((rooms) => {
            res.json(rooms);
        });
    });

    return router;
}
