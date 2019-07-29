const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const server = app.listen(3000, err => {
    if (err) throw err;
    console.log('started server on port 3000!');
});

const cred = require('./mysql_credentials');
app.get('/entries', (req, res, next) => {
    const { date } = req.query;
    if (!date){
        return res.status(422).send({
            errors: ['No date provided'],
        });
    }
    cred.connect(err => {
        if (err) throw err;
        res.locals.con.query(`SELECT id, entry_type, other_info, finished_at FROM \`baby_entries\` AS b WHERE ${date} == b.date`, (err, result) => {
            if (err) {
                return next();
            }
            res.status(200).send(JSON.stringify({
                "entries": result
            }));
        });
    });
})


app.get('/graph/:week', (req, res, next) => {
    const now = new Date().now();
    const weekAgo = now - 604800;
    const datestampArr = {};
    con.connect(err => {
        if (err) throw err;
        con.query(`SELECT id, entry_type, other_info, finished_at FROM \`baby_entries\`WHERE finished_at BETwEEN FROM_UNIXTIME(${weekAgo}) AND FROM_UNIXTIME(${now})`, function(err, result, fields) {
            if (err) {
                return next();
            }
            result.forEach(element => {
                let formatted = element["finished_at"].slice(11);
                let date = new Date(formatted);
                let day = date.getUTCDate();
                let month = date.getUTCMonth();
                datestampArr.push(month + '' + day);
                })
                datestampArr.sort((a,b) => {
                    return a - b;
                });
            })
    });
});

app.all('*', (err, req, res, next) => {
    res.sendStatus(500);
})