declare interface Set<T>
{

  add(t: T): void;
  
  size(): number;

  toArray(): T[];

  toString(): string;

};