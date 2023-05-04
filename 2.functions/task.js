// Задание 1
function getArrayParams(arr) {
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

// Задание 2
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