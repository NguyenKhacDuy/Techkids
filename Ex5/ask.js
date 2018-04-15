const express = require('express');
const router = express.Router();
const fileController = require('./fileController');

router.get('/', (req, res) => {
    res.render('ask');
});

router.post('/', (req, res) => {
    let questionList = [...fileController.readFileSync('./data.json')];
    let ID = questionList.length + 1;
    let newQuestion = ({
        id: ID,
        questionContent: req.body.newQuestionContent,
        voteYes: 0,
        voteNo: 0
    });
    questionList.push(newQuestion);
    fileController.writeFile('./data.json', questionList, (err) => {
        if (err) {
            console.log(err);
        }
        res.redirect("/question/" + ID);
    });
});

module.exports = router;