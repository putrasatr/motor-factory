import fs, { writeFile } from "fs";
import path from "path";
import * as ts from "typescript";

let code = (table_name: string): string => `({
    Run:()=>{
      const fs = require("fs");
      const path = require("path");Î
      class Synclize<S> {
    table_name: string;
    constructor(table_name: string) {
      this.table_name = table_name;
    }
    private getTable(): [] {
      return JSON.parse(
        fs.readFileSync(
          path.resolve(__dirname, "..", "..", "db", this.table_name + ".json"),
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
  interface UserProps {
    id: number;
    username: string;
    role: string;
    email: string;
    password: string;
  }
  const synclize = new Synclize<UserProps>("users");
  console.log(synclize.Select().Where("password", "password").data);
      interface UserProps {
        id: number;
        username: string;
        role: string;
        email: string;
        password: string;
      }
      
      const synclize = new Synclize<UserProps>(${table_name});
      const data = synclize.Select().WhereId(1)
      console.log("YES",data)
      return "success"
    }
  })`;
  
  let result = ts.transpile(code("'users'"));
  let runnalbe: any = eval(result);
  runnalbe.Run();
