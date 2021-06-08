const express = require("express");
const router = express.Router();
const weatherDatesService = requrie("../services/weatherDatesService.js")
const badRequestCode = 400;

const sendFromPromise = (promise, res, errCode) =>
  promise
    .then(response => res.send(response))
    .catch(err => res.status(errCode).send(err));


module.exports = router;
