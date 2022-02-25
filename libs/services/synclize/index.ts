import fs from "fs";
import path from "path";
import ts from "typescript";
import { Synclize } from "./interface";

const synclize: Synclize = (table_name, key, value) => {
  let interfaces = "interface TableProps {\n";
  let resultString = "synclize";
  if (value) {
    resultString += `.Select().Where("${key}", "${value}")`;
  } else resultString += `.Select().WhereId(${key})`;
  const data = fs.readFileSync(
    path.resolve(__dirname, "..", "..", "..", "db/configs/table.json"),
    "utf-8"
  );
  const dataParsed = JSON.parse(data);
  const { columns } = dataParsed[table_name];
  for (const key in columns)
    interfaces = interfaces + `   ${key}: ${columns[key]};\n`;

  let code: string = `({
      fetch:()=>{
        const fs = require("fs");
        const path = require("path");
        class Synclize<S> {
      table_name: string;
      constructor(table_name: string) {
        this.table_name = table_name;
      }
      private getTable(): [] {
        return JSON.parse(
          fs.readFileSync(
            path.resolve(__dirname, "..", "..","..", "db", this.table_name + ".json"),
            "utf-8"
          )
        ).data;
      }
      Select() {
        return this;
      }
      WhereId(id: number) {
        const result = this.getTable().filter(
          (item: any) => Number(item.id) === id
        );
        return result;
      }
      Where(key: keyof S, value: any) {
        const result = this.getTable().filter((item: any) => item[key] === value);
        return { ...this, data: result };
      }
    }
    ${interfaces + "}"}
        const synclize = new Synclize<UserProps>("${table_name}");
        const data = ${resultString}
        return data
      }
    })`;

  let result = ts.transpile(code);
  let runnalbe: any = eval(result);
  console.log(runnalbe.fetch());
  return runnalbe.fetch();
};
synclize("accessories", 1);
export default synclize;
