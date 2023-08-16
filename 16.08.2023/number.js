//  Для чтения: https://learn.javascript.ru/number#proverka-isfinite-i-isnan

// 1 toFixed - используется для округления числа. Параметр служит для того чтобы понять сколько цифр ставить после. Кроме того число переобразуется в строку.
// const number = 5.4789;
// const roundedNumber = number.toFixed(2);
// console.log(number, roundedNumber);

// 2 parseInt, parseFloat - переобразовать строку в целое число, число с плавающей запятой в целое число
// const stringifiedNumber = '56';
// const intNumber = parseInt(stringifiedNumber);
// console.log(intNumber);

// const stringifiedNumber2 = '56.6';
// const intNumber2 = parseFloat(stringifiedNumber2);
// console.log(intNumber2);

// 3 Math.round, Math.floor, Math.ceil, Math.trunc - используются для того чтобы округлять числа
// Math.round - стандартное округление (исходя из математических правил)
// console.log(Math.round(1.1)); // 1
// console.log(Math.round(1.5)); // 2
// console.log(Math.round(1.7)); // 2
// Math.floor - округляет всега вниз
// console.log(Math.floor(1.1)); // 1
// console.log(Math.floor(1.5)); // 1
// console.log(Math.floor(1.7)); // 1
// Math.ceil  - округляет всега вверх
// console.log(Math.ceil(1.1)); // 2
// console.log(Math.ceil(1.5)); // 2
// console.log(Math.ceil(1.7)); // 2
// Math.trunc - сбрасывает дробную часть
// console.log(Math.trunc(1.1)); // 1
// console.log(Math.trunc(1.5)); // 1
// console.log(Math.trunc(1.7)); // 1

// 4 isNaN - используется для проверки значение, является ли оно числом или нет
// console.log(isNaN('abc')); // true
// console.log(isNaN(2)); // false

// 5 Math.random - при каждом  вызвое данного метда нам возращает рандомное значение в интервале 0 1
// console.log(Math.random());
// console.log(Math.random() * 10);




// 1. Написать функцию которая генерирует рандомное количество div-ов (0-20)
// 2. У каждого div-a должены быть ранодмный задний цвет  (rgb)
// 3. Каждый div должен позицанироватся тоже рандомно