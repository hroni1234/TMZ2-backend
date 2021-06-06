const cn = `${process.env.DB}://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.USERS_SCHEMA}.${process.env.USERS_TABLE}`;

var pgp = require("pg-promise")();
var db = pgp(cn);

module.exports = db;
