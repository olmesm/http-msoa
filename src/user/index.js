const { info } = require("../_common/utils/logger");

module.exports = () => info("user called") || "user";
