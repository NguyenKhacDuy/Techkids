const express = require("express");
const router = express.Router();

const authController = require('./controller')

router.post("/", (req, res) => {
    authController.login(req.body)
    .then(userInfo => {
        //userInfo = {username: user.username, id: user._id}
        req.session.userInfo = userInfo;
        res.send("logged in");
    })
    .catch(err => res.status(err.status).send(err.err));
})

router.delete("/", (req, res) => {
    req.session.destroy();
    res.send("logged out");
});

module.exports = router;