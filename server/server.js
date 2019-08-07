const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');

const app = express();
const path = require('path');
const connection = require('./db.js');
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const calendar = require('./endpoints/calendar.js');
const entries = require('./endpoints/entries.js');
const graph = require('./endpoints/graph.js');

app.use('/api', calendar);
app.use('/api', entries);
app.use('/api', graph);

app.listen(PORT, err => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`started server on port ${PORT}`);
});

connection.connect(err => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('connected to database');
});


app.all('*', (err, req, res, next) => {
    console.error(err);
    res.sendStatus(500);
});