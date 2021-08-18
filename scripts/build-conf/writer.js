const lodash = require("lodash");
const fs = require("fs");
const path = require("path");

const mkdirp = (outFile) => {
  fs.mkdirSync(path.dirname(outFile), {
    recursive: true,
  });
};

const write = (outFile, data) => {
  mkdirp(outFile);
  console.log(`Written ${outFile}`);

  return fs.writeFileSync(outFile, data, "utf8");
};

exports.writer = ({ outputFilePathConstructor, templatePath }) => {
  const stringTemplate = fs.readFileSync(templatePath, "utf-8");
  const templater = (data) => lodash.template(stringTemplate)(data);

  const writeConf = (data) =>
    write(outputFilePathConstructor(data.SERVICE), templater(data));

  return (serviceList) => serviceList.map(writeConf);
};
