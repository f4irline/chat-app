'use strict'

const config    = require('../config/config');
const express   = require('express');
const cors      = require('cors');
const routes    = require('./routes');

const app = express();

app.use(cors());

app.use(routes);

app.listen(config.port, config.host, () => {
    console.log(`Listening in: http://${config.host}:${config.port}/api`);
});