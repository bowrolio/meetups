'use strict';

const fs = require('fs/promises');
const { v4: uuidv4 } = require('uuid');

function readFile(filePath) {
  return fs.readFile(filePath).then((data) => {
    return JSON.parse(data);
  }).catch((error) => {
    console.log('err', error);
  });
}

function appendFile(filePath, newObj) {
  return fs.readFile(filePath).then(data => {
    const obj = JSON.parse(data);
    const uid  = uuidv4();

    const newRes = Object.assign(obj, { [uid]: newObj});

    fs.writeFile(filePath, JSON.stringify(newRes), 'utf8', err => {
      if (err) {
        console.log(`Error writing file: ${err}`)
      } else {
        console.log(`File is written successfully!`)
        return 'success';
      }
    })
  });

}

module.exports = {
  readFile,
  appendFile
};

