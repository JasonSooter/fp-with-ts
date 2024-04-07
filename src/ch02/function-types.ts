// OK
// console.log(greetNamed('John'));

// Error due to being used before available
// console.log(greetUnnamed('John'));

/*
  - named function
  - function declaration
*/
function greetNamed(name?: string): string {
  if (name) {
    return `Hi! ${name}`;
  } else {
    return `Hi!`;
  }
}

/*
  - named anoynymous function
  - function expression
*/
let greetUnnamed = (name: string): string => {
  if (name) {
    return `Hi! ${name}`;
  } else {
    return `Hi!`;
  }
};

// function that accepts a callback function that returns void
function add(a: number, b: number, callback: (result: number) => void) {
  callback(a + b);
}
add(2, 2, console.log);
export {};
