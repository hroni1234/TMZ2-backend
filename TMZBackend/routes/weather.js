const express = require("express");
const router = express.Router();
let weatherData = {};

router.post("/", (req, res) => {
  weatherData = req.body;
  res.send(req.statusCode);
});

router.get("", (req, res) => {
  res.send(weatherData);
});

router.get("/dates", (req, res) => {
  res.send(weatherData.dates);
});

router.get("/weather", (req, res) => {
  res.send(weatherData.temp);
});

module.exports = router;
