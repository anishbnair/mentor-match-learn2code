var router = require("express").Router();
 var resourcesController= require('../../controllers/resourcesController');
 var usersController = require('../../controllers/usersController');
var mongoose=require("mongoose");
var Users = require("../../models/Users")




router.route("/").post(usersController.findOne)


module.exports = router;