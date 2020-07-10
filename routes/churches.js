var express = require('express');
var router = express.Router();
var models = require('../models');


router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

  router.get('/churchlist', async(req, res, next) =>{
    try {
        const listofchurches = await models.churches.findAll();
        res.json(listofchurches);
    } catch (error) {
        next(error);
    }
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
                Web_URL: req.body.web_url,
                Latitude: req.body.latitude,
                Longitude: req.body.longitude
                
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