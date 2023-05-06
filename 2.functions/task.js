// Задание 1

function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
      if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }

  avg = sum/arr.length;
  
  return { min: min, max: max, avg: parseFloat(avg.toFixed(2)) };
}

console.log(getArrayParams([-99, 99, 10]))
console.log(getArrayParams([1, 2, 3, -100, 10]))
console.log(getArrayParams([5]))

// Задание 2

function summElementsWorker(...arr) {
  let sum = 0;

  if (arr.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
}

// summElementsWorker
console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  
  if (arr.length === 0) {
    return 0;
  } else {
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return max - min;
  } 
}

// differenceMaxMinWorker
console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (arr.length === 0) {
    return 0;
  } else {

    for (let i = 0; i < arr.length; i++) {
      if(arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
    return sumEvenElement - sumOddElement;
  }
}

// differenceEvenOddWorker
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let avg;

  if (arr.length === 0) {
    return 0;
  } else {

    for (let i = 0; i < arr.length; i++) {
      if(arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement ++;
      }
      avg = sumEvenElement/countEvenElement;
    }
    return avg;
  }
}

// averageEvenElementsWorker
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38

// Задание 3

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  
  for (let i = 0; i < arrOfArr.length; i++) {
   let result = 0;
    result = func(...arrOfArr[i]);

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72



/*
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    let result = 0;
    result = func(arrOfArr[i]);

    if (result > max) {
      max = result;
    }
  }

  return max;
}

console.log(makeWork([[1, 2, 3], [4, 5, 6]], worker));
console.log(makeWork([[10, 10, 11], [20, 10]], worker));
console.log(makeWork([[0, 0, 0], [-1, -100]], worker));

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
      if (arr[i] < min) {
      min = arr[i];
    } 
  }
  return Math.abs(max - min)
}

console.log(makeWork([[10, 20, 30], [-40, -50, -65]], worker2));
console.log(makeWork([[10, 10, 11], [20, 10]], worker2));
console.log(makeWork([[0, 1, 2], [-1, -100]], worker2));
*/