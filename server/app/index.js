'use strict'

const config    = require('../config/config');
const express   = require('express');
const cors      = require('cors');
const routes    = require('./routes');

const app = express();
const server = app.listen(config.port, config.host, () => {
    console.log(`Listening in: http://${config.host}:${config.port}/api`);
});

const io = require('socket.io')(server);
require('./wss')(io);

app.use(cors());

app.use(routes);
