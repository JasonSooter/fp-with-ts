const add = (a: number, b: number) => a + b;
const addMany = (...args: number[]) => args.reduce(add, 0);
const div = (a: number, b: number) => a / b;
const mapProp = <T>(k: keyof T, arr: T[]) => arr.map(a => a[k]);
const avg = (arr: number[]) => div(addMany(...arr), arr.length);

interface Result {
  id: number;
  result: number;
}

const results: Result[] = [
  { id: 1, result: 64 },
  { id: 2, result: 87 },
  { id: 3, result: 89 }
];

const resultsAvg = avg(mapProp('result', results));
console.log('resultsAvg', resultsAvg);

export {};
