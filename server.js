const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const server = app.listen(3000, err => {
    if (err) throw err;
    console.log('started server on port 3000!');
});

const cred = require('./mysql_credentials');

app.get('/entries', (req, res, next) => {
    const { date } = req.query;
    if (!date){
        return res.status(422).send({
            errors: ['No date provided'],
        });
    }
    cred.connect(err => {
        if (err) throw err;
        res.locals.con.query(`SELECT * FROM \`baby_entries\` AS b WHERE ${date} == b.date`, (err, result) => {
            if (err) {
                return next();
            }
            res.status(200).send(JSON.stringify({
                "entries": result
            }));
        });
    });
})

app.all('*', (err, req, res, next) => {
    res.sendStatus(500);
})
