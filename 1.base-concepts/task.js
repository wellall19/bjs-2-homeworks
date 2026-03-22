"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
    if (d == 0) {
      let x = -b/(2*a);
      arr.push(x);
    }
    else if (d > 0) {
      let x1 = (-b + Math.sqrt(d))/(2*a);
      let x2 = (-b - Math.sqrt(d))/(2*a);
      arr.push(x1);
      arr.push(x2);
    }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let part_of_percent = (percent / 100) / 12;
  let loan_body = amount - contribution;
  let payment = loan_body * (part_of_percent + (part_of_percent / (((1 + part_of_percent)**countMonths) - 1)));
  let sum = (payment * countMonths).toFixed(2);
  return parseFloat(sum);
}