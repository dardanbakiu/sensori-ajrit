const express = require("express");
const router = express.Router();
const {testFunction} = require("./controller/TestController");
const {login} = require('./controller/LoginController')

router.use("/test", testFunction);
router.post("/login", login);

module.exports = router;