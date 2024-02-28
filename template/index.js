const moment = require("moment");

module.exports = {
  test: moment().add(1, "day").toISOString(),
};
