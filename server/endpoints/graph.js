const express = require('express');
const router = express.Router();
const connection = require('../db.js');

const timeConvert = require('../functions/time-convert.js');

router.get('/graph/changes', async (req, res, next) => {
    const changesArr = [0, 0, 0, 0, 0, 0, 0];
    let today = timeConvert("now", 0, 0).slice(0, 10);
    let entryType = "changes";
    let query = 'SELECT COUNT(*), dates.date, b.entry_type from \`baby_entries\` as b \
                RIGHT JOIN ( \
                    SELECT ? as date \
                        UNION ALL \
                    SELECT DATE_SUB(?, INTERVAL 1 DAY) as date \
                        UNION ALL \
                    SELECT DATE_SUB(?, INTERVAL 2 DAY) as date \
                        UNION ALL \
                    SELECT DATE_SUB(?, INTERVAL 3 DAY) as date \
                        UNION ALL \
                    SELECT DATE_SUB(?, INTERVAL 4 DAY) as date \
                        UNION ALL \
                    SELECT DATE_SUB(?, INTERVAL 5 DAY) as date \
                        UNION ALL \
                    SELECT DATE_SUB(?, INTERVAL 6 DAY) as date \
                ) as dates ON b.date = dates.date AND b.entry_type = ? \
                GROUP BY b.entry_type, dates.date ORDER BY b.date ASC, b.entry_type ASC';
    let inserts = [today, today, today, today, today, today, today, entryType];
    connection.query( query, inserts, (err, result) => {
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

router.get('/graph/feedings', async (req, res, next) => {
    const feedingsArr = [0, 0, 0, 0, 0, 0, 0];
    let today = timeConvert("now", 0, 0).slice(0, 10);
    let entryType = "feedings";
    let query = 'SELECT COUNT(*), dates.date, b.entry_type from \`baby_entries\` as b \
                RIGHT JOIN ( \
                    SELECT ? as date \
                        UNION ALL \
                    SELECT DATE_SUB(?, INTERVAL 1 DAY) as date \
                        UNION ALL \
                    SELECT DATE_SUB(?, INTERVAL 2 DAY) as date \
                        UNION ALL \
                    SELECT DATE_SUB(?, INTERVAL 3 DAY) as date \
                        UNION ALL \
                    SELECT DATE_SUB(?, INTERVAL 4 DAY) as date \
                        UNION ALL \
                    SELECT DATE_SUB(?, INTERVAL 5 DAY) as date \
                        UNION ALL \
                    SELECT DATE_SUB(?, INTERVAL 6 DAY) as date \
                ) as dates ON b.date = dates.date AND b.entry_type = ? \
                GROUP BY b.entry_type, dates.date ORDER BY b.date ASC, b.entry_type ASC';
    let inserts = [today, today, today, today, today, today, today, entryType];
    connection.query( query, inserts, (err, result) => {
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

router.get('/graph/naps', async (req, res, next) => {
    const napsArr = [0, 0, 0, 0, 0, 0, 0];
    let today = timeConvert("now", 0, 0).slice(0, 10);
    let entryType = "naps";
    let query = 'SELECT COUNT(*), dates.date, b.entry_type from \`baby_entries\` as b \
                RIGHT JOIN ( \
                    SELECT ? as date \
                        UNION ALL \
                    SELECT DATE_SUB(?, INTERVAL 1 DAY) as date \
                        UNION ALL \
                    SELECT DATE_SUB(?, INTERVAL 2 DAY) as date \
                        UNION ALL \
                    SELECT DATE_SUB(?, INTERVAL 3 DAY) as date \
                        UNION ALL \
                    SELECT DATE_SUB(?, INTERVAL 4 DAY) as date \
                        UNION ALL \
                    SELECT DATE_SUB(?, INTERVAL 5 DAY) as date \
                        UNION ALL \
                    SELECT DATE_SUB(?, INTERVAL 6 DAY) as date \
                ) as dates ON b.date = dates.date AND b.entry_type = ? \
                GROUP BY b.entry_type, dates.date ORDER BY b.date ASC, b.entry_type ASC';
    let inserts = [today, today, today, today, today, today, today, entryType];
    connection.query( query, inserts, (err, result) => {
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


module.exports = router;