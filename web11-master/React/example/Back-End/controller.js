const imageModel = require('./model');

const createGame = ({ players }) =>
    new Promise((resolve, reject) => {
        imageModel.create({
            players,
            rounds: [{
                scores: [0, 0, 0, 0]
            }]
        })
            .then(data => resolve({ id: data._id }))
            .catch(err => reject(err))
    });

const getGame = id => new Promise((resolve, reject) => {
    imageModel.findOne({
        _id: id
    })
        .select("_id players rounds")
        .populate("players", "rounds")
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err))
});

const updateGame = (id, { rounds }) =>
    new Promise((resolve, reject) => {
        imageModel.update({
            _id: id
        }, {
                rounds
            })
            .then(data => resolve({ id: data._id }))
            .catch(err => reject(err))
    });

const addRound = (gameId, round) =>
    new Promise((resolve, reject) => {
        imageModel.update(
            {
                _id: gameId
            },
            {
                $push: {
                    rounds: round
                }
            }
        )
            .then(data => resolve(data))
            .catch(err => reject(err));
    });

module.exports = {
    createGame,
    updateGame,
    getGame,
    addRound
}
