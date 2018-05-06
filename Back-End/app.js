const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const config = require('./config-local.json');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(session ({
    secret: config.sessionSecret,
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure: config.secureCookie,
        maxAge: 12 *60 *60 *1000}
}))

const imageRouter = require('./api/images/route');
const userRouter = require('./api/users/route');
const authRouter = require('./api/auth/router');

mongoose.connect(config.mongoPath, err => {
    if (err) console.error(err);
    else console.log("Connected");
});

app.use('/api/images', imageRouter);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);


const port = process.env.port || 6969;

app.listen(port, err => {
    if (err) {
        console.error(err);
    }
    else console.log("App run at port 6969");
})