function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue, 0);
  let avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length == 0) return 0;
  let sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0
  );
  return sum; 
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) return 0;
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) return 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 == 0 
      ? sumEvenElement += arr[i] 
      : sumOddElement += arr[i];
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) return 0;
  let sumEvenElemen = 0;
  let countEvenElement = 0;
  for (argument of arr) {
    if (argument % 2 == 0) {
      sumEvenElemen += argument;
      countEvenElement += 1;
    }
  }
  return sumEvenElemen / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let currentValue = func(...arrOfArr[i]);
    maxWorkerResult = Math.max(currentValue, maxWorkerResult);
  }
  return maxWorkerResult;
}
