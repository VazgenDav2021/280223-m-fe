// const arr = [3, 4, "Hello", undefined, 44, null, [1, 4, 7]];

// push - добавляет в конец массива новый элемент, и возвращает нам новую длинну массива
// console.log({ oldLengthOfArray: arr.length });
// const newLengthofArray = arr.push("Vazgen"); // [ 3, 4, 'Hello', 44, null, undefined, [ 1, 4, 7 ], 'Vazgen' ]
// console.log({ newLengthofArray, arr });

// pop - удаляет последний элемент массива, и возварщает его. Если массив пустой то этот метод нам вернет undefined
// const lastElementofArray = arr.pop(); // [1, 4, 7];
// // arr  [ 3, 4, 'Hello', undefined, 44, null ]
// console.log({ lastElementofArray, arr });

// unshift - добавляет в начало массива новый элемент, и возвращает нам новую длинну массива
// const newLengthofArray = arr.unshift("Nov s nachala"); //8
// arr [ 'Nov s nachala', 3, 4, 'Hello', undefined, 44, null, [ 1, 4, 7 ]

// shift - удаляет первый элемент массива, и возварщает его
// const firstElementOfArray = arr.shift(); // 3
// arr //  [ 4, 'Hello', undefined, 44, null, [ 1, 4, 7 ] ]

// slice - копиртует часть массива, надо указать 2 параметра, 1ый начиная с кокого индекса копировать, 2ой до кого индекса копировать
// const copyofArray = arr.slice(1, 5); // скопируте с 1ого по 5ый индекс
// const allCopyOfArray = arr.slice(0); // если не ставим 2ой параметр(конец), он автоматом скопирует до конца массива
// const lastElementOfArray = arr.slice(-2); // отрицательные числа означают последние n элементов

// 1 Создать массив из рандомных значении, первое и последнее значение должно быть числом
// 2 вырезать первый элемент массива и  вырезать последний элемент массива и умножить их друг на друга
// 3 Добавьте в начало массива Строкуе "Начало" а в конец добавте строку "Конец"
// 4 Сделать копию всего массива и хранить в дргуой переменной
// 5 Выерезать последние 4 элемента массива и хранить их в другой переменной

// Vazgen
// 1
const arr = [10, 22, 3, 400, 5, 56, 7, 55];
// 2
const firstElement = arr.shift();
const lastElement = arr.pop();
const multipleStartAndEnd = firstElement * lastElement;
// 3
arr.unshift("Начало");
arr.push("Конец");
// 4
const newArray = arr.slice(0);
// 5
const last4Elements = arr.slice(-4);

// Shanna
// const arr = [10, 22, 3, 400, 5, 56, 7, 55];
// let arrFirstElem = arr.slice(0, 1); // здесь надо было использвоать shift
// console.log("arrFirstElem = ", arrFirstElem);
// let arrLastElem = arr.pop();
// console.log("arrLastElem = ", arrLastElem);
// let multi = arrFirstElem * arrLastElem;
// console.log("arrFirstElem*arrLastElem = ", multi);
// let arrUnshiftElem = arr.unshift("Start");
// console.log("arr = ", arr);
// let arrPushElem = arr.push("End");
// console.log("arr = ", arr);
// let arrNew = arr.slice(0);
// console.log("arrNew = ", arrNew);
// // было бо коректнее arr.slice(-4);
// let partOfArr = arr.slice(arr.length - 4);
// console.log("partOfArr = ", partOfArr);

// Tatiana
// const arr = [3, "Tatjana", "Hello", "Belarus", 37, "Ruslan", 2];
// // -------------2--------------
// const firstElementOfArray = arr.shift();
// // pop
// const lastElementOfArray = arr.slice(-2);
// console.log(firstElementOfArray * lastElementOfArray); // ne znaju kak zapisatj chtobi rabotalo

// // ------------3-----------------
// arr.unshift("Start");
// arr.push("End");

// // ------------4---------------
// const allCopyOfArray = arr.slice(0);

// // ------------5---------------
// const copyofArray = arr.slice(3, 4);

// Alesya
//1.
// const length = 10;
// const min = -50;
// const max = 50;
// const numbers = [...Array(length)];
// for (let i = 0; i < numbers.length; i += 1) {
//   numbers[i] = _.random(min, max);
// }
// console.log(numbers);
// //2.
// const lastEl1 = arr.pop();
// const lastEl2 = arr.pop();
// const last3 = lastEl1 * lastEl2;
// //3.
// const numbers2 = arr.push("End");
// const numbers3 = arr.unshift("Start");
// //4.
// const CopyOfNumbers = arr.slice(0);
// //5.
// const lastElementOfArray = arr.slice(-4);
