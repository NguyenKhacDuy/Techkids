const express = require('express');
const router = express.Router();
const fileController = require('./fileController');

router.get('/', (req, res) => {
    let questionList = [...fileController.readFileSync('./data.json')];
    if ( questionList.length == 0) {
        res.send("Question Empty");
    }
    else{
        let ID = Math.floor(Math.random() * (questionList.length + 1))
        id = ID;
        question = questionList.questionContent;
        yes = questionList.yes;
        no = questionList.no;

        res.render('home', {
            id: id,
            questionContent: question,
            voteYes: yes,
            voteNo: no
        });
    }
});

router.get('/question/:id', (req, res) => {
    let questionList = [...fileController.readFileSync('./data.json')];
    let id = req.params.id - 1;
    console.log(questionList[id]);
    res.render('questionInfo', {     
            id: id,
            question: questionList[id].questionContent,
            voteYes: questionList[id].voteYes,
            voteNo: questionList[id].voteNo
    });
});

// router.get('/:id/:bool', (req, res) =>{
//     let id = req.params.id;
//     let bool = req.params.boolean;
//     let questionList = [...fileController.readFileSync('./data.json')];
//      if ( bool === 'yes') {
//         questionList[id].voteYes++;
//      } else questionList[id].voteNo++;
//      fileController.writeFile('./data.json', questionList, (err) => {
//          if (err) console.log("vote error");
//          res.redirect('/answer/info/' + id);
//      });
// });

module.exports = router;