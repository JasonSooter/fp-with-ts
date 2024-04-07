function test(name: string): string; // overloaded signature
function test(age: number): string; // overloaded signature
function test(single: boolean): string; // overloaded signature
function test(value: string | number | boolean): string {
  // implementation signature
  switch (typeof value) {
    case "string":
      return `My name is ${value}.`;
    case "number":
      return `I'm ${value} years old.`;
    case "boolean":
      return value ? "I'm single." : "I'm not single.";
    default:
      throw new Error("Invalid Operation!");
  }
}

console.log(test("Remo")); // returns "My name is Remo."
console.log(test(29)); // returns "I'm 29 years old.";
console.log(test(false)); // returns "I'm not single.";
// console.log(test({ custom: "custom" })); // Error: Invalid Operation!

/**
 * Specialized overloading signature
 */
interface Document {
  createElement(tagName: "div"): HTMLDivElement; // specialized
  createElement(tagName: "span"): HTMLSpanElement; // specialized
  createElement(tagName: "canvas"): HTMLCanvasElement; // specialized
  createElement(tagName: string): HTMLElement; // non-specialized
}
