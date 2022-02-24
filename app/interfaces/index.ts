export interface HandleMadeDb {
  (dbName: string): boolean;
}
export interface WriteFile {
  (pathToDb: string, data?: object | object[] | string[]): boolean;
}
export interface ChoicesProps {
  value: string;
  description?: string;
  name: string;
  disabled?: boolean;
}
export interface SelectConfigProps {
  choices: ChoicesProps[];
  pageSize?: number;
  message?: string;
}
