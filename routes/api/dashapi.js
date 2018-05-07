var router = require("express").Router();
 var resourcesController= require('../../controllers/resourcesController');
 var usersController = require('../../controllers/usersController');
var mongoose=require("mongoose");
var Users = require("../../models/Users")




router.route("/").post(usersController.findOne)
// router.route("/").get(usersController.findById)
// router.route("/").post(usersController.create)
// .post(function(req,res){
//   console.log(req.body.idTokenPayload.nickname);
//   res.json("results please");
//   uri = "mongodb://localhost:27017/mentor-match"
//   mongoose.connect(uri, (error)=>{

//     var Newuser = new Users({ name: req.body.idTokenPayload.name,
//       email:req.body.idTokenPayload.nickname+"@gmail.com",
//       picture:req.body.idTokenPayload.picture});
//       Newuser.save((err) =>{
//         if(err) throw err;
//         console.log(Newuser);
//       });
//     console.log("database connected");
//   })

// });


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
