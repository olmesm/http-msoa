const { info } = require("../_common/utils/logger");

module.exports = () => info("address called") || "address";
