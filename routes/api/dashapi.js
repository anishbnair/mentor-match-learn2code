var router = require("express").Router();
// var resourcesController= require('../controllers/resourcesController');
//  var userController = require('../controllers/userController');


router.route("/")
.post(function(req,res){
  console.log("These are the results!  " +res);
  res.json("results");
});

// router.route("/api/dashboard")
//   .get(userController.findById)
//   .post(userController.create)
//   .post(userController.update)
//
//
// router
//   .route("/api/resources")
//   .get(resourcesController.findAll)
//   .put(resourcesController.update)
//   .delete(resourcesController.delete)

module.exports = router;
