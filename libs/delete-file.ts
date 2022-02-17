import { WFile } from "app/index";
import fs from "fs";

const deleteFile: WFile = (pathToDb) => {
  fs.unlink(pathToDb, () => {});
  return true;
};

export default deleteFile;
