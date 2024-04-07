// use of var is hoisted to top of function scope
function foo(): void {
  if (true) {
    var bar: number = 0;
  }
  console.log(bar);
}
foo();

// which allows for a variable to be used before it is declared
function foo2(): void {
  bar = 0;
  var bar: number;
  console.log(bar);
}
foo2();

function foo3(): void {
  if (true) {
    const bar: number = 0;
    // bar = 1; // error
  }
  // console.log(bar); // error
}
foo3();
