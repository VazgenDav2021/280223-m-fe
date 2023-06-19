// Простое условие
// let name = "Vazgen";
// if (name === "Vazgen") {
//   console.log("Hello Vazgen");
// } else if (name === "Vazgen") {
//   console.log("I dont know your name");
// }

//Вложенныое условие
// const status = "!";
// const name = "Tatiana";
// if (status === "ADMIN") {
//   if (name === "Vazgen") {
//     console.log("Hello Vazgen you are admin");
//   } else if (name === "Tatiana") {
//     console.log("Hello Tatiana you are admin");
//   }
// } else if (status === "REGULAR") {
//   if (name === "Vazgen") {
//     console.log("Hello Vazgen you are regular employee");
//   } else if (name === "Tatiana") {
//     console.log("Hello Tatiana you are regular employee");
//   }
// } else {
//   console.log("We dont know your position");
// }

// Условие которое что то возвращает
// function getName(name) {
//   if (name === "Vazgen") {
//     console.log("Hello Vazgen");
//   } else if (name === "Regina") {
//     console.log("Hello Regina");
//   } else if (name === "Tatiana") {
//     console.log("Hello Tatiana");
//   } else {
//     console.log("Hello Julia");
//   }
// }

// // getName("Regina");
// const tatianasName = getName("Tatiana");
// console.log("tatianasName",tatianasName); // будет undefined поскольку наши условия проверки нечего не возвращают а делают простой вывод текста

// function getName(name) {
//   if (name === "Vazgen") {
//     return "Hello Vazgen";
//   } else if (name === "Regina") {
//     return "Hello Regina";
//   } else if (name === "Tatiana") {
//     return "Hello Tatiana";
//   } else {
//     return "Hello Julia";
//   }
// }

// const juliasName = getName(""); // Hello Julia
// console.log('juliasName',juliasName); // Получили значение поскольку в функции getName проверка условия возвращает наме значение текста

// ------------------------------------------------------------SWITCH------------------------------------------------------------

// function getName(name) {
//   switch (name) {
//     case "Vazgen":
//       return "Hello Vazgen";
//     case "Regina":
//       return "Hello Regina";
//     case "Tatiana":
//       return "Hello Tatiana";
//     default:
//       return "Hello Julia";
//   }
// }

// const tatianasName = getName("Tatiana");
// console.log("tatianasName", tatianasName); // "Hello Tatiana"

//------------------------------------------------------------  Оператор "и"  -  && ------------------------------------------------------------
// const name = "Vazgen";
// // const age = 22; // если использовать это значение то сработает if
// const age = 23; // если использовать это значение то сработает else
// const isProgrammer = true;

// if (name === "Vazgen" && age === 22 && isProgrammer) {
//   console.log("All data is correct");
// } else {
//   console.log("One of data is incorrect");
// }

// console.log(true && false); //false
// console.log(true && false && true); //false;
// console.log(0 && "" && false && 0); // первый 0 потому что он нашел первый false оператор и закончил поиск
// console.log("asdas" && 1 && 0); // 0 поскольку он пошел до конца и нашел свой false значение
// console.log("asdas" && 1 && " " && true && "22"); // 22 он пытался найтик false значение и пошел до конца, не найда его взял последнее

//------------------------------------------------------------  Оператор "или"  -  || ------------------------------------------------------------

// const name = "Vazgen";
// const age = 22;
// // const isProgrammer = true; // если будем использоварь данное значение то сработает if, поскольку из 3х условий хоть одно было верным
// const isProgrammer = false; // если будем использовать данное значение то сработает else, псокольку не одно значение не бло true

// if (name === "Regina" || age === 33 || isProgrammer) {
//   console.log("Хотя бы одно условие было верным");
// } else {
//   console.log("Не одно условие не было верным");
// }

// console.log(false || true); // true
// console.log(true || false); // true
// console.log(1 || 2 || "Hello World"); // 1  поскольку он нашел первый true и закончил поиск
// console.log(0 || false || "Hello World"); // Hello World  поскольку он пошел до конца и нашел "true" значение
// console.log(0 || false || ""); // ""  поскольку он пошел до конца и не нашел "true" значение, поэтому взял последнее

// 1. Открыть 4 модальных окна для получения имени, возразата, города, и зп
// 2. Если у нас  имя "Елена" и возразст больше 18 лет и  гордо "Вашингтон" и зарплата 0 -> Вы из Америки но зарабатываерте мало
// 3. Если у нас имя "Николай" или имя "Сергей" и город "Барселноа" и зарплата > 2000 и меньше 5000 -> Ваше имя я знаю, но вы хорошо зарабатываете для Европы

// const name3 = prompt("Введите ваше имя:");
// const age3 = +prompt("Введите ваш возраст:");
// const city3 = prompt("Введите ваш город:");
// const salary3 = +prompt("Введите вашу зарплату:");

// if (name3 === "Елена" && age3 > 18 && city3 === "Вашингтон" && salary3 === 0) {
//   console.log("Вы из Америки, но зарабатываете мало.");
// } else if (
//   (name3 === "Николай" || name3 === "Сергей") &&
//   city3 === "Барселона" &&
//   salary3 > 2000 &&
//   salary3 < 5000
// ) {
//   console.log(`Ваше имя я знаю, но вы хорошо зарабатываете для Европы.`);
// } else {
//   console.log(`hello, ${name3}`);
// }

// --------------------------------------------------------TERNARY OPERATOR--------------------------------------------------------

// const isPragmmer = true;
// let salary;
// if (isPragmmer) {
//   salary = 3500;
// } else {
//   salary = 2500;
// }

// // переменая salary пусть ровняется значению из правой части
// // В правой части идет проверка если isPragmmer "truthy" значение (1,-1, {}, "asd", " ") то пусть берется занчение после ? знака,
// // если isPragmmer "falsy" значение то пусть берется значение после двоетоия
// const salary = isPragmmer ? 3500 : 2500;

// 1. Созадть переменуню имя
// 2. Если имя "Елана" то создать перемнную с занеъчением "Ж" если нет то "М"

// Жанна
// const firstName = prompt("Enter your name:");
// const sex = firstName === "Elena" ? "Female" : "Male";
// console.log(sex);

// Никита
// const name = "Elena";
// // const gender = name ? "Ж" : "M"; // это неправильно поскольку name у нас не пустая строка, поэтому всегда буедт "Ж"
// const gender = name === "Elena" ? "Ж" : "M";
// console.log(gender);

// ---------------- && проверка если условие верно то делать чтото ----------------
// здесьм мы создаем перемменую но ей пока нечего не присваеваем
// let isProgrammer = "Если функция не заработала то покажи этот текст";
// const name = "Vazgen";
// // Создаем фунцкию которая меняет занчение переменной isProgrammer
// function makeProgrammer() {
//   isProgrammer = true;
// }

// // разделем код на 2 части, до и после &
// // Если у нас условие до & верное то пусть заработает тот код который идет после &
// name === "Vazgen" && makeProgrammer(); // Если name === "Vazgen" то пусть заработает функция makeProgrammer
// console.log("isProgrammer", isProgrammer); // true потому что заработал makeProgrammer и переменная isProgrammer стало "true"
