/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10;
let myVariable2 = "5";

let comparisonRes = myVariable1 <= myVariable2;

if (!!comparisonRes) {
  console.log(true);
}

myVariable1 = "20";
myVariable2 = 100;

let convertedCompRes = Number(myVariable1) <= +myVariable2;

if (!!convertedCompRes) {
  console.log(true);
}
