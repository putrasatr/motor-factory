import path from "path";
import writeFile from "../write-file";

const argv = process.argv;
const command = argv[2];
const tableName = argv[3];

const getCommandAction = () => {
  switch (command) {
    case "create-table":
      createTable();
      break;
    case "create-user":
    default:
      return console.log(`The ${command} not found`);
  }
};

const createTable = () => {
  if (!tableName) return console.log("Please input the table name");
  const pathToFile = path.join(
    __dirname,
    "..",
    "..",
    "db",
    tableName + ".json"
  );
  writeFile(pathToFile);
};
const createUser = () => {
  
};
getCommandAction();
