const fs = require('fs');

let readFile = (path, onReadFileDone) => {
    return fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        }
        onReadFileDone(data);
    });
}

let readFileSync = (path) => {
    return JSON.parse(fs.readFileSync(path, 'utf-8'));
}

let writeFile = (path, writeData, onWriteDataSuccess) => {
    fs.writeFile(path,JSON.stringify(writeData), onWriteDataSuccess);
}

module.exports = {
    readFile,
    writeFile,
    readFileSync
}