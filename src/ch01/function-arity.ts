// Unary function. Useful for function composition
function isNull<T>(a: T | null) {
  return a === null;
}
console.log('isNull', isNull(null) === true);

// Binary function
function add(a: number, b: number) {
  return a + b;
}
console.log('add', add(2, 2) === 4);

// Ternary function
function addMany(...numbers: number[]): number {
  return numbers.reduce((p, c) => p + c, 0);
}
console.log('addMany', addMany(2, 3, 4, 5) === 14);
