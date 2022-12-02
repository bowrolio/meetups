const fileManager = require("../services/fileManager");

const getMeetups = (req, res, next) => {
  fileManager.readFile("./db/meetups.json").then((data) => {
    return res.json(data);
  });
};

const addMeetup = (req, res, next) => {
  fileManager.appendFile("./db/meetups.json", req.body).then((data) => {
    return res.json(data);
  });
};

const deleteMeetup = (req, res, next) => {
  const id = req.body.id;
  fileManager.remove("./db/meetups.json", id).then((data) => {
    return res.json(data);
  });
};

module.exports = {
  getMeetups,
  addMeetup,
  deleteMeetup,
};
