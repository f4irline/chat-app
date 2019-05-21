'use strict'

const express       = require('express');
const UserUtils     = require('./userUtils');
const bodyParser    = require('body-parser');
const jwt           = require('jsonwebtoken');

const handlers      = require('../wss/handlers');
const helpers       = handlers.helpers();

module.exports = function(passport, jwtOptions) {
    const router = express.Router();

    router.use(bodyParser.json());

    router.post('/signup', (req, res) => {
        const { userName, password } = req.body;
        UserUtils.createUser({userName, password})
            .then(user => {
                res.json({ user, msg: 'Account created.' });
            }).catch(err => {
                res.status(400).json({ err, msg: 'User with the given name already exists.'});
            });
    });

    router.post('/login', async (req, res, next) => {
        const { userName, password } = req.body;
        
        if (userName && password) {
            let user = await UserUtils.getUser({ userName });
            if (!user) {
                res.status(401).json({ msg: 'No user found.', user });
                return;
            };

            if (helpers.userExists(userName)) {
                res.status(401).json({ msg: 'User already logged in.' });
                return;
            }

            if (user.validPassword(password)) {
                let payload = { id: user.id };
                let token = jwt.sign(payload, jwtOptions.secretOrKey);
                res.json({ msg: 'Logged in succesfully.', token: token });
            } else {
                res.status(401).json({ msg: 'Incorrect password.' });
            }    
        }
    });

    router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res) => {
        res.json(req.user);
    });

    return router;
}

