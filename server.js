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

app.get('/getDateData', (req, res) => {
    const date = req.query.date;
    cred.connect(err => {
        if (err) throw err;
        res.locals.con.query(`SELECT * FROM \`baby_entries\` AS b WHERE ${date} == b.date`, (err, result) => {
            if (err) throw err;
            res.send(JSON.stringify({
                "status": 200, 
                "error": null,
                "response": result
            }));
        });
    });
})

