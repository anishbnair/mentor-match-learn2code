var router = require("express").Router();
var resourcesController= require('../../controllers/resourcesController');
var usersController = require('../../controllers/usersController');
var mongoose=require("mongoose");
var Users = require("../../models/Users")

//Do we actually need to require resourcesController, mongoose, or Users?


router.get(usersController.findAll);


module.exports = router;
