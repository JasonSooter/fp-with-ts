export {};
interface Result {
  id: number;
  result: number;
}

const results: Result[] = [
  { id: 1, result: 64 },
  { id: 2, result: 87 },
  { id: 3, result: 89 }
];

const add = (a: number, b: number) => a + b;
const division = (a: number, b: number) => a / b;

const avg = (arr: Result[]) =>
  division(arr.map(a => a.result).reduce(add, 0), arr.length);

const resultsAvg = avg(results);
console.log('resultsAvg', resultsAvg);
