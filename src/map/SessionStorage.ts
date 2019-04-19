import Storage from './Storage';

export class SessionStorage extends Storage implements Map {

  public constructor(...args: any[]) {
    super(...args);
    this.setStorage(window.sessionStorage);
  };

}

export default SessionStorage;