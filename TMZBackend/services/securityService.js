const securityModel = require("../models/securityModel");

const eventsByDateRange = async (startDate, endDate)  => await securityModel.eventsByDateRange(startDate, endDate);

const allEvents = async () => await securityModel.allEvents();

module.exports = {
    eventsByDateRange,
    allEvents,
};
