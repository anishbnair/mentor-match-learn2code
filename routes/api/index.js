const router = require("express").Router();
const userRoute = require("./dashapi");
const dashBoardRoute = require("./dashBoardAPI");
const connectRoute = require("./connectAPI");

router.use("/dashboard", dashBoardRoute);

router.use("/connect", connectRoute);

router.use("/home", userRoute);

module.exports = router;
