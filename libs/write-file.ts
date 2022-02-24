import { WFile } from "app/index";
import fs from "fs";

const writeFile: WFile = (pathToDb, data) => {
  fs.writeFile(
    pathToDb,
    JSON.stringify(data, null, 3),
    { encoding: "utf-8" },
    () => {}
  );
  return true;
};

export default writeFile;
