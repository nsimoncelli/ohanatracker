const express = require('express');
const router = express.Router();

const dateTest = require('../functions/date-test.js');
const timeConvert = require('../functions/time-convert.js');
const connection = require('../db.js');

router.get('/entries', (req, res, next) => {
    const { date } = req.query;
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
        console.log("results before:", result);
        result.forEach(element => {
            element['finished_at'] = timeConvert(element['finished_at'], 0, 8);
        });
        console.log('results:', result);
        res.status(200).send(JSON.stringify({
            "entries": result
        }));
    });
});

router.get('/entries/all', (req, res, next) => {
    let query = `SELECT * FROM \`baby_entries\``;
    connection.query(query, (err, result) => {
        if (err) return next(err);
        res.send(JSON.stringify({
            data: result
        }));
    })
});

module.exports = router;