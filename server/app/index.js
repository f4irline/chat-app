const config = require('../config/config');
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const routes = require('./routes');

mysql.createConnection(config.mysql);

const app = express();

app.use(cors());

app.use(routes);

app.listen(config.port, config.host, () => {
    console.log(`Listening in: http://${config.host}:${config.port}/api`);
});