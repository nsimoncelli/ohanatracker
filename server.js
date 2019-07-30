const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const server = app.listen(3001, err => {
    if (err) throw err;
    console.log('started server on port 3001');
});

const cred = require('./mysql_credentials');
const connection = mysql.createConnection(cred);
connection.connect(err => {
    if (err) throw err;
    console.log('connected to database');
});

app.get('/entries', (req, res, next) => {
    const { date } = req.query;
    if (!date){
        return res.status(422).send({
            errors: ['No date provided'],
        });
    }
    const startDate = date.concat(" 00:00:00");
    const endDate = date.concat(" 23:59:59");
    connection.query(`SELECT id, entry_type, other_info, finished_at FROM \`baby_entries\` WHERE finished_at BETWEEN "${startDate}" AND "${endDate}"`, (err, result) => {
        if (err) {
            return next(err);
        }
        res.status(200).send(JSON.stringify({
            "entries": result
        }));
    });
})

const timeConvert = require('./time-convert.js');
const formatDate = require('./format-date.js');
app.get('/graph', (req, res, next) => {
    let current = Date.now();
    const now = (timeConvert(current, 0)) + ' 23:59:59';
    const weekAgo = (timeConvert(current, 7)) + ' 00:00:00';
    const feedingsArr = [0, 0, 0, 0, 0, 0, 0, 0];
    const changesArr = [0, 0, 0, 0, 0, 0, 0, 0];
    const napsArr = [0, 0, 0, 0, 0, 0, 0, 0];
    connection.connect(() => {
        connection.query(`SELECT id, entry_type, other_info, finished_at FROM \`baby_entries\`WHERE finished_at BETWEEN "${weekAgo}" AND "${now}"`, function(err, result, fields) {
            if (err) {
                return next(err);
            }
            result.forEach(data => {
                let entryType = data['entry_type'];
                let baseDate = formatDate(new Date(now));
                let combinedDate = formatDate(new Date(data['finished_at']));
                console.log(baseDate, combinedDate);
                if (entryType) {
                    let x = 7; //difference check between baseDate and combinedDate
                    let i = 0; //position on given arr - starting from 7 days away from base
                    while ( x >=0 ) {
                        if ((baseDate-combinedDate) === x) {
                            switch(entryType) {
                                case "feedings":
                                    feedingsArr[i] += 1;
                                    break;
                                case "naps":
                                    napsArr[i] += 1;
                                    break;
                                case "changes":
                                    changesArr[i] += 1;
                                    break;
                            }
                        }
                    x--;
                    i++;
                    }
                }
            });
        res.send(JSON.stringify({
            "feedings": feedingsArr,
            "naps": napsArr,
            "changes": changesArr
        }));
        });
    });
});

app.all('*', (err, req, res, next) => {
    res.sendStatus(500);
});