const api = require("../api");
const intelligenceBaseUrl =
  "http://app-api-f-intelscraping2.apps.openforce.openforce.biz";

const profileById = async id =>
  await api.getData(`${intelligenceBaseUrl}/profile/id/${id}`);

const allProfiles = async () =>
  await api.getData(intelligenceBaseUrl + "/profile/all/total");

const numberOfSuspectsRequested = async () =>
  await api.getData(
    intelligenceBaseUrl + "/profile/all/number/suspectsRequested"
  );

const suspectsRequested = async () =>
  await api.getData(intelligenceBaseUrl + "/profile/all/suspectsRequested");

module.exports = {
  profileById,
  allProfiles,
  numberOfSuspectsRequested,
  suspectsRequested
};
