'use strict';

var express = require('express');
var Promise = require('bluebird');
var router = express.Router();
var Place = require('../models/place');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
//
// router.get('/', function(req, res, next) {
//   res.render('home');
// });


router.get('/', function (req, res, next) {
  Promise.all([ Hotel.findAll({}),
                Restaurant.findAll({}),
                Activity.findAll({}) ])
  .spread( function(dbHotels,dbRestaurants,dbActivities) {
    res.render('home', {
      templateHotels: dbHotels,
      templateRestaurants: dbRestaurants,
      templateActivities: dbActivities
    });
  })
  .catch(next);
});

module.exports = router;
