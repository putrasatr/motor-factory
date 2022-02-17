export interface HandleMadeDb {
  (dbName: string): boolean;
}
export interface WriteFile {
  (pathToDb: string): boolean;
}
