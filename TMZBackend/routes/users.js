var express = require("express");
var router = express.Router();
const usersService = require("../services/users.js");

/* GET users listing. */
router.get("/login", function(req, res, next) {
  usersService.validateUser(req.query.username, req.query.password);
});

module.exports = router;
