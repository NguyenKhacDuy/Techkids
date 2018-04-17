const express = require("express");
const router = express.Router();

const imageController = require('./controller')

router.post('/', (req, res) => {
    imageController
        .createImage(req.body)
        .then(result => res.send(result))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
})

router.get("/", (req, res) => {
    imageController.getAllImages(req.query.page || 1)
        .then(images => res.send(images))
        .catch(err => {
            console.error(err);
            res.status(500).send(err)
        })
});

router.get("/:id", (req, res) => {
    imageController
        .getImage(req.params.id)
        .then(images => res.send(images))
        .catch(err => {
            console.error(err);
            res.status(500).send(err)
        })
});

router.put('/:id', (req, res) => {
    imageController
        .updateImage(req.params.id, req.body)
        .then(images => res.send(images))
        .catch(err => {
            console.error(err);
            res.status(500).send(err)
        })
});

router.delete('/:id', (req, res) => {
    imageController
        .deleteImage(req.params.id)
        .then(images => res.send(images))
        .catch(err => {
            console.error(err);
            res.status(500).send(err)
        })
});

router.put('/:id/like', (req, res) => {
    imageController
        .likeImage(req.params.id)
        .then(image => res.send(image))
        .catch(err => {
            console.error(err);
            res.status(500).send(err)
        })
});

router.put('/:id/unlike', (req, res) => {
    imageController
        .unlikeImage(req.params.id)
        .then(images => res.send(images))
        .catch(err => {
            console.error(err);
            res.status(500).send(err)
        })
});

router.post("/:id/comments", (req, res) => {
    imageController
        .addComment(req.params.id, req.body)
        .then(id => res.send(id))
        .catch(err => {
            console.error(err);
            res.status(500).send(err)
        })
});

router.delete("/:id/comments/:commentid", (req, res) => {
    imageController
        .deleteComment(req.params.id, req.params.commentid)
        .then(id => res.send(id))
        .catch(err => {
            console.error(err);
            res.status(500).send(err)
        })
})

module.exports = router;