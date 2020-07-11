const express = require('express');
const router = express.Router();
const models = require('../models');
const db = require('../db'); //Brings in the index.js file in the db folder


router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

//Route to grab all churches from the DB and list them as markers on the map

  router.get('/churchlist', async(req, res, next) =>{
    try {
        const listofchurches = await models.churches.findAll();
        res.json(listofchurches);
    } catch (error) {
        next(error);
    }
});

// Search Route to query churches in mySQL DB

router.get('/search', async(req, res, next) => {
    try {
        let results = await db.all();
        res.json(results);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }

   });

// Route to add churches into the DB

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
                Longitude: req.body.longitude,
                Latitude: req.body.latitude
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