const express = require("express");
const router = express.Router();
const intelligenceService = require("../services/intelligenceService");
const badRequestCode = 400;

const sendFromPromise = (promise, res,errCode) =>
  promise
    .then(response => res.send(response))
    .catch(err => res.status(errCode).send(err));

router.get("/id/:id", (req, res) =>
  sendFromPromise(intelligenceService.profileById(req.params.id), res,badRequestCode)
);

router.get("/all/profiles", (req,res) =>
  sendFromPromise(intelligenceService.allProfiles(), res,badRequestCode)
);

router.get("/number/suspectsRequested", (req,res) =>
  sendFromPromise(intelligenceService.numberOfSuspectsRequested(), res,badRequestCode)
);

router.get("/all/suspectsRequested", (req, res) =>
  sendFromPromise(intelligenceService.suspectsRequested(), res,badRequestCode)
);

module.exports = router;
