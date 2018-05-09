const router = require("express").Router();
const userRoute = require("./dashapi");
const connectRoute = require("./connectAPI");


router.use("/home", userRoute);

router.use("/connect", connectRoute);


module.exports = router;
