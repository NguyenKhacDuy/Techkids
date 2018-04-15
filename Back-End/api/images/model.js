const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageModel = new Schema({
    imangeUrl: {type: String, required: true},
    title: {type: String, required: true},
    description: {type:String,default: ''},
    createdBy: {type: String, required: true}, //khi co user: type: Schema.types.ObjectId
    view: {type: Number, default: 0},
    like: {type:Number, default: 0},
    active: {type: boolean, default: true},
    comment: {type: [commentModel], default: []}
},
    {timestamps: true}
);

const commentModel = new Schema({
    createdBy: {type: String}
},
    {timestamps: true}
)

module.exports = mongoose.model("images", imageModel);