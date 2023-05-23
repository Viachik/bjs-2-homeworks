"use strict";

// Задача 1
function solveEquation(a, b, c) {
  // Решить уравнение
  let D = b**2 - 4*a*c;

  if (D < 0) {
    return [];
  } else if (D === 0) {
    return [-b/2*a];
  } else {
    return [(-b + Math.sqrt(D))/2*a, (-b - Math.sqrt(D))/2*a];
  }
}
console.log(solveEquation(1, 2, 1))

//Задача 2
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let totalAmount;
    let percentMonth = (percent / 100) / 12;
    let creditBody = amount - contribution;
    let monthPay = creditBody * (percentMonth + (percentMonth / (((1 + percentMonth)**countMonths) - 1)));
    totalAmount = (monthPay * countMonths).toFixed(2);
    
    return Number(totalAmount);
  }

calculateTotalMortgage(10, 0, 50000, 12)