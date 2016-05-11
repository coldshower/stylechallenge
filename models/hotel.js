var Sequelize = require('sequelize');
var db = require('./index');
var Place = require('./place');

var Hotel = db.define('hotel', {
  name: { type: Sequelize.STRING, allowNull: false },
  num_stars: { type: Sequelize.INTEGER },
  amenities: { type: Sequelize.STRING }
  });


Hotel.belongsTo(Place);

module.exports = Hotel;
