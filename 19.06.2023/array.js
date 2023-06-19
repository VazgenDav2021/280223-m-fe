// let name ="Vazgen", 23, true // Не можем в примитиве сразы хранить несколько значений
// let vazgensInfo = ["Vazgen", 23, true];
// console.log("vazgensInfo", vazgensInfo);

// 1 Как создаются массивы
// 1.1
// Создаем переммную и привниваем к []
// [] означает что мы создаем массив
// Внутри массива при добавлении элементов надо ставить запятую
// Внутри массива сразу можно хранить различны типы данных
// const array = [1, "а", null, undefined, true, [3, 2, "b", [4, 6, 8]]];
// console.log("array", array);

// 1.2
// const array = new Array(1, 2, "a", null, undefined, true, new Array(4, 5));
// console.log("array", array);
// Как взаимодействовать с массивами
// const vazgensInfo = [
//   "Vazgen",
//   22,
//   true,
//   "Yerevan",
//   ["Mama", "Papa", "borthers"],
// ];

// Как отаброжается в в консоли
// 0:  "Vazgen"
// 1: 22
// 2: true
// 3: "Yerevan"
// 4: ['Mama', 'Papa', 'borthers']

// console.log("name", vazgensInfo[0]); // [0] нам возвращает первый элемент массива
// console.log("age", vazgensInfo[1]);
// console.log("family", vazgensInfo[4]);

// Могу присавитвать к переменным значение из массива
// const anotherPersonFamily = vazgensInfo[4];
// console.log("anotherPersonFamily", anotherPersonFamily);
// console.log(
//   "length нам возвращает количество элементов в массиве",
//   vazgensInfo.length
// );

// Делаем минус 1 поскольку у нас количство начиается с 1и а индексация с 0я.
// console.log(
//   "Берем подлений элемемнт из массива",
//   vazgensInfo[vazgensInfo.length - 1]
// );

// console.log(
//   "Вернет undefined поскольку в таком индексе нет значения",
//   vazgensInfo[5]
// );

// //Вручную пирсваеваем индексу 100 значение Igor
// vazgensInfo[100] = "Igor";
// console.log(
//   "Нам выведется Igor поскольку мы уже прописали на 58 строке что хранится в этом индексе",
//   vazgensInfo[100]
// );

// // Если посмотрим на массив после переобразвоаний на строке 58 то результат будет таким
// console.log({ vazgensInfo });
// // 0: "Vazgen"
// // 1: 22
// // 2: true
// // 3: "Yerevan"
// // 4: ['Mama', 'Papa', 'borthers']
// // 100: "gor"

// console.log("Мат действия", vazgensInfo[1 + 1]); // vazgenIngo[2]
// let truValue = 0;
// console.log("Через проверку", vazgensInfo[truValue ? 0 : 1]); // если truValue являетяс вернум то равонсильно vazgensInfo[0] если нет то равносильно vazgensInfo[1]
// console.log("Через строку", vazgensInfo["2"]);
// Создать масив о себе. С именем, возразт, город, специальность и члены семьи

// Создаем пмассив на основе переммных
let name = "Vazgen";
let position;
let isPrgorammer = true;
position = isPrgorammer ? "Frontend" : "Not Programmer";
let age = 22;
let familiy = ["Papa", "Mama"];
// let vazgenInfo2 = [name, position, isPrgorammer, age, familiy];
let vazgenInfo2 = [name, isPrgorammer ? "FRONTEND" : "BACKEND", age, familiy];
console.log("vazgenInfo2", vazgenInfo2);

// 1. Зкаончить макет который я вам прислал (первый)
// 2. Решить задачи которые пришлю
