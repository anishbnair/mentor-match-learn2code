var router = require("express").Router();
// var resourcesController= require('../../controllers/resourcesController');
// var usersController = require('../../controllers/usersController');
var mongoose=require("mongoose");


router.route("/api/home")
.post(function(req,res){
<<<<<<< HEAD
  console.log("These are the results!  " +JSON.parse(res));
  var uri = "mongodb://localhost:27017/mentor-match"
mongoose.connect(uri, function(error) {
  if (error) throw error;
  console.log(" database connected");

})
res.json(res)
=======
  console.log(res);
  res.json("results");
>>>>>>> parent of 0af80e9... connected route
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
