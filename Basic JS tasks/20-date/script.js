/** ЗАДАЧА 20 - Дата
 *
 * 1. Создайте переменную и присвойте ей текущее время в миллисекундах
 *
 * 2. Выведите значение в консоль
 */

const currentTime = Date.now();

console.log("current time is " + currentTime + " ms");

/**альтернативный вариант через использование метода .getTime() нативного объекта Date */
// const currentDate = new Date();

// const currentTime = currentDate.getTime();

// console.log("current time is " + currentTime + " ms");
