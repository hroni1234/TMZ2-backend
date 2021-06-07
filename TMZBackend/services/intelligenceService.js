const intelligenceModel = require("../models/intelligenceModel");

const profileById = async id => await intelligenceModel.profileById(id);

const allProfiles = async () => await intelligenceModel.allProfiles();

const numberOfSuspectsRequested = async () =>
  await intelligenceModel.numberOfSuspectsRequested();

const suspectsRequested = async () =>
  await intelligenceModel.suspectsRequested();

module.exports = {
  profileById,
  allProfiles,
  numberOfSuspectsRequested,
  suspectsRequested
};
