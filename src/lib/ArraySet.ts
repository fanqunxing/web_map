import './Set';
import Utils from './common';

class ArraySet<T> implements Set<T> {

  private arr: Array<T> = [];

  private length: number = 0;

  public constructor(...args: T[]) {
    let map: any = new Object();
    if (args.length === 1) {
      const arr: any = args[0];
      const set: any[] = Utils.uniq(arr);
      this.arr = set;
      this.length = set.length;
    }
  };

  public add(t: T): void {
    if (this.arr.indexOf(t) === -1) {
      this.length++;
      this.arr.push(t);
    };
  };

  public size(): number {
    return this.length;
  };

  public toArray(): T[] {
    return [].concat(this.arr);
  };

  public toString(): string {
    return this.arr.toString();
  };
}

export default ArraySet;
