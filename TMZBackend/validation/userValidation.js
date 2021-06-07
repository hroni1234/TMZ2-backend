const db = require("../db/db");
const dbVariables = require("../dbVariablesPod.json");

exports.validate = async (username,password) => {
  return await db.one(
    `SELECT * FROM ${dbVariables.USERS_SCHEMA}.${dbVariables.USERS_TABLE} WHERE username='${username}' AND pwd='${password}'`
  );
};
