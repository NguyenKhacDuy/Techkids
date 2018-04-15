const express = require('express');
const path = require('path');
const exhbs = require('express-handlebars');
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');

const questionController = require('../controllers/questionController');

router.get('/', (req, res) => {
    try {
        // questionController.findAll((err, questionList) => {
        //     let randomQuestion = questionList[Math.floor(Math.random() * questionList.length)];
        //     res.render('home', {
        //         question: randomQuestion
        //     })
        // })
        questionController.findRandom((err,question) => {
            if (err) 
            console.log(err);
            res.render('home', {
                question: question
            })
        })
    }
    catch (ex) {
        console.log(ex);
    }
});

router.post('/', (req, res) => {
    try {
        // questionController.findAll((err, questionList) => {
        //     let randomQuestion = questionList[Math.floor(Math.random() * questionList.length)];
        //     res.render('home', {
        //         question: randomQuestion
        //     })
        // })
        questionController.findRandom((err,question) => {
            if(err) console.log(err);
            res.send(question);
        })
    }
    catch (ex) {
        console.log(ex);
    }
})

// router.post('/:id', (req, res) => {
//     try {
//         let questionList = [...fileController.readFileSync('./data.json')];
//         if (req.params.answer == 'yes') {
//             questionList[req.params.id - 1].voteYes++;
//         }
//         if (req.params.answer == 'no') {
//             questionList[req.params.id - 1].voteNo++;
//         }
//         fileController.writeFile('./data.json', questionList, (err) => {
//             if (err) {
//                 console.log(err);
//             }
//             res.redirect('/question/' + req.params.id);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// });

module.exports = router;