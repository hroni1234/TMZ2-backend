const db = require("../db/db");

exports.validate = (username,password) => {
  return db.many(
    `SELECT * FROM ${USERS_SCHEMA}.${USERS_TABLE} WHERE username='${username}' AND password='${password}'`
  );
};
