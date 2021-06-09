const express = require("express");
const router = express.Router();
let weatherData = {};

router.post("", (req, res) => {
  weatherData = req.body;
});

router.get("", (req, res) => {
res.send(weatherData);
});

module.exports = router;
