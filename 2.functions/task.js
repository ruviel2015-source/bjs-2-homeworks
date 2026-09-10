function getArrayParams(...arr) {
 const min = Math.min(...arr);
 const max = Math.max(...arr);
 const sum = arr.reduce((acc, current) => acc + current, 0);
 const avg = Number((sum / arr.length).toFixed(2));

 return {
  min: min,
  max: max,
  avg: avg
 };
}

function summElementsWorker(...arr) {
 if (arr.length === 0) return 0;

 return arr.reduce((acc, current) => acc + current, 0);
}

function differenceMaxMinWorker(...arr) {
 if (arr.length === 0) return 0;

 const min = Math.min(...arr);
 const max = Math.max(...arr);

 return max - min;
}

function differenceEvenOddWorker(...arr) {
 if (arr.length === 0) return 0;

 let sumEvenElement = 0;
 let sumOddElement = 0;

 for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
   sumEvenElement += arr[i];
  } else {
   sumOddElement += arr[i];
  }
 }

 return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
 if (arr.length === 0) return 0;

 let sumEvenElement = 0;
 let countEvenElement = 0;

 for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
   sumEvenElement += arr[i];
   countEvenElement++;
  }
 }

 if (countEvenElement === 0) return 0;

 return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
 let maxWorkerResult = -Infinity;

 for (let i = 0; i < arrOfArr.length; i++) {
  const currentResult = func(...arrOfArr[i]);

  if (currentResult > maxWorkerResult) {
   maxWorkerResult = currentResult;
  }
 }

 return maxWorkerResult;
}

const arr = [
 [10, 10, 11, 20, 10],
 [67, 10, 2, 39, 88],
 [72, 75, 51, 87, 43],
 [30, 41, 55, 96, 62]
];