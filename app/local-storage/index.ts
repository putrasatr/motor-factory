import writeFile from "../../libs/write-file";
import DBLocalStorage from "../../db/local_storage.json";
import path from "path";

export class LocalStorage {
  constructor() {}
  private pathToLocaleStorage = path.resolve(
    __dirname,
    "..",
    "..",
    "db/local_storage.json"
  );
  get(key: string) {
    return DBLocalStorage[key];
  }
  set(key: string, value: any) {
    const newData = { ...DBLocalStorage, [key]: value };
    writeFile(this.pathToLocaleStorage, newData);
  }
  remove(key?: string) {
    delete DBLocalStorage[key];
    const newData = DBLocalStorage;
    writeFile(this.pathToLocaleStorage, key ? newData : {});
  }
}
const localStorage = new LocalStorage();

export default localStorage;
