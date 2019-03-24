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

function avg(arr: Result[]) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i].result;
  }
  return total / arr.length;
}

const resultsAvg = avg(results);
console.log('resultsAvg', resultsAvg);
