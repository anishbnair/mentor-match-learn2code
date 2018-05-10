const router = require("express").Router();
const userRoute = require("./dashapi");
<<<<<<< HEAD
const signInRoute = require("./signapi");
=======
const dashBoardRoute = require("./dashBoardAPI");
const connectRoute = require("./connectAPI");
>>>>>>> 877c461db5bec6af86072951a6caf35e0a9a593b

router.use("/dashboard", dashBoardRoute);

router.use("/connect", connectRoute);

router.use("/home", userRoute);
router.use("/home", signInRoute);
module.exports = router;
