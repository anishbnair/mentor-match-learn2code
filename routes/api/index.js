const router = require("express").Router();
const userRoute = require("./dashapi");
const signInRoute = require("./signapi");
const dashBoardRoute = require("./dashBoardAPI");
const connectRoute = require("./connectAPI");
const devConnectRoute = require("./devConnectAPI");
const resourcesRoute = require("./resourcesAPI");

router.use("/dashboard", dashBoardRoute);
router.use("/connect", connectRoute);
router.use("/developer", devConnectRoute);
router.use("/home", userRoute);
router.use("/home", signInRoute);
router.use("/resources", resourcesRoute);

module.exports = router;
