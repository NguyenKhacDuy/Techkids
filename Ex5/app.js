const express = require('express');
const path = require('path');
const exhbs = require('express-handlebars');
const bodyParser = require('body-parser');
const fileController = require('./fileController');
const ask = require('./ask');
const answer = require('./answer');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.engine('handlebars', exhbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

let questionList = [...fileController.readFileSync('data.json')];

app.use('/', answer);
app.use('/ask', ask);

app.listen(1111,(err) =>{
    if (err) {
        console.log(err);
    }
    console.log("App is start at port 1111");
})