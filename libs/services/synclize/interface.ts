export interface Synclize<T = string, K = string | number, V = string> {
  (table_name: T, key: K, value?: V): object[];
}
