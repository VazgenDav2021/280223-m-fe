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
// const arr = [10, 22, 3, 400, 5, 56, 7, 55];
// // 2
// const firstElement = arr.shift();
// const lastElement = arr.pop();
// const multipleStartAndEnd = firstElement * lastElement;
// // 3
// arr.unshift("Начало");
// arr.push("Конец");
// // 4
// const newArray = arr.slice(0);
// // 5
// const last4Elements = arr.slice(-4);

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

// // Splice - удалаяет элементы из массива. Метод принимает 3 параметра. 1ом параметре указывает индекс с кого начинаме удалять.
// // 2ым параметром уакзываем количество, которое хотим идалить. 3им параметром(опционально) указываем элементы кторые хотим добавить
// const arr = [3, 4, "Hello", undefined, 44, null, [1, 4, 7]];
// const newArr = arr.splice(0, 4, 1, 2, 3, 4);
// // удалили из массива элементы начиная с 0ого индекса 4 элемента (3, 4, "Hello", undefined)
// // после удаления на их месте поставили новые значения (1, 2, 3, 4)
// console.log({ newArr }); //  3, 4, 'Hello', undefined - удаленные элементы
// // console.log({ arr }); // // [ 1, 2, 3, 4, 44, null, [ 1, 4, 7 ] - результирующий массив

// foreach -  итерируется по массиву. Принимает параметр в качестве колбэк функции. Это функция в свою очередь принамет:
// 1. Итерируемое значниое массив
// 2. Индекс итерируемого массива
// 3. Сам массив, который итерируем
// (item, index, array) => {}; вот это в методе forEach называет колбэк фунцкия
// const arr = [3, 4, "Hello", undefined, 44, null, [1, 4, 7]];
// arr.forEach(function (item, index, array) {
//   console.log({ item, index, array });
// });
// const numbersArray = [1, 3, 4, 57, 23, 4676, 213]; // объявляем массив
// let sum = 0; // здесь объявляем переменную которая в дальнейшем будет хранить сумму всех значениий массива
// numbersArray.forEach(function (item) {
//   sum += item;
// });
// console.log({ sum });

// Loop
// let sum2 = 0;
// for (let i = 0; i < numbersArray.length; i++) {
//   sum2 += numbersArray[i];
// }
// console.log({ sum2 });

// Задание 1
// 1. Создать массив из чисел,
// 2. Суммировать элементы массива у которых индекс четное число

// const array = [1, 5, 2, 3, 75, 88, 12, 14, 200];
// let sum = 0;

// делаем итерациую
// array.forEach(function (item, index) {
//   // во время каждой итерации(круга) делаем проверку, если index>0 и если индекс деля на 2 остаток 0 (то есть чотный индекс)
//   if (index > 0 && index % 2 === 0) {
//     // то переменной sum прибавь то значение у который индекс соответстувет условию 148 стоке
//     sum += item;
//   }
// });
// console.log({ sum });

// Жанна
// const numbersArray = [1, 3, 4, 2, 5];
// let sum2 = 0;
// numbersArray.forEach(function (item, index) {
//   if (index % 2 === 0) {
//     sum2 += item;
//   }
// });

// console.log("sum2 = ", sum2);

// Алеся
// const numbersArray = [13, 86, 355, 4957, 821, 376];
// let sum3 = 0;
// numbersArray.forEach(function (item, index) {
//   if (index % 2 === 0) {
//     sum3 += item;
//   }
// });
// console.log({ sum3 });

// Map - делает то же самое что и foreach. Исключение то что результат работы foreach нам нечего не возвращает,
// а map нам возвращает новый массив
// const numbersArray = [1, 3, 4, 2, 5];

// newArray  будет undefined поскольку метод forEach нечео не возращает
// const newArray = numbersArray.forEach(function (item) {
//   return item + 2;
// });

// // newArray -> [ 3, 5, 6, 4, 7 ] потому что результат выполнения метода map, новый массив
// const newArray = numbersArray.map(function (item, vazgenIndex, array) {
//   //   console.log({ vazgenIndex, array });
//   return item + 2;
// });
// console.log({ newArray });

// Задание 2
// 1. Создать массив
// 2. Создать новый массив на основе старого, и каждый второй элемент массива увеличить на два
// [1,2,4,6]->[1,4,4,12]

// const arr2 = [1, 2, 4, 6, 12];
// const newArr = arr2.map(function (item, index) {
//   // если индекс итеруремого элеммента четный то возвращай этот элемент умноженный на два
//   if (index > 1 && index % 2 !== 0) {
//     return item * 2;
//   } else {
//     // если индекс итеруремого элеммента  не четный то просто возращай данный элемент
//     return item;
//   }
// });

// Жанна
// const arr = [1, 4, 6, 8, 12, 32, 44];
// const newArray = arr.map(function (item, vazgenIndex) {
//   if (vazgenIndex > 1 && vazgenIndex % 2 !== 0) {
//     return item * 2;
//   } else return item;
// });
// console.log("newArray = ", newArray);

// // filter - метод который возращает новый массив. В него входят те элементы которые ссотвертвуют услвою
// // const arr = [1, 47, 6, 5, 12, 23, 44];
// // const filteredArray = arr.filter(function (element, index, array) {
// //   return element % 2 === 0;
// // });
// // console.log({ filteredArray });

// // const arr2 = [" ", "asdasdas", 0, undefined, null, [], 32, ""];
// // const filteredArray = arr2.filter(function (element) {
// //   return element;
// // });
// // const filteredArray = arr2.filter(Boolean);

// const arr3 = [
//   "",
//   [],
//   "adsasd",
//   null,
//   undefined,
//   3,
//   45,
//   0,
//   64,
//   213,
//   5346,
//   5,
//   3,
//   5,
//   78,
// ];

// const filteredArray = arr3.filter(function (element) {
//   return typeof element !== "number";
// });

// const filteredArray = arr3.filter(Number);

// console.log({ filteredArray });

// Задание 3
// const arrayFifteen = [300, 495, 15, 3, 64, 78, 99, 150, 1500];
// const filteredArray = arrayFifteen.filter(function (element) {
//   // если число делятся на 15 без остатка помещай его в массив котрый образуется в результате работы метода filter
//   return element % 15 === 0;
// });
// console.log({ filteredArray });

// Жанна
// const arr15 = [90, 0, 2, 30, 45, 3, 5, -15];
// const filteredArray15 = arr15.filter(function (element) {
//   return element % 15 === 0;
// });
// console.log(filteredArray15);

// Алеся
// const arrayFifteen = [300, 495, 15, 150, 1500];
// const filteredArray = arr.filter(function (element) {
//   return element % 15 === 0;
// });
// console.log({ filteredArray });

// concat - комбинирует 2 или несколько массивов. Результат работы метода конкат возращает нам новый массив
// const arr1 = [1, 2, 3, 4, 56];
// const arr2 = ["Example1", "Example2", "Example3"];
// const arr3 = ["Text1", "Text2", "Text3"];
// const combinedArray = arr1.concat(arr2, arr3);
// console.log({ combinedArray });

// reduce - универсальный метод, который возращает значение
// Метод reduce принимает 2 параметра.
// 1ый параметр это колбэк фунцкия котороая выполняется на каждей итерации
// 1.1 Колбэк в свую очередь принемает 4 параметра (предыдущее значение, текущее значение, текущий индекс элемента, сам массив)
// 2ой параметр это у нас начальное значение
// Начальное значение указывается для того чтобы присовить значение  параметру previousValue во время первой итерации
// const arr = [12, 34, 53, 22, 1, 2, 3, 4, 56];
// const sum = arr.reduce(function (
//   previousValue,
//   currentValue,
//   currentIndex,
//   array
// ) {
//   //   console.log({ previousValue, currentValue, currentIndex, array });
//   console.log({ previousValue, currentValue });
//   return previousValue + currentValue;
// },
// 0);
// console.log(sum);

// Задание 4
// 1 взять вот этот массив [12, 34, 53, 22, 1, 2, 3, 4, 56]
// 2 И умножить все числа друг на друга

// Жанна
// const arrReduce = [1, 3, 2, 10];
// const multy = arrReduce.reduce(function (
//   previousValue,
//   currentValue,
//   currentIndex
// ) {
//   console.log({ previousValue, currentValue, currentIndex });
//   return previousValue * currentValue;
// },
// 1);
// console.log(multy);

// Алеся
// const arr = [46, 3, 2];
// const mult = arr.reduce(function (previousValue, currentValue) {
//   return previousValue * currentValue;
// }, 1);
// console.log(mult);

// Юлиа
// const arr = [12, 5, 3, 8];
// const resultArr = arr.reduce(function (previousValue, currentValue) {
//   return previousValue * currentValue;
// }, 1);
// console.log(resultArr);

// includes - метод includes проверерят есть ли данный элемент в массиве, если есть то возвращает true если нет то false
// const names = ["Zhanna", "Julia", "Oksana", "Nikolay Nikolayev"];
// const nikolay = names.includes("Nikolay Nikolayev");
// const vazgen = names.includes("Vazgen");
// console.log({ nikolay, vazgen });
