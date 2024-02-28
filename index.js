const moment = require("moment");
const { test: test2 } = require("./template");

module.exports = {
  test: moment().toISOString(),
  test2,
};
