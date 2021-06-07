const dbVariables = require("../dbVariablesPod.json");
const cn = `${dbVariables.DB}://${dbVariables.DB_USERNAME}:${dbVariables.DB_PASSWORD}@${dbVariables.DB_HOST}:${dbVariables.DB_PORT}/${dbVariables.USERS_DB}`;

var pgp = require("pg-promise")();
var db = pgp(cn);

module.exports = db;
