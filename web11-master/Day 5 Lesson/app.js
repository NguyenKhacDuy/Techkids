const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const fs = require('./filecontroller');

const mongoose = require('mongoose');
let app = express();



//call out handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    try {
        let questionList = [...fs.readFileSync('./data.json')];
        let id = Math.floor(Math.random() * questionList.length);
        //show cai UI ra
        console.log(questionList);
        res.render('home', {
            question: questionList[id]
        });
    }
    catch (ex) {
        console.log(ex);
    }
});

app.get('/ask', (req, res) => {
    res.render('ask');
});

app.post('/ask', (req, res) => {
    try {
        let questionList = [...fs.readFileSync('./data.json')];
        let id = questionList.length + 1;
        let newQuestion = {
            id: id,
            question: req.body.question
            , yes: 0,
            no: 0
        }
        questionList.push(newQuestion);
        fs.writeFile('./data.json', questionList, (err) => {
            if (err) { console.log(err) }
            res.redirect('/question/' + id);
        });
    }
    catch (ex) {
        console.log(ex);
    }
});

app.get('/question/:id', (req, res) => {
    try {
        let questionList = [...fs.readFileSync('./data.json')];
        let question = questionList[req.params.id - 1];
        res.render('question', {
            question: question.question
        });
    }
    catch (ex) {
        console.log(ex);
    }
});

app.post('/answer/:id', (req, res) => {
    let questionList = [...fs.readFileSync('./data.json')];
    if (req.body.answer == 'yes') {
        questionList[req.param.id - 1].yes += 1;
    } else {
        questionList[req.param.id - 1].no += 1;
    };
    fs.writeFile('./data.json', questionList, (err) => {
        if (err) { console.log(err) }
        res.redirect('/question/' + id);
    });
});

app.listen(1999, (err) => {
    if (err) { console.log(err) }
    console.log("App is started at port 1999")
}); 
