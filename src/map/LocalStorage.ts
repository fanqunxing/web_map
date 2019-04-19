import Storage from './Storage';

export class LocalStorage extends Storage implements Map {

  public constructor(...args: any[]) {
    super(...args);
    this.setStorage(window.localStorage);
  };

}


export default LocalStorage;