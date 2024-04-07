let bar = 0; // global

(function() {
  let foo: number = 0; // In scope of this function
  bar = 1; // Access global scope
  console.log(bar); // 1
  console.log(foo); // 0
})();

console.log(bar); // 1
// console.log(foo); // Error

class Counter {
  private _i: number;
  /**
   * constructor
   */
  public constructor() {
    this._i = 0;
  }
  /**
   * get
   */
  public get(): number {
    return this._i;
  }
  /**
   * set
   */
  public set(val: number): void {
    this._i = val;
  }
  /**
   * increment
   */
  public increment(): void {
    this._i++;
  }
}

let counter = new Counter();
console.log("counter.get()", counter.get()); // 0
counter.set(2);
console.log("counter.get()", counter.get()); // 2
counter.increment();
console.log("counter.get()", counter.get()); // 3
// console.log(counter._i); // Error: Property '_i' is private
