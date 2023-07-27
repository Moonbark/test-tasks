/** ЗАДАЧА 19 - Добавление элементов в массив
 *
 * 1. Создайте любой массив
 *
 * 2. Добавьте в конец массива несколько новых элементов
 *
 * 3. Выведите в консоль длину результирующего массива
 */


const someArr = new Array(null, true, 2, BigInt(5), Symbol.for('id'));

console.log(someArr);

someArr.push('string', Symbol(), undefined, 7n);

someArr.push({a: 'b'});

console.log(someArr);

console.log('array length > ', someArr.length);
