const router = require("express").Router();
const userRoute = require("./dashapi");


router.use("/home", userRoute);

module.exports = router;
