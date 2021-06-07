const axios = require("axios");

exports.getData = async url =>
  axios.get(url).then(
    res => res.data,
    err => new Error(err.message)
  );
