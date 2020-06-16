var express = require('express');
var router = express.Router();
var models = require('../models');
const axios = require('axios').default;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

axios.post('/signup', function(req, res, next) {
  models.users
    .findOrCreate({
      where: {
        Username: req.body.username
      },
      defaults: {
        FirstName: req.body.firstname,
        LastName: req.body.lastname,
        Email: req.body.email,
        Password: req.body.password
      }
    })
    .spread(function(result, created) {
      if (created) {
        res.send('User successfully created');
      } else {
        res.send('This user already exists');
      }
    });
});


module.exports = router;
