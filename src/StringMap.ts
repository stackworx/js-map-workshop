interface IStringMap {
  clear(): void;
  delete(key: string): boolean;
  // forEach(
  //   callbackfn: (value: V, key: K, map: Map<K, V>) => void,
  //   thisArg?: any
  // ): void;
  get(key: string): any | undefined;
  has(key: string): boolean;
  set(key: string, value: any): this;
  readonly size: number;
}

function hashCode(key: string): number {
  return 0;
}

export default class StringMap implements IStringMap {
  public size = 0;

  constructor() {}

  clear(): void {
    throw new Error('Method not implemented.');
  }

  delete(key: string): boolean {
    throw new Error('Method not implemented.');
  }

  get(key: string) {
    throw new Error('Method not implemented.');
  }

  has(key: string): boolean {
    throw new Error('Method not implemented.');
  }

  set(key: string, value: any): this {
    throw new Error('Method not implemented.');
  }

  toString() {
    return `Map`;
  }
}
