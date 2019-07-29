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
    const startDate = date + " 00:00:00.000000"
    const endDate = date + " 23:59:59.999999"
    cred.connect(err => {
        if (err) throw err;
        res.locals.con.query(`SELECT id, entry_type, other_info, finished_at FROM \`baby_entries\` AS b WHERE finished_at BETWEEN ${startDate} AND ${endDate}`, (err, result) => {
            if (err) {
                return next();
            }
            res.status(200).send(JSON.stringify({
                "entries": result
            }));
        });
    });
})

const timeConvert = require('./time-convert');
app.get('/graph/:week', (req, res, next) => {
    const now = (timeConvert(new Date().now(), 0)) + ' 23:59:59.999999';
    const weekAgo = (timeConvert(new Date().now(), 7)) + ' 00:00:00.000000';
    
    const datestampObj = {};
    con.connect(err => {
        if (err) throw err;
        con.query(`SELECT id, entry_type, other_info, finished_at FROM \`baby_entries\`WHERE finished_at BETwEEN ${weekAgo} AND ${now}`, function(err, result, fields) {
            if (err) {
                return next();
            }
            result.forEach(element => {
                let formatted = element["finished_at"].slice(11);
                let entryType = element['entry_type'];
                let date = new Date(formatted);
                let day = date.getUTCDate();
                let month = date.getUTCMonth();
                let combined = month + '' + day;
                datestampObj.entryType = combined;
                })
                datestampObj.sort((a,b) => {
                    return a - b;
                });
            })
    });
});

app.all('*', (err, req, res, next) => {
    res.sendStatus(500);
})