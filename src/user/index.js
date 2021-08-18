const { info } = require("../_common/logger");

module.exports = () => info("user called") || "user";
