const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roundModel = new Schema({
    scores : [{type: Number, default: 0}]
    },
    { timestamps: true }
);

const gameModel = new Schema({
    players: {type: [{type: String, required: true}], required : true},
    rounds: { type: [roundModel], default: [] }
},
    { timestamps: true }
);



module.exports = mongoose.model("game", gameModel);