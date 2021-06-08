const express = require("express");
const router = express.Router();
const weatherService = require("../services/weatherService");
const badRequestCode = 400;

const sendFromPromise = (promise, res, errCode) =>
  promise
    .then(response => res.send(response))
    .catch(err => res.status(errCode).send(err));

router.get("/weatherDates", (req, res) =>
  sendFromPromise(weatherService.weatherDates(), res, badRequestCode)
);

module.exports = router;
