// Note - no log, only intentional loggging permitted

exports.info = (info) => {
  console.info("> info", info);
};

exports.error = (error) => {
  console.error("> error", error);
};

exports.debug = (debug) => {
  console.debug("> debug", debug);
};
