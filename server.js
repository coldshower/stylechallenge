var http = require('http');
var server = http.createServer();
var port = 3000;
var Promise = require('bluebird');
var db = require('./models');
var Place = require('./models/place');
var Hotel = require('./models/hotel');
var Restaurant = require('./models/restaurant');
var Activity = require('./models/activity');

server.on('request', require('./app'));

Promise.all([
  Place.sync({}),
  Hotel.sync({}),
  Restaurant.sync({}),
  Activity.sync({})
])
.then(function () {
  server.listen(port, function () {
    console.log('Server is listening on port',port);
  });
});
