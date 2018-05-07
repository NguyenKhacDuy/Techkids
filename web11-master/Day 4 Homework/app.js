const express = require('express');
const path = require('path');
let app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/public/quan_dinh_bio.html'))
});

app.get('/frontendpractice', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/public/lesson1.html'))
});
app.get('/flexbox', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/public/hw3.html'))
});
app.listen(1999, (err) => {
    if (err) { console.log(err) }
    console.log("App is started at port 1999")
});
