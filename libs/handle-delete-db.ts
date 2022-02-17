import { HMDB } from "app/index";
import path from "path";
import deleteFile from "./delete-file";

const handleDeleteDb: HMDB = (dbName) => {
  const pathToDb = path.join(__dirname, "../db/", dbName + ".json");
  deleteFile(pathToDb);
  return true;
};

export default handleDeleteDb;
