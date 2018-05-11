const router = require("express").Router();
const dashboardRoute = require("./dashapi");
const signInRoute = require("./signapi");
const connectRoute = require("./connectAPI");
const devConnectRoute = require("./devConnectAPI");
const resourcesRoute = require("./resourcesAPI");
const userPreference = require("./userPreferenceapi");


router.use("/connect", connectRoute);
router.use("/dashboard", dashboardRoute);
router.use("/developer", devConnectRoute);
// router.use("/home", userRoute);
router.use("/home", signInRoute);
router.use("/resources", resourcesRoute);
router.use("/dashboard", userPreference); 



module.exports = router;