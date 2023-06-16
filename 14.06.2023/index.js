// // здесь с 1-4 строчку мы создаем переменные и храним в них различного рода значения
// let name = "Vazgen"; // идет ковычки ("", '', ``) это означает что тип данных у данной переменной строка
// const age = 22; // если без ковычек указываем число означает что тип данных у данной переменной число
// var isMarried; // undefined это когда мы создали переменную но ей не дали значение
// let isProgrammer = true; // true/false это булево значения которые имеют ввиду "правильно" и "не правильно". Используется для проверки условия
// let vazgensIfno = null; // null это тот тип данных который говорит что у данной переменой нет значения
// console.log("name", name);
// console.log("age", age);
// console.log("isMarried", isMarried);
// console.log("isProgrammer", isProgrammer);
// console.log("vazgensIfno", vazgensIfno);

// let, var, const - для инициализации переменной
// VAR мы можем заного декларировать ту же самую перемнную
// console.log(myAge1); // undefined
// var myAge1 = 22;
////////////////////////////////////////////////////////////////////////
// var name1 = "vazgen";
// var name1 = "Andrey";
// console.log("name1", name1);
// VAR
// LET если мы синицаиализировали переменную то больше не можем заного написать let
// console.log(myAge2); //  Cannot access 'myAge2' before initialization at index.js:24:13
// let myAge2 = 22;
////////////////////////////////////////////////////////////////////////
// let name2 = "vazgen";
// let name2 = "Andrey"; // Identifier 'name2' has already been declared (at index.js:21:5)
// console.log("name2", name2);
// с 30/32 строку: Здесь у нас ошибки не будет поскольку мы не инициализируем переменную city
// заного а просто меняем ей значение
// let city = "New York";
// console.log("city", city);
// city = "Paris";
// console.log("city", city);
// LET
// VAR&LET VS CONST
// VAR & LET;
// var name1 = "Vazgen";
// name1 = "Nikolay";
// let name2 = "Tatiana";
// name2 = "Igor";
// console.log("name1", name1);
// console.log("name2", name2);
// // VAR & LET;
// // CONST
// // Как и let нельзя исполозовать до инициализации
// console.log("name3", name3); // Cannot access 'name3' before initialization at index.js:46:22
// const name3 = "Vladimir";
// // name3 = "Julia"; // Assignment to constant variable. То есть нельзя изменять значение у переменных,
// // которые были синициализированны через ключевое слово "const"
// console.log("name3", name3);
// // CONST
// // VAR&LET VS CONST
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
// PROMPT ALERT CONFIRM
// alert("Hello World");
// prompt("How old are you", );
// confirm("Are you 18 years old ?");
// const isAdult = confirm("Are you 18 years old");
// console.log("isAdult", isAdult);
// if (isAdult === false) {
//   alert("You can not buy cigaretes");
// } else {
//   let cigaretesName = prompt("Which cigaretes do you need?", "LM");
//   alert(`No problem, here is ${cigaretesName}`);
// }
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
// 1
// let myage = 22;
// let herage = "22";
// console.log("==", myage == herage); //true
// console.log("===", myage === herage); //false
// console.log(">", myage > herage); //false
// console.log("<", myage < herage); //false
// 2
// let myage = 22;
// let herage = "22";
// let myName = "Vazgen";
// console.log("!=", myage != herage); // false -> он сравнил только значения а значения ронвы
// console.log("!==", myage !== herage); // true -> он сравнил как значение так и тип данных
// console.log("herage != myName", herage != myName); // true -> сравнил значение  "22" не равно "Vazgen"
// console.log("myage !== myName", myage !== myName); // true -> 22 не равно Vazgen как по типу данных так по значению
// console.log("!true", !true); // ! знак поменял на противоположное значение
// console.log("!false", !false); // ! знак поменял на противоположное значение
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
// меням тип данных числа на строки у булеан значения
// let age = 0;
// let stringAge = String(age); // Переобразование числа в сторку
// let stringAge2 = age + ""; // Переобразование числа в сторку
// let stringAge3 = "" + age; // Переобразование числа в сторку
// let booleanAge = Boolean(age); // Переобразование числа в boolean
// let booleanAge2 = !!age; // Переобразование числа в boolean  // 1. мы трансформируем 22 в булево получем true
// // 2. Во время первого ! знака мы меняем true на false
// // 3. Во время второг ! знака мы меням false на true

// // меняем тип данных строк на числа и булеан значения
// let text = "";
// let textWithSpace = " ";
// let name = "Vazgen";
// let stringAge = "22";
// let numAge1 = Number(stringAge); // Переарбрзуем строку в число
// let numAge2 = +stringAge; // Переарбрзуем строку в число
// let NanValue = Number(name); // NaN -> потому что Vazgen нельзя переабразовать в число
// let bool1 = Boolean(text); // пустая строка если переабразуется в булеан то будет false
// let bool2 = !!textWithSpace; // если в строке есть хотябы 1 символ то по булеану он будет true. K символам относится даже пробел
// let bool3 = Boolean(name); // если в строке есть хотябы 1 символ то по булеану он будет true. K символам относится даже пробел

// // truthy values -> все числа кроме 0 и -0, строки в котором есть хотя бы 1 символ(прбела),
// // falsy values -> 0 -0, пустые строки, undefined, null, NaN

// // меняем тип данных булеан на числа и строки
// let true1 = Number(true); // 1 поскольку компьютер имеет 2 числа булево. 1 это true, 0 это false
// let true2 = +true; // 1 поскольку компьютер имеет 2 числа булево. 1 это true, 0 это false
// let false1 = Number(false); // 0 поскольку компьютер имеет 2 числа булево. 1 это true, 0 это false
// let false2 = +false; // 0 поскольку компьютер имеет 2 числа булево. 1 это true, 0 это false
// let string1 = String(true);
// let string2 = String(false);
// console.log(string1, string2); // true false просто обернет true и false в ковычки

// if(условие1){
//     Сработает код, если условие1 верно
// }
// если условие1 не правильно то спустится к след условию
//  else if(условие2){
//  Сработает код, если условие2 верно
// }
// // если все предущие условие не верны
// else {
//     Сработает код, если все условия не верные
// }

// Написать код который
// 1. Открывает окно и берет год рождения пользователя
// 2. Если год рождения позже чем 2003 то выводим ты не совешеналетний
// 3. Если год рождения раньше 2003  то выводим все ок
// 4. Если у нас год не введен то показать "вы невверли год рождения"

// const yearOfBirth = +prompt("Enter year of your birthday"); // prompt нам возвращает строку поэтому мы должны есго переаброзавтаь число
// if (!yearOfBirth) {
//   console.log("You didnt enter any values");
// } else if (yearOfBirth >= 2003) {
//   console.log("You are kid");
// } else {
//   console.log("It's ok");
// }

// let status = prompt("Please enter your status");
// if (status === "ADMIN") {
//   const name = prompt("Enter your name");
//   if (name === "Vazgen") {
//     console.log("You are not the main ADMIN");
//   } else {
//     console.log("Hello SUPER ADMIN");
//   }
// } else {
//   console.log("Hello dear user");
// }

// let nameJs = prompt('Какое "официальное" название JavaScript? ').toLowerCase();
// if (nameJs === "ecmascript") {
//   console.log("YES");
// } else {
//   console.log("No!");
// }
