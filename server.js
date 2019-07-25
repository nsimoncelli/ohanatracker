const express = require('express');
const app = express();
const server = app.listen(3000, function() {
    console.log('started server on port 3000!');
});

app.get('/', function(req, res) {
    res.send('Hello World!');
})
/*
************* using moment library **************
const moment = require('moment');
moment().format("YYYY-MM-DD HH:mm:ss");

const now = moment(); //"2019-07-25 16:24:13:698"
const weekAgo = now.subtract(7, 'days'); //""2019-07-18 16:24:24.508""
console.log(moment(weekAgo));
console.log(moment(now));
*/

/* 
************** Graph query endpoint notes **************
- seconds per week: 604,800
- seconds per day: 86,400
************** code **************

const now = new Date().now();
const weekAgo = now - 604,800;
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "519ohana"
});

const datestampArr = [];
con.connect(err => {
    if (err) throw err;
    con.query("SELECT * FROM `baby_entries`
    WHERE finished_at BETwEEN FROM_UNIXTIME(weekAgo) AND FROM_UNIXTIME(now)", function(err, result, fields) {
        if (err) throw err;
        result.forEach(element => {
            let formatted = element["finished_at"].slice(11);
            let date = new Date(formatted);
            let day = date.getUTCDate();
            let month = date.getUTCMonth();
            datestampArr.push(month + '' + day);
            }
        })
    });
})

datestampArr.sort((a,b) => {
    return a - b;
});

for (let i = 0; )
************** end **************
*/

