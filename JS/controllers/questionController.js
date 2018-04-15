const questionSchema = require('../models/questionSchema');

let create = (question, callback) =>{
    let newQuestion = {
        questionContent: question
    }
    try {
        questionSchema.create(newQuestion, (err, doc)=> {   
            callback(err, doc);
        });    
    } catch (error) {
        console.log(error);
    }
};

let findRandom = (callback) => {
    try {
        questionSchema.count().exec((err, count)=> {
            if (err) callback(err);
            else {
                questionSchema
                .findOne()
                .skip(Math.floor(Math.random() * questionSchema.length))
                .exec((errRandom, doc) => {
                    callback(errRandom, doc);
                })
            }
        })
    } catch (error) {
        console.log(error);
    }
}

let findAll = (callback) => {
    questionSchema.find({}, (err,data) => {
        callback(err, data);        
    });
}

let findOne = (callback) => {
    questionSchema.findOne((err,data) => {
        callback(err, data);        
    });
}

let count = (callback) => {
    questionSchema.count((err,data) => {
        callback(err, data); 
    })
}

let findById = (id, callback) => {
    questionSchema.findById(id, (err, data) => {
        callback(err, data);
    })
}

let vote = (id, answer, callback) => {
    if (answer == 'yes') {
        questionSchema.findById(id, (data) => {
            questionSchema.findByIdAndUpdate(id, {voteYes: data.voteYes + 1}, (err) => {
                console.log(err);
            })
        })
    }
    if (answer == 'no') {
        questionSchema.findById(id, (data) => {            
            questionSchema.findByIdAndUpdate(id, {voteNo: data.voteNo + 1}, (err) =>{
                console.log(err);
            })
        })
    }
}

/**
 * 
 * @param {string} id id of the question 
 * @param {yes || no} answer yes || no 
 * @param {(err, question) => void} callback call this function after updated question 
 */
let updateQuestion = async (id, answer, callback) => {
    try {
        questionSchema.findById(id, (err, doc) => {
            if (err) 
            console.log(err);
            if(answer == 'yes') {
                doc.voteYes++;
            }
            if (answer ==' no') {
                doc.voteNo++;
            }
            doc.save((err) => {
                callback(err,doc);
            })
        })
    } catch (error) {
        console.log(error);
    }
}

const findPromise = questionSchema.findById(id);
const saveromised = findPromise
    .then(doc => {
        if (answer == 'yes') {
            doc.voteYes ++;
        }
        else {
            doc.voteNo ++;
        }
        return question.save();
        
    })
    .then(doc => {
        updateCompleted(null, question);
    })
    .catch(err => console.log(err))

   
    try {
        const question = await questionSchema.findById(id);
        if ( answer == 'yes'){ 
            question.voteYes ++;
        } else question.voteNo ++
        await question.save()
        updateQuestion(null, question);
    } catch (error) {
        console.log(error);
    }

module.exports = {
    create,
    findOne,
    vote,
    count,
    findById,
    findAll,
    findRandom,
    updateQuestion
}

