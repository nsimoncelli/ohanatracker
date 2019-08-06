const express = require('express');
const mysql = require('mysql');
const router = express.Router();

const timeConvert = require('../functions/time-convert.js');
const dateTest = require('../functions/date-test.js');
const cred = require('../../mysql_credentials');

const connection = mysql.createConnection(cred);


router.post('/create/naps', (req, res, next) => {
    const { userId, babyId, otherInfo } = req.query; 
    if (!userId || !babyId || !otherInfo) {
        return res.status(400).send({
            "error": ["ensure that userId, babyId, AND otherInfo are all provided.", "if no otherInfo - should be an empty object {}"]
        })
    }
    const finishedAt = timeConvert("now", 0);
    console.log(finishedAt);
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

router.post('/create/changes', (req, res, next) => {
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

    const finishedAt = timeConvert("now", 0, 0);
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

router.post('/create/feedings', (req, res, next) => {
    const { userId, babyId, otherInfo } = req.query;
    if (!userId || !babyId || !otherInfo) {
        return res.status(400).send({
            "error": ["ensure that userId, babyId, AND otherInfo are all provided.", "if no otherInfo - should be an empty object {}"]
        })
    }
    const finishedAt = timeConvert("now", 0, 0);
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

router.post('/delete', (req, res, next) => {
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

router.post('/update', (req, res, next) => {
    const { id, finishedAt, date, entryType, otherInfo } = req.query;
    if (!id) {
        res.status(400).send({
            errors: ['Please make sure you provided an entry (id) from table baby_entries']
        });
    }
    const startedAt = (req.query.startedAt) ? `"${req.query.startedAt}"` : null;
    if (!dateTest(date) || !dateTest(finishedAt)) {
        finishedAt = timeConvert(finishedAt, 0, 0);
        date = timeConvert(date, 0, 0);
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

module.exports = router;