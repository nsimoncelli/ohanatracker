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
const dateTest = require('./functions/date-test.js');

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
        return res.status(400).send({
            errors: ['No date provided'],
        });
    }
    if (!dateTest(date)) {
        return res.status(400).send({
            errors: ["date must be in the following format YYYY-MM-DD"]
        })
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

app.get('/entries/all', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    let query = `SELECT * FROM \`baby_entries\``;
    connection.query(query, (err, result) => {
        if (err) return next(err);
        res.send(JSON.stringify({
            data: result
        }));
    })
});

app.get('/graph/changes', async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    const changesArr = [0, 0, 0, 0, 0, 0, 0];
// look up cross joins to get this down to 1 query
    let today = timeConvert("now", 0).slice(0, 11);
    let entryType = "changes";
        let query = `SELECT COUNT(*),
                        dates.date,
                        b.entry_type
                    from \`baby_entries\` as b
                    RIGHT JOIN (
                        SELECT "${today}" as date
                            UNION ALL
                        SELECT DATE_SUB("${today}", INTERVAL 1 DAY) as date
                            UNION ALL
                        SELECT DATE_SUB("${today}", INTERVAL 2 DAY) as date
                            UNION ALL
                        SELECT DATE_SUB("${today}", INTERVAL 3 DAY) as date
                            UNION ALL
                        SELECT DATE_SUB("${today}", INTERVAL 4 DAY) as date
                            UNION ALL
                        SELECT DATE_SUB("${today}", INTERVAL 5 DAY) as date
                            UNION ALL
                        SELECT DATE_SUB("${today}", INTERVAL 6 DAY) as date
                    ) as dates ON b.date = dates.date AND b.entry_type = "${entryType}"
                    GROUP BY b.entry_type, dates.date
                    ORDER BY b.date ASC, b.entry_type ASC`;
        connection.query( query, (err, result) => {
            if (err) return next(err);
            let i = 0;
            result.forEach(res => {
                if(res["entry_type"] === null) {
                    changesArr[i] = 0;
                    i++;
                } else {
                    changesArr[i] = res["COUNT(*)"];
                    i++;
                }
            })
            res.json({
                "changes": changesArr
            })
        });
});

app.get('/graph/feedings', async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    const feedingsArr = [0, 0, 0, 0, 0, 0, 0];
// look up cross joins to get this down to 1 query
    let today = timeConvert("now", 0).slice(0, 11);
    let entryType = "feedings";
        let query = `SELECT COUNT(*),
                        dates.date,
                        b.entry_type
                    from \`baby_entries\` as b
                    RIGHT JOIN (
                        SELECT "${today}" as date
                            UNION ALL
                        SELECT DATE_SUB("${today}", INTERVAL 1 DAY) as date
                            UNION ALL
                        SELECT DATE_SUB("${today}", INTERVAL 2 DAY) as date
                            UNION ALL
                        SELECT DATE_SUB("${today}", INTERVAL 3 DAY) as date
                            UNION ALL
                        SELECT DATE_SUB("${today}", INTERVAL 4 DAY) as date
                            UNION ALL
                        SELECT DATE_SUB("${today}", INTERVAL 5 DAY) as date
                            UNION ALL
                        SELECT DATE_SUB("${today}", INTERVAL 6 DAY) as date
                    ) as dates ON b.date = dates.date AND b.entry_type = "${entryType}"
                    GROUP BY b.entry_type, dates.date
                    ORDER BY b.date ASC, b.entry_type ASC`;
        connection.query( query, (err, result) => {
            if (err) return next(err);
            let i = 0;
            result.forEach(res => {
                if(res["entry_type"] === null) {
                    feedingsArr[i] = 0;
                    i++;
                } else {
                    feedingsArr[i] = res["COUNT(*)"];
                    i++;
                }
            })
            res.json({
                "feedings": feedingsArr
            })
        });
});
app.get('/graph/naps', async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    const napsArr = [0, 0, 0, 0, 0, 0, 0];
// look up cross joins to get this down to 1 query
    let today = timeConvert("now", 0).slice(0, 11);
    let entryType = "naps";
        let query = `SELECT COUNT(*),
                        dates.date,
                        b.entry_type
                    from \`baby_entries\` as b
                    RIGHT JOIN (
                        SELECT "${today}" as date
                            UNION ALL
                        SELECT DATE_SUB("${today}", INTERVAL 1 DAY) as date
                            UNION ALL
                        SELECT DATE_SUB("${today}", INTERVAL 2 DAY) as date
                            UNION ALL
                        SELECT DATE_SUB("${today}", INTERVAL 3 DAY) as date
                            UNION ALL
                        SELECT DATE_SUB("${today}", INTERVAL 4 DAY) as date
                            UNION ALL
                        SELECT DATE_SUB("${today}", INTERVAL 5 DAY) as date
                            UNION ALL
                        SELECT DATE_SUB("${today}", INTERVAL 6 DAY) as date
                    ) as dates ON b.date = dates.date AND b.entry_type = "${entryType}"
                    GROUP BY b.entry_type, dates.date
                    ORDER BY b.date ASC, b.entry_type ASC`;
        connection.query( query, (err, result) => {
            if (err) return next(err);
            let i = 0;
            result.forEach(res => {
                if(res["entry_type"] === null) {
                    napsArr[i] = 0;
                    i++;
                } else {
                    napsArr[i] = res["COUNT(*)"];
                    i++;
                }
            })
            res.json({
                "naps": napsArr
            })
        });
});
app.post('/create/naps', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    const { userId, babyId, otherInfo } = req.query;
        // userId = user_id(db)
        // babyId
        // otherInfo -> {}, changes -> otherInfo = 1/2/3
        //date = same format above post MVP.    
    if (!userId || !babyId || !otherInfo) {
        return res.status(400).send({
            "error": ["ensure that userId, babyId, AND otherInfo are all provided.", "if no otherInfo - should be an empty object {}"]
        })
    }

    const finishedAt = timeConvert("now", 0);
    const date = finishedAt.slice(0,11);
    const startedAt = (req.query.startedAt) ? `"${req.query.startedAt}"` : null;
    const entryType = "naps";
    let query = `INSERT INTO \`baby_entries\` 
                ( \`baby_id\`, \`user_id\`,\`started_at\`, \`finished_at\`, \`date\`, \`entry_type\`, \`other_info\`)
                VALUES ("${babyId}", "${userId}", ${startedAt}, "${finishedAt}", "${date}", "${entryType}", "${otherInfo}")`;
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
    if (!userId || !babyId || !otherInfo) {
        return res.status(400).send({
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

    const finishedAt = timeConvert("now", 0);
    const date = finishedAt.slice(0,11);
    const entryType = "changes";
    let query = `INSERT INTO \`baby_entries\` 
                (\`id\`, \`baby_id\`, \`user_id\`,\`started_at\`, \`finished_at\`, \`date\`, \`entry_type\`, \`other_info\`)

                VALUES (NULL, "${babyId}", "${userId}", NULL, "${finishedAt}", "${date}", "${entryType}", "${changeType}")`;

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
        return res.status(400).send({
            "error": ["ensure that userId, babyId, AND otherInfo are all provided.", "if no otherInfo - should be an empty object {}"]
        })
    }
    const finishedAt = timeConvert("now", 0);
    const date = finishedAt.slice(0,11);
    const entryType = "feedings";
    let query = `INSERT INTO \`baby_entries\` 
                (\`id\`, \`baby_id\`, \`user_id\`,\`started_at\`, \`finished_at\`, \`date\`, \`entry_type\`, \`other_info\`)
                VALUES (NULL, "${babyId}", "${userId}", NULL, "${finishedAt}", "${date}", "${entryType}", "${otherInfo}")`;

    connection.query(query, (err, result) => {
        if (err) return next(err);
        const output = {
            success: true,
            data: result
        }
        res.json(output);
    })
});

app.post('/delete', (req, res, next) => {
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

app.post('/update', (req, res, next) => {
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
