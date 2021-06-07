const express = require("express");
const router = express.Router();
const intelligenceService = require("../services/intelligenceService");

const sendFromPromise = (promise, res) =>
  promise
    .then(response => res.send(response))
    .catch(err => res.status(400).send(err));

router.get("/id/:id", (req, res) =>
  sendFromPromise(intelligenceService.profileById(req.params.id), res)
);

router.get("/all/profiles", (req,res) =>
  sendFromPromise(intelligenceService.allProfiles(), res)
);

router.get("/number/suspectsRequested", (req,res) =>
  sendFromPromise(intelligenceService.numberOfSuspectsRequested(), res)
);

router.get("/all/suspectsRequested", (req, res) =>
  sendFromPromise(intelligenceService.suspectsRequested(), res)
);

module.exports = router;
