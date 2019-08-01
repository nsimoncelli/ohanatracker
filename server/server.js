const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3001, err => {
    if (err) throw err;
    console.log('started server on port 3001');
});

const timeConvert = require('./functions/time-convert.js');
const formatDate = require('./functions/format-date.js');

const cred = require('../mysql_credentials');
const connection = mysql.createConnection(cred);
connection.connect(err => {
    if (err) throw err;
    console.log('connected to database');
});

app.get('/entries', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { date } = req.query;
    //date = 2019-02-16 15:23:16 -> YYYY-MM-DD HH:mm:ss
    if (!date) {
        return res.status(422).send({
            errors: ['No date provided'],
        });
    }
    const startDate = date.concat(" 00:00:00");
    const endDate = date.concat(" 23:59:59");
    let query = `SELECT id, user_id, baby_id, entry_type, other_info, finished_at 
                FROM \`baby_entries\` WHERE finished_at 
                BETWEEN "${startDate}" AND "${endDate}"`;
    connection.query(query, (err, result) => {
        if (err) return next(err);
        res.status(200).send(JSON.stringify({
            "entries": result
        }));
    });
});

app.get('/graph', async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    const feedingsArr = [0, 0, 0, 0, 0, 0, 0];
    const changesArr = [0, 0, 0, 0, 0, 0, 0];
    const napsArr = [0, 0, 0, 0, 0, 0, 0];
    for (let i = 7; i >= 0; i--) {
        let x = 0;
        let dateBase = (timeConvert("now", i)).slice(0, 9) + ' 00:00:00';
        let dateEnd = dateBase.slice(0, 9) + ' 23:59:59';
        dateBase = dateBase.replace(/  +/g, ' ');
        console.log(dateBase, dateEnd);
        let query = `SELECT COUNT(*), entry_type FROM \`baby_entries\` 
                WHERE finished_at 
                BETWEEN "${dateBase}" AND "${dateEnd}" 
                GROUP BY entry_type`;
        connection.query(query, (err, result) => {
            if (err) return next(err);
            result.forEach(data => {
                console.log(data);
                if (data['entry_type'] === "changes") {
                    changesArr[x] = data['COUNT(*)'];
                    console.log("changes",changesArr[x]);
                } else if (data['entry_type'] === "naps") {
                    napsArr[x] = data['COUNT(*)'];
                    console.log("naps", napsArr[x]);
                } else if (data['entry_type'] === "feedings") {
                    feedingsArr[x] = data['COUNT(*)'];
                    console.log("feedings", feedingsArr[x]);
                }
                x++;
            });
            if (i === 0) {
                res.send(JSON.stringify({
                    "feedings": feedingsArr,
                    "naps": napsArr,
                    "changes": changesArr
                }));
            }
        });
    };
});

app.post('/create/naps', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    const { userId, babyId, otherInfo } = req.query;
    // userId = user_id(db)
    // babyId
    // otherInfo -> {}, changes -> otherInfo = 1/2/3
    //date = same format above post MVP.
    if (!userId || !babyId || !otherInfo) {
        return res.status(422).send({
            "error": ["ensure that userId, babyId, AND otherInfo are all provided.", "if no otherInfo - should be an empty object {}"]
        })
    }
    let datetime;
    (!req.query.date) ? datetime = "now" : datetime = req.query.date;
    const finishedAt = timeConvert(datetime, 0);
    let startedAt;
    (!req.query.startedAt) ? startedAt = null : startedAt = timeConvert(req.query.startedAt);
    const entryType = "naps";
    let query = `INSERT INTO \`baby_entries\` 
                (\`id\`, \`baby_id\`, \`user_id\`,\`started_at\`, \`finished_at\`, \`entry_type\`, \`other_info\`)
                VALUES (NULL, "${babyId}", "${userId}", ${startedAt}, "${finishedAt}", "${entryType}", "${otherInfo}")`;

    connection.query(query, (err, result) => {
        if (err) return next(err);
        const output = {
            success: true,
            data: result
        }
        res.json(output);
    })
});

app.post('/create/changes', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    const { userId, babyId, otherInfo } = req.query;
    console.log(otherInfo);
    if (!userId || !babyId || !otherInfo) {
        return res.status(422).send({
            "error": ["ensure that userId, babyId, AND otherInfo are all provided.", "if no otherInfo - should be an empty object {}"]
        });
    }
    let changeType;
    if (otherInfo == 1) {
        changeType = `{\\"change_type\\": 1}`;
    } else if (otherInfo == 2) {
        changeType = `{\\"change_type\\": 2}`;
    } else if (otherInfo == 3) {
        changeType = '{\\"change_type\\": 3}';
    } else {
        return res.status(422).send({
            "error": ["otherInfo must be 1,2, or 3"]
        });
    }

    let datetime;
    (!req.query.date) ? datetime = "now" : datetime = req.query.date;
    const finishedAt = timeConvert(datetime, 0);
    const entryType = "changes";
    let query = `INSERT INTO \`baby_entries\` 
                (\`id\`, \`baby_id\`, \`user_id\`,\`started_at\`, \`finished_at\`, \`entry_type\`, \`other_info\`)

                VALUES (NULL, "${babyId}", "${userId}", NULL, "${finishedAt}", "${entryType}", "${changeType}")`;

    connection.query(query, (err, result) => {
        if (err) return next(err);
        const output = {
            success: true,
            data: result
        };
        res.json(output);
    })
})

app.post('/create/feedings', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    const { userId, babyId, otherInfo } = req.query;
    if (!userId || !babyId || !otherInfo) {
        return res.status(422).send({
            "error": ["ensure that userId, babyId, AND otherInfo are all provided.", "if no otherInfo - should be an empty object {}"]
        })
    }
    let datetime;
    (!req.query.date) ? datetime = "now" : datetime = req.query.date;
    const finishedAt = timeConvert(datetime, 0);
    const entryType = "feedings";
    console.log(finishedAt);
    let query = `INSERT INTO \`baby_entries\` 
                (\`id\`, \`baby_id\`, \`user_id\`,\`started_at\`, \`finished_at\`, \`entry_type\`, \`other_info\`)
                VALUES (NULL, "${babyId}", "${userId}", NULL, "${finishedAt}", "${entryType}", "${otherInfo}")`;

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
