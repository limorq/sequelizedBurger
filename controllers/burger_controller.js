var express = require("express");
var router = express.Router();
var burg = require("../models/burger.js");

router.get("/", function(req, res) {
  burg.findAll({}).then(function(data) {
    console.log(data);
  var hbsObject = { burgers: data };
  res.render("index", hbsObject);
  });

});

router.post("/", function(req, res) {
  burg.create({
    burger_name: req.body.burger_name, 
    devoured: false,
  }).then(function(result) {
    res.redirect("/");
  });
});

router.put("/", function(req, res) {
  burg.update({devoured: true}, {where: {id:req.body.id}}).then(function(result) {
    res.redirect("/");
  });
});

module.exports = router;