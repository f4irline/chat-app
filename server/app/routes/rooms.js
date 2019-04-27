const app = module.exports = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/rooms', (req, res) => {
    console.log(req.body);
});

app.get('/rooms', (req, res) => {
    console.log('Get rooms');
});