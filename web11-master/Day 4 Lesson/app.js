// const fs = require('fs');

// fs.readFile

// let dataFromFile = fs.readFileSync('./package.json', 'utf-8')
// console.log(dataFromFile);

// fs.readFile('./package.json', 'utf-8', (error, data) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log(data);
// });

// let dataObjectWriteFile = {
//     a: 5,
//     b: 6,
// };

// fs.writeFile('text.txt', JSON.stringify(dataObjectWriteFile), (err) => {
//     if (err) { console.log(err); }
//     console.log("Write file success!");
// });

// fs.readFile('test.txt', 'utf-8', (error, data) => {
//     if (error) { console.log(error); }
//     console.log("Data:" + JSON.parse(data).a);
// });

// let fs = require('./filecontroller');

// console.log(fs);

// fs.readFile('test.txt', (fileData) => {
//     console.log(fileData);
// });

const express = require('express');
const path = require('path');
let app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/index.html'))
});

app.get('/gift', (req, res) => {
    res.send("9gb Link")
});
app.get('/about', (req, res) => {
    res.send("This is about")
});
app.listen(6869, (err) => {
    if (err) { console.log(err) }
    console.log("Success")
});
