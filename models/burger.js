var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

// Creates a "burger" model that matches up with DB
var burgers = sequelize.define("burger", {
  burger_name: {
    type: Sequelize.STRING
  },
  devoured: {
    type: Sequelize.BOOLEAN
  },
  createdAt: {
    type: Sequelize.DATE
  }
}, {
  timestamps: true
});

// Syncs with DB
burgers.sync();


module.exports = burgers;

