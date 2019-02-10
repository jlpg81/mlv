
var mongoose = require('mongoose');
var usersjs = require('../models/users')

  var 	ctrl 	= {};

  /*======================================
            RENDERS REGISTRY
    ======================================*/
  
  ctrl.home = function(req, res) {
      res.render("register");
  };
  
  module.exports = ctrl;
  