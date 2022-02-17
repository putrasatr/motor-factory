import { HMDB } from "app/index";
import writeFile from "./write-file";
import path from "path";

const handleMadeDb: HMDB = (dbName) => {
  const pathToDb = path.join(__dirname, "../db/", dbName + ".json");
  writeFile(pathToDb);
  return true;
};

export default handleMadeDb;
