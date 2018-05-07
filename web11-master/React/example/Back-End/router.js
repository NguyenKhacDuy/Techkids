const express = require("express");
const router = express.Router();

const controller = require('./controller')

router.post('/', (req, res) => {
    // req.body.id = req.session.userInfo.id;
    controller
        .createGame(req.body)
        .then(result => res.send(result))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
})

router.get("/:id", (req, res) => {
    controller
        .getGame(req.params.id)
        .then(game => res.send(game))
        .catch(err => {
            console.error(err);
            res.status(500).send(err)
        })
});

router.put('/:id', (req, res) => {
    controller
        .updateGame(req.params.id, req.body)
        .then(game => res.send(game))
        .catch(err => {
            console.error(err);
            res.status(500).send(err)
        })
});

module.exports = router;