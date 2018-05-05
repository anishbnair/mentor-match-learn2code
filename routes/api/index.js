const router = require('express').Router();
const userroute =require("./dashapi");

router.use("/home", userroute);


module.exports = router;
