const router = require("express").Router();
const userRoute = require("./dashapi");
const signInRoute = require("./signapi");
const connectRoute = require("./connectAPI");

router.use("/home", userRoute);
router.use("/home", signInRoute);
router.use("/connect", connectRoute);

module.exports = router;
