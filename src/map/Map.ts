declare interface Map {

  put(key: string, value: any): Promise<boolean>;

  put(key: string, value: any): void;

  get(key: string): Promise<any>;

  clear(): Promise<boolean>;

  remove(key: string): Promise<any>;

};
