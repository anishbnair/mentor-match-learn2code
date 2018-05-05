var router = require("express").Router();
var resourcesController= require('../controllers/resourcesController')
var userController = require('../controllers/userController')


router.post("/home",function(req,res){
  console.log(res);
  res.json("results");
})

router.route("/api/dashboard")
  .get(userController.findById)
  .post(userController.create)
  .post(userController.update)


router
  .route("/api/resources")
  .get(.resourcesController.findAll)
  .put(.resourcesController.update)
  .delete(.resourcesController.delete)

module.exports = router;
