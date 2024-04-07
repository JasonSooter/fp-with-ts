// optional parameters
function addWithOptional(foo: number, bar: number, foobar?: number): number {
  let result = foo + bar;
  if (foobar !== undefined) {
    result += foobar;
  }
  return result;
}

// console.log(addWithOptional()); // Error, expected 3 arguments, but received 0
console.log(addWithOptional(2, 2)); // OK, returns 4
console.log(addWithOptional(2, 2, 2)); // OK, returns 6

// default parameters
function addWithDefault(foo: number, bar: number, foobar: number = 0): number {
  return foo + bar + foobar;
}

// console.log(addWithDefault()); // Error, expected 3 arguments, but received 0
console.log(addWithDefault(2, 2)); // OK, returns 4
console.log(addWithDefault(2, 2, 2)); // OK, returns 6

// rest parameters
function addWithRest(...foo: number[]): number {
  return foo.reduce((a, b) => a + b, 0);
}

console.log(addWithRest()); // OK, returns 0
console.log(addWithRest(2)); // OK, returns 2
console.log(addWithRest(2, 2)); // OK, returns 4
console.log(addWithRest(2, 2, 2)); // OK, returns 6
console.log(addWithRest(2, 2, 2, 2)); // OK, returns 8

function addWithArray(foo: number[]): number {
  return foo.reduce((a, b) => a + b, 0);
}

console.log(addWithArray([])); // OK, returns 0
console.log(addWithArray([2])); // OK, returns 2
console.log(addWithArray([2, 2])); // OK, returns 4
console.log(addWithArray([2, 2, 2])); // OK, returns 6
console.log(addWithArray([2, 2, 2, 2])); // OK, returns 8
