const express = require('express');
const path = require('path');
const exhbs = require('express-handlebars');
const bodyParser = require('body-parser');
const router = express.Router();

const questionController = require('../controllers/questionController');

router.get('/', (req, res) => {
    res.render('asks');
})
router.post('/', (req, res) => {
        questionController.create(req.body.question, function(err, question) {
            if(err) 
            console.log(err);
            res.redirect('/question/' + question._id);
        });
    });
module.exports = router;