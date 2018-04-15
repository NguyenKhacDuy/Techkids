const express = require ("express");
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');

const app = express();

app.use(bodyParser.json({urlEncode: true}));

// mongoose.connect("http://localhost:27017/hotgirl", err => {
//     if (err) console.error(err);
//     else console.log("Connected");
// });

const port = process.env.port || 6969;

app.listen(port, err => {
    if (err) {
        console.error(err);
    }
    else console.log("App run at port 6969");
})