const express = require("express");
const router = express.Router();
let weatherData = {};

router.post("/", (req, res) => {
  weatherData = req.body;
  console.log(weatherData + "post");
});

router.get("", (req, res) => {
res.send(weatherData);
console.log(weatherData + "get");
});

module.exports = router;
