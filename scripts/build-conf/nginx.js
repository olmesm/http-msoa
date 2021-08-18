const lodash = require("lodash");
const path = require("path");

const { writer } = require("./writer");
const { SERVICE_LIST } = require("./service-list");

const templatePath = path.join(__dirname, "server.conf.template");
const outputFilePathConstructor = (fileName) =>
  path.join(process.cwd(), "conf.d", `${lodash.kebabCase(fileName)}.conf`);

const main = () => {
  try {
    SERVICE_LIST.map(writer({ outputFilePathConstructor, templatePath }));

    process.exit(0);
  } catch (error) {
    console.error(("Finished with error: ", error));
    process.exit(1);
  }
};

main();
