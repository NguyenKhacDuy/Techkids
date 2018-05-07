const fs = require('fs');

let readFile = (path, onReadFileDone) => {
    fs.readFileSync(path, 'utf-8', (err, data) => {
        if (err) { console.log(err); }
        onReadFileDone(data);
    });
}

let writeFile = (path, writedata, onWriteDataSuccess) => {
    fs.writeFile(path, writedata, (err) => {
        if (err) { console.log(err) }
        //below is a callback
        onWriteDataSuccess("Success");
    });
}

module.exports = {
    readFile,
    writeFile
}