const express = require('express');
const app = express();
const server = app.listen(3000, function() {
    console.log('started server on port 3000!');
});

app.get('/', function(req, res) {
    res.send('Hello World!');
})