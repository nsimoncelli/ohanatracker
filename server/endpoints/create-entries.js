const timeConvert = require('../functions/time-convert.js');

app.post('/api/create/naps', (req, res, next) => {
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

app.post('/api/create/changes', (req, res, next) => {
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

app.post('/api/create/feedings', (req, res, next) => {
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