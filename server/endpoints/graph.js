const express = require('express');
const mysql = require('mysql');
const router = express.Router();

const timeConvert = require('../functions/time-convert.js');
const cred = require('../../mysql_credentials');

const connection = mysql.createConnection(cred);

router.get('/graph/changes', async (req, res, next) => {
    const changesArr = [0, 0, 0, 0, 0, 0, 0];
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

router.get('/graph/feedings', async (req, res, next) => {
    const feedingsArr = [0, 0, 0, 0, 0, 0, 0];
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

router.get('/graph/naps', async (req, res, next) => {
    const napsArr = [0, 0, 0, 0, 0, 0, 0];
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

module.exports = router;