const lodash = require("lodash");
const fs = require("fs");
const path = require("path");

const { SERVICE_LIST } = require("./service-list");

const TEMPLATE_PATH = path.join(__dirname, "Dockerfile.template");
const stringTemplate = fs.readFileSync(TEMPLATE_PATH, "utf-8");
const templater = (data) => lodash.template(stringTemplate)(data);

const outputFilePathConstructor = (fileName) =>
  path.join(process.cwd(), `Dockerfile.${lodash.kebabCase(fileName)}`);

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

const writeConf = (data) =>
  write(outputFilePathConstructor(data.SERVICE), templater(data));

const main = async () => {
  try {
    await Promise.all(SERVICE_LIST.map(writeConf));

    process.exit(0);
  } catch (error) {
    console.error(("Finished with error: ", error));
    process.exit(1);
  }
};

main();
