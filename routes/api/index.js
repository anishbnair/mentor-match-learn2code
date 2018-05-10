const router = require("express").Router();
const userRoute = require("./dashapi");
const dashBoardRoute = require("./dashBoardAPI");
const resourcesRoute = require("./resourcesAPI");
const connectRoute = require("./connectAPI");


router.use("/dashboard", dashBoardRoute);

router.use("/resources", resourcesRoute);

router.use("/connect", connectRoute);

router.use("/home", userRoute);

module.exports = router;
