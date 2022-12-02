const express = require('express'); //import express
const router  = express.Router();

const apiController = require('../controllers/api');

router.get('/v1/meetups', apiController.getMeetups);
router.post('/v1/meetup', apiController.addMeetup);

module.exports = router;
