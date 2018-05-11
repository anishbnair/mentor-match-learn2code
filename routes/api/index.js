const router = require("express").Router();
const dashboardRoute = require("./dashapi");
const signInRoute = require("./signapi");
//const dashBoardRoute = require("./dashBoardAPI");
const connectRoute = require("./connectAPI");
const resourcesRoute = require("./resourcesAPI");

//router.use("/dashboard", dashBoardRoute);
router.use("/connect", connectRoute);
router.use("/dashboard", dashboardRoute);
router.use("/home", signInRoute);
router.use("/resources", resourcesRoute);

module.exports = router;
