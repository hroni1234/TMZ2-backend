const express = require("express");
const router = express.Router();
const securityService = require("../services/securityService");
const badRequestCode = 400;

const sendFromPromise = (promise, res, errCode) =>
  promise
    .then(response => res.send(response))
    .catch(err => res.status(errCode).send(err));

router.get("/dateEvents/:startDate/:endDate", (req, res) =>
  sendFromPromise(
    securityService.eventsByDateRange(req.params.startDate, req.params.endDate),
    res,
    badRequestCode
  )
);

router.get("/events", (req, res) =>
  sendFromPromise(securityService.allEvents(), res, badRequestCode)
);

module.exports = router;
