import './Map';
import '../lib/Set';
import Utils from '../lib/common';
import Data from './Data';
import ArraySet from '../lib/ArraySet';

export class LocalStorage implements Map {

  private storage: any;

  private table: string;

  private keys: string;

  private MAP_KEY_NAME: string = 'MAP';

  private MAP_KEYS_LIST_NAME: string = 'MAP_KEYS';

  public constructor(table: string) {
    this.storage = window.localStorage;
    this.table = table;
    const mapKeys: string = this.getKeysName();
    if (!this.hasInstance()) {
      this.storage.setItem(mapKeys, '');
    };
  };

  private hasInstance(): boolean {
    let result: boolean = false;
    const mapKeys: string = this.getKeysName();
    const keys: string = this.storage.getItem(mapKeys);
    if (keys) {
      result = true;
    };
    return result;
  };

  private getKey(key: string): string {
    return `${this.MAP_KEY_NAME}-${this.table}-${key}`;
  };

  private getKeysName(): string {
    return `${ this.MAP_KEYS_LIST_NAME }-${ this.table }`;
  };

  private getKeys(): string[] {
    let keys: string = this.storage.getItem(this.getKeysName());
    if (!keys) {
      return [];
    };
    const list: string[] = keys.split(',');
    return list;
  };

  private addKeys(key: string): void {
    if (!key) return;
    let mapKeyList: string[] =  this.getKeys();
    let mapKeySet: Set<any> = new ArraySet(mapKeyList);
    mapKeySet.add(key);
    this.storage.setItem(this.getKeysName(), mapKeySet.toString())
  };

  public async put(key: string, value: any) {
    let result: boolean = true;
    try {
      const keys: string = this.getKey(key);
      const data: Data = new Data(value, false);
      this.storage.setItem(keys, data.toString());
      this.addKeys(key);
    } catch (error) {
      result = false;
    }
    return result;
  };
  
  public async get(key: string) {
    let result: any = '';
    try {
      const keys: string = this.getKey(key);
      result = this.storage.getItem(keys);
      let data: Data = new Data(result, true);
      result = data.getData();
    } catch (error) {};
    return result;
  };

  public async clear() {
    let result: boolean = true;
    try {
      this.storage.clear();
    } catch (error) {
      result = false;
    };
    return result;
  };

  public async remove(key: string) {
    let result: string = '';
    try {
      const keys: string = this.getKey(key);
      let data: Data = new Data(result, true);
      result = data.getData();
      this.storage.removeItem(keys);
    } catch (error) {};
    return result;
  };

}


export default LocalStorage;