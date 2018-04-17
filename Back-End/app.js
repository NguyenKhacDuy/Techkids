const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const imageRouter = require('./api/images/route');
const userRouter = require('./api/users/route');

mongoose.connect("mongodb://localhost:27017/hotgirl", err => {
    if (err) console.error(err);
    else console.log("Connected");
});

app.use('/api/images', imageRouter);
app.use('/api/users', userRouter);

const port = process.env.port || 6969;

app.listen(port, err => {
    if (err) {
        console.error(err);
    }
    else console.log("App run at port 6969");
})