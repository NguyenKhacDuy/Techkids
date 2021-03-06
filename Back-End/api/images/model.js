const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentModel = new Schema({
    createdBy: { type: String },
    content: { type: String, required: true},
    active: { type: Boolean, default: true }
},
    { timestamps: true }
)

const imageModel = new Schema({
    imageUrl: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, default: '' },
    createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true }, //khi co user: type: Schema.types.ObjectId
    view: { type: Number, default: 0 },
    like: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
    comment: { type: [commentModel], default: [] }
},
    { timestamps: true }
);



module.exports = mongoose.model("images", imageModel);