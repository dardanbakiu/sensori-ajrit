const express = require("express");
const router = express.Router();
const {testFunction} = require("./controller/TestController");

router.use("/test", testFunction);

module.exports = router;