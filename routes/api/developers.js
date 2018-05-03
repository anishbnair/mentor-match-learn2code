var router = require("express").Router();
var testcontrollers =require("../controllers/testcontrollers")


router.route("/api/dash")
  .get(testcontrollers.runwithit);
  .post();


router
  .route("/:Profile")
  .get()
  .put()
  .delete();

module.exports = router;
