import { WFile } from "app/index";
import fs from "fs";

const writeFile: WFile = (pathToDb) => {
  fs.writeFile(
    pathToDb,
    JSON.stringify([], null, 3),
    { encoding: "utf-8" },
    () => {}
  );
  return true;
};

export default writeFile;
