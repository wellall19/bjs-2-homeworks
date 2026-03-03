"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
    if (d < 0) {      
    }
    else if (d == 0) {
      let x = -b/(2*a);
      arr.push(x);
    }
    else {
      let x1 = (-b + Math.sqrt(d))/(2*a);
      let x2 = (-b - Math.sqrt(d))/(2*a);
      arr.push(x1);
      arr.push(x2);
    }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = (percent / 100) / 12;
  let S = amount - contribution;
  let payment = S * (P + (P / (((1 + P)**countMonths) - 1)));
  let sum = (payment * countMonths).toFixed(2);
  return parseFloat(sum);
}

/*### Что нужно сделать
1. Реализуйте функцию `calculateTotalMortgage`, которая принимает 
четыре аргумента: `percent`, `contribution`, `amount` и `countMonths`.
2. Преобразуйте процентную ставку из диапазона от 0 до 100 в диапазон 
от 0 до 1 и из годовой ставки — в месячную.
3. Посчитайте тело кредита — сумму, которую нужно вернуть банку 
(сумма кредита минус первоначальный взнос).
4. Ежемесячная оплата рассчитывается по формуле: 
`Платёж = S * (P + (P / (((1 + P)^n) - 1)))`, где:
`S` — тело кредита, `P` — 1/12 процентной ставки (от 0 до 1), 
`n` — количество месяцев, `^` — возведение в степень. 
Для возведения в степень используйте оператор — `**` или функцию [Math.pow](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/pow).
5. Посчитайте общую сумму, которую придётся заплатить клиенту.
6. Округлите результат до двух значений после запятой. Результат 
округления должен быть **числом**.
7. Верните результат из функции. Результатом функции должно быть 
значение числового типа.
(10, 0, 50000, 12)).toEqual(52749.53)
*/