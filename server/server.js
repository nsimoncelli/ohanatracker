const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

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


app.post('/api/delete', (req, res, next) => {
    const { id } = req.query;
    let query = `DELETE FROM \`baby_entries\` 
                    WHERE \`baby_entries\`.\`id\` = ${id}`
    connection.query(query, (err, result) => {
        if (err) return next(err);
        const output = {
            success: true,
            data: result
        }
        res.json(output);
    })
});

app.post('/api/update', (req, res, next) => {
    const { id, finishedAt, date, entryType, otherInfo } = req.query;
    if (!id) {
        res.status(400).send({
            errors: ['Please make sure you provided an entry (id) from table baby_entries']
        });
    }
    const startedAt = (req.query.startedAt) ? `"${req.query.startedAt}"` : null;
    if (!dateTest(date) || !dateTest(finishedAt)) {
        finishedAt = timeConvert(finishedAt);
        date = timeConvert(date);
        if (!dateTest(date) || !dateTest(finishedAt)) {
            res.status(400).send({
                errors: ["date must be in the following format YYYY-MM-DD"]
            });
        }
    }
    if (entryType === "changes") {
        if (otherInfo == 1) {
            changeType = `{\\"change_type\\": 1}`;
        } else if (otherInfo == 2) {
            changeType = `{\\"change_type\\": 2}`;
        } else if (otherInfo == 3) {
            changeType = '{\\"change_type\\": 3}';
        } else {
            res.status(400).send({
                errors: ['Please make sure that otherInfo is 1,2, or 3']
            })
        }
    }
    if (!entryType || !otherInfo) {
        res.status(400).send({
            errors: ["Please make sure you provided both the entryType and otherInfo"]
        });
    } 
    let query = `UPDATE \`baby_entries\`
                SET started_at = ${startedAt}, 
                    finished_at = "${finishedAt}", 
                    date = "${date}", 
                    entry_type = "${entryType}", 
                    other_info = "${otherInfo}" 
                WHERE baby_entries.id = ${id}`;
    connection.query(query, (err, result) => {
        if (err) return next(err);
        const output = {
            success: true,
            data: result
        };
        res.json(output);
    })
});

app.all('*', (err, req, res, next) => {
    res.sendStatus(500);
});
