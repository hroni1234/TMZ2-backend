const api = require("../api");
const securityBaseUrl =
  "http://police-server-securityapp2.apps.openforce.openforce.biz/de";

  const eventsByDateRange = async (startDate, endDate) =>
  await api.getData(`${securityBaseUrl}/dateEvents/${startDate}/${endDate}`);

const allEvents = async () =>
  await api.getData(securityBaseUrl + "/events");

module.exports = {
    eventsByDateRange,
    allEvents
};
