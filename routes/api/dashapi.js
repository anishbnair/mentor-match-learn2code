var router = require("express").Router();
 var resourcesController= require('../../controllers/resourcesController');
 var usersController = require('../../controllers/usersController');
var mongoose=require("mongoose");
var Users = require("../../models/Users")


router.route("/")
.post(function(req,res){
  console.log(req.body.idTokenPayload.nickname);
  res.json("results");
  uri = "mongodb://localhost/mentor-match"
  mongoose.connect(uri, (error)=>{

    var Newuser = new Users({ name: req.body.idTokenPayload,
      email:req.body.idTokenPayload.nickname+"@gmail.com",
      picture:req.body.idTokenPayload.picture});
      Newuser.save((err,Users) =>{
        console.log(Users);
      });
    console.log("database connected");
  })

});


// , function(req,res){
  // uri = "mongodb://localhost/mentor-match"
  // // console.log(req.body);
  // console.log(req.body.idTokenPayload.name);
  // console.log(req.body. idTokenPayload.nickname+"@gmail.com");
  // console.log(req.body.idTokenPayload.picture);
  //
  // mongoose.connect(uri, (error)=>{
  //   var User = new Users({ name: req.body.idTokenPayload})
  //   console.log("database connected")
  // })
  // // console.log(res);
  // res.json("results");

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