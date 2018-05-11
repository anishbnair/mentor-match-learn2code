const router = require("express").Router();
const userRoute = require("./dashapi");
const signInRoute = require("./signapi");
const dashBoardRoute = require("./dashBoardAPI");
const connectRoute = require("./connectAPI");
const devConnectRoute = require("./devConnectAPI");

router.use("/dashboard", dashBoardRoute);

router.use("/connect", connectRoute);
router.use("/developer", devConnectRoute);

router.use("/home", userRoute);
router.use("/home", signInRoute);
module.exports = router;
