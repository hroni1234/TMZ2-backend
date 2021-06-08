const weatherModel = require("../models/weatherModel");

const weatherDates = async ()  => await weatherModel.weatherDates();

module.exports = {
    weatherDates
};
