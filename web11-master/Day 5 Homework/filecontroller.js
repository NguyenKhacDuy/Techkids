const fs = require('fs');

let readFile = (path, onReadFileDone) => {
    fs.readFileSync(path, 'utf-8', (err, data) => {
        if (err) { console.log(err); }
        onReadFileDone(data);
    });
}

let readFileSync = (path) => {
    return JSON.parse(fs.readFileSync(path, 'utf-8'));
}

let writeFile = (path, writedata, onWriteDataSuccess) => {
    fs.writeFile(path, JSON.stringify(writedata), (err) => {
        if (err) { onWriteDataSuccess(err) }
        //below is a callback
        onWriteDataSuccess(null);
    });
}

module.exports = {
    readFile,
    writeFile,
    readFileSync
}