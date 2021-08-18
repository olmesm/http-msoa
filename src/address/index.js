const { info } = require("../_common/logger");

module.exports = () => info("address called") || "address";
