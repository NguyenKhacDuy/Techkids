const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const fs = require('./filecontroller');

const mongoose = require('mongoose');
let app = express();



//call out handlebars
//engine tạo ra handlebars
//đằng sau default layout là main vì tên layout là main (tên gì gọi nấy)
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
//handlebars xuất hiện 2 chỗ (2 vị trí này cần tương đồng)
//set để lôi handlebars ra xem
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    try {
        let questionList = [...fs.readFileSync('./data.json')];
        let id = Math.floor(Math.random() * questionList.length);
        console.log(id);
        //method render đầu tiên sẽ chưa tên của cái view mình render ra
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

app.get('/answer', (req, res) => {
    res.render('answer');
});

app.post('/ask', (req, res) => {
    try {
        //making a question list array that reads from data.json
        let questionList = [...fs.readFileSync('./data.json')];
        //making a "id" variable 
        let id = questionList.length + 1;
        //construct newQuestion
        let newQuestion = {
            id: id,
            question: req.body.question
            , yes: 0,
            no: 0
        }
        //push = add trong java
        questionList.push(newQuestion);
        fs.writeFile('./data.json', questionList, (err) => {
            if (err) { console.log(err) }
            //display the question with the correct id
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
        let question = questionList[req.params.id];
        res.render('question', {
            question: question
        });
    }
    catch (ex) {
        console.log(ex);
    }
});

app.post('/answer/:id', (req, res) => {
    try {
        let questionList = [...fs.readFileSync('./data.json')];
        //ba dau bang thi phai dung ve ca content vaf type, hai dau bang khong can giong type
        //req.body sẽ có object và 1 giá trị tương xứng trong đó
        if (req.body.answer == 'yes') {
            questionList[req.params.id - 1].yes += 1;
        } else {
            questionList[req.params.id - 1].no += 1;
        };
        fs.writeFile('./data.json', questionList, (err) => {
            if (err) { console.log(err) }
            res.redirect('/question/' + (req.params.id - 1));
        });
    } catch (err) {
        console.log(err);
    }
});

app.listen(1999, (err) => {
    if (err) { console.log(err) }
    console.log("App is started at port 1999")
}); 
