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
    let query = `SELECT id, entry_type, other_info, finished_at 
                FROM \`baby_entries\` WHERE finished_at 
                BETWEEN "${startDate}" AND "${endDate}"`;
    connection.query(query, (err, result) => {
        if (err) return next(err);
        res.status(200).send(JSON.stringify({
            "entries": result
        }));
    });
})

const timeConvert = require('./time-convert.js');
const formatDate = require('./format-date.js');
app.get('/graph', (req, res, next) => {
    let current = Date.now();
    const now = (timeConvert(current, 0)).slice(11) + ' 23:59:59';
    const weekAgo = (timeConvert(current, 7)).slice(11) + ' 00:00:00';
    const feedingsArr = [0, 0, 0, 0, 0, 0, 0, 0];
    const changesArr = [0, 0, 0, 0, 0, 0, 0, 0];
    const napsArr = [0, 0, 0, 0, 0, 0, 0, 0];
    let query = `SELECT id, entry_type, other_info, finished_at 
                    FROM \`baby_entries\`WHERE finished_at 
                    BETwEEN "${weekAgo}" AND "${now}"`;
    connection.query(query, (err, result) => {
        if (err) return next(err);
        result.forEach(data => {
            let entryType = data['entry_type'];
            let baseDate = formatDate(new Date(now));
            let combinedDate = formatDate(new Date(data['finished_at']));
            console.log(baseDate, combinedDate);
            if (entryType) {
                let x = 7; 
                let i = 0;
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

app.post('/create/naps', (req, res, next) => {
    const { userId, babyId, otherInfo } = req.query;
    if (!userId || !babyId || !otherInfo) {
        return res.status(422).send({
            "error": ["ensure that userId, babyId, AND otherInfo are all provided.", "if no otherInfo - should be an empty object {}"]
        })
    }
    let datetime;
    (!req.query.date) ? datetime = new Date.now() : datetime = req.query.date;
    const finishedAt = timeConvert(datetime);
    const entryType = "naps"

    let query = `INSERT INTO \`baby_entries\` 
                    (baby_id, user_id, finished_at, entry_type, other_info)
                    VALUES (${babyId}, ${userId}, ${finishedAt}, ${entryType}), ${otherInfo})`;
    
    connection.query(query, (err, result) => {
        if (err) return next(err);
        const output = {
            success: true,
            data: result
        }
        res.json(output);
    })
});

app.all('*', (err, req, res, next) => {
    res.sendStatus(500);
});