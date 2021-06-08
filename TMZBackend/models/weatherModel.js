const api = require("../api");
const securityBaseUrl =
  "19.00.4:30000/2";

  const weatherDates = async () =>
  await api.getData(`${securityBaseUrl}/weatherDates`);

module.exports = {
    weatherDates
};
