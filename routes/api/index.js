const router = require("express").Router();
const userRoute = require("./dashapi");
const signInRoute = require("./signapi");


router.use("/home", userRoute);
router.use("/home", signInRoute);
module.exports = router;
