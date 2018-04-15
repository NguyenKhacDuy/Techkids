const express = require('express');
const path = require('path');
const exhbs = require('express-handlebars');
const bodyParser = require('body-parser');
const router = express.Router();

const questionController = require('../controllers/questionController');

router.get('/:id', (req, res) => {
    try {       
        let id = req.params.id;
        questionController.findById(id, (err, question) => {
            if(err) console.log(err);
            res.render('question', {
                question: question,
                totalVotes: question.voteYes + question.voteNo,
                percentYes: ((question.voteYes*100) / (question.voteNo + question.voteYes)).toFixed(2),
                percentNo: ((question.voteNo*100) / (question.voteNo + question.voteYes)).toFixed(2),
            });
        });
        
    } catch (error) {
        console.log(error);
    }
});


// router.get('/:id', (req, res) => {
//     let questionList = [...fileController.readFileSync('./data.json')];
//     let id = req.params.id - 1;
//     console.log(questionList[id]);
//     res.render('question', {     
//             id: id,
//             question: questionList[id].questionContent,
//             voteYes: questionList[id].voteYes,
//             voteNo: questionList[id].voteNo
//     });
// });

module.exports = router;