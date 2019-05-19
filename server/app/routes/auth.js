'use strict'

const app           = module.exports = require('express')();
const UserUtils     = require('./userUtils');
const bodyParser    = require('body-parser');
const jwt           = require('jsonwebtoken');
const config        = require('../../config/config');

const passport      = require('passport');
const passportJWT   = require('passport-jwt');
let ExtractJwt      = passportJWT.ExtractJwt;

let jwtOptions = {};

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = config.secret;

app.use(bodyParser.json());

app.post('/signup', (req, res) => {
    const { userName, password } = req.body;
    UserUtils.createUser({userName, password})
        .then(user => {
            res.json({ user, msg: 'Account created.' });
        }).catch(err => {
            res.status(400).json({ err, msg: 'User with the given name already exists.'});
        });
});

app.post('/login', async (req, res, next) => {
    const { userName, password } = req.body;
    
    if (userName && password) {
        let user = await UserUtils.getUser({ userName });
        if (!user) {
            res.status(401).json({ msg: 'No user found.', user });
        };

        if (user.validPassword(password)) {
            let payload = { id: user.id };
            let token = jwt.sign(payload, jwtOptions.secretOrKey);
            res.json({ msg: 'Logged in succesfully.', token: token });
        } else {
            res.status(401).json({ msg: 'Incorrect password' });
        }    
    }
});

app.get('/profile', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json(req.user);
});
