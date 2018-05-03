var router = require("express").Router();


router.route("/api/dash")
  .get();
  .post();


router
  .route("/:Profile")
  .get()
  .put()
  .delete();

module.exports = router;
