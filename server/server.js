const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const calendar = require('./endpoints/calendar.js');
const entries = require('./endpoints/entries.js');
const graph = require('./endpoints/graph.js');

app.use('/api', calendar);
app.use('/api', entries);
app.use('/api', graph);

app.listen(3001, err => {
    if (err) throw err;
    console.log('started server on port 3001');
});

const cred = require('../mysql_credentials');
const connection = mysql.createConnection(cred);
connection.connect(err => {
    if (err) throw err;
    console.log('connected to database');
});

app.all('*', (err, req, res, next) => {
    res.sendStatus(500);
});