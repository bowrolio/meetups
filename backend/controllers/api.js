const fileManager = require('../services/fileManager');

const getMeetups = (req, res, next) => {
  fileManager.readFile('./db/meetups.json').then(data => {
    res.json(data);
  });
};

const addMeetup = (req, res, next) => {
  fileManager.appendFile('./db/meetups.json', req.body).then(data => {
    res.json(data);
  });
};

module.exports = {
  getMeetups,
  addMeetup
};
