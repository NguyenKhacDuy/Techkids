const questionSchema = require('../models/questionSchema');

let create = (question) =>{
    let newQuestion = {
        questionContent: question
    }
    questionSchema.create(newQuestion);
};

module.exports = {
    create
}