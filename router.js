const express = require("express");
const router = express.Router();
const {testFunction} = require("./controller/TestController");
const {login} = require('./controller/LoginController')
const {airQuality, chartData} = require('./controller/AirQualityController')

router.use("/test", testFunction);
router.post("/login", login);
router.post("/airQuality", airQuality);
router.get('/chartDailyDate', chartData)

module.exports = router;