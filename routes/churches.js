var express = require('express');
var router = express.Router();
var models = require('../models');
var authService = require('../services/auth');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

  router.post('/addchurch', function(req, res, next) {
      models.churches
        .findOrCreate({
            where: {
                Name: req.body.name,
                Description: req.body.description,
                Mailing_One: req.body.mailing_one,
                Mailing_Two: req.body.mailing_two,
                City: req.body.city,
                State: req.body.state,
                PostalCode: req.body.postalcode,
                Denomination: req.body.denomination,
                Web_URL: req.body.web_url
            }
        })
        .spread(function(result, created) {
            if (created) {
                res.send('Church successfully added');
            } else {
                res.send('This church already exists');
            }
        });
  });

  module.exports = router;