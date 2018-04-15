const express = require('express');
const path = require('path');
const exhbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const homeRouter = require('./router/homeRouter');
const askRouter = require('./router/askRouter');
const answerRouter = require('./router/answerRouter');
const questionRouter = require('./router/questionRouter');

mongoose.connect('mongodb://localhost/quyetdedb', (err) => {
    if (err) console.log(err);
    console.log("connected");   
})

let app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.engine('handlebars', exhbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('filePublic'));
app.use(express.static('controllers'));

app.use('/',homeRouter);
app.use('/ask',askRouter);
app.use('/answer',answerRouter);
app.use('/question', questionRouter);

// app.get('/', (req, res) => {
//     try {
//         let questionList = [...fileController.readFileSync('./data.json')];
//         let question = questionList.length
//         res.render ('home', {
//             question: question.questionContent
//         })
//     }
//     catch (ex){
//     }
// });

// app.post('/ask', (req, res) => {
//     let questionList = [...fileController.readFileSync('./data.json')]; // cu phap ES6
//     let id = questionList.length + 1;
//     let newQuestion = ({
//         id: id,
//         questionContent: req.body.Question
//     });
//     questionList.push(newQuestion); 
//     fileController.writeFile('./data.json', questionList, (err) => {
//         if(err) {
//             console.log(err);
//         }
//         res.redirect('/question/' + id);
//     });
// });

// app.get('/question/:id', (req, res) => {
//     let questionList= [...fileController.readFileSync('./data.json')];
//     let question = questionList[req.params.id - 1]
//     res.render('question', {
//         question: question
//     });
// });


// app.get('/', (req, res) => {
//     res.render('home');
// });

// app.post('/answer/:id', (req, res) => {
//     let questionList = [...fileController.readFileSync('./data.json')];
//     if (req.body.answer == 'yes') {
//         questionList[req.params.id - 1].yes += 1;
//     }else {
//         questionList[req.params.id - 1].no += 1;
//     }

//     fileController.writeFile('./data.json', questionList, (err) => {
//         if(err) {
//             console.log(err);
//         }
//         res.redirect('/question/' + id);
//     });
// });



// app.get('/', (req, res) => {
//     res.send("It's fisrt time I do this");
// });

// app.get('/flexbox', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './filePublic/notHelloWorld.html'));
// });

// app.get('/frontendpractice', (req, res) => {
//     // res.sendFile(__dirname + '/filePublic/helloworld.html' );
//     res.sendFile(path.resolve(__dirname, './filePublic/helloworld.html'));
// });

app.listen(6996, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("App is start at port 6996");
});