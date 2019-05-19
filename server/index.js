'use strict'
require('dotenv').config();

// Basic express configuration
const config    = require('./config/config');
const express   = require('express');
const cors      = require('cors');
const routes    = require('./app/routes');

const UserUtils = require('./app/routes/userUtils');

// Passport and auth utils
const passport      = require('passport');
const passportJWT   = require('passport-jwt');
let ExtractJwt      = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = config.secret;

passport.use(new JwtStrategy(jwtOptions, (jwt_payload, next) => {
    return UserUtils.getUserById(jwt_payload.id)
        .then(user => {
            return next(null, user);
        })
        .catch(err => {
            return next(err);
        });
}));

const app = express();

const server = app.listen(config.port, config.host, () => {
    console.log(`Listening in: http://${config.host}:${config.port}/api`);
});

const io = require('socket.io')(server);
require('./app/wss')(io);

app.use(cors());

app.use(routes);

app.use(passport.initialize());