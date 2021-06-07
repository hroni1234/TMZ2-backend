var express = require("express");
var router = express.Router();
const usersService = require("../services/users.js");

/* GET users listing. */
router.get("/login", function(req, res, next) {
  usersService
    .validate(req.query.username, req.query.password)
    .then(queryResult => {
      res.send(queryResult);
    })
    .catch(err => res.status(400).send(new Error(err.message)));
});

module.exports = router;