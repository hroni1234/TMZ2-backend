const api = require("../api");
const securityBaseUrl =
  "http://tmz-2-backend-git-tmzapp2.apps.openforce.openforce.biz";

  const weatherDates = async () =>
  await api.getData(`/weatherDates`);

module.exports = {
    weatherDates
};
