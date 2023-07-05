// 1 Задание
// Без функции. С помощью блока if, else if, else Написать код который:
// 1 отркывает модальное окно в браузере и спрашивает пол человека, по дефолту стоит "М"
// 2 Если у нас введенное данное "М" то выводим. "Good morning Sir"
// 3 Если у нас введенное данное  "Ж" то выводим. "Good morning Mrs."
// 4 Если у нас не "М" и не "Ж" то выводим: "I don't know your gender"

// Antony
// let sex = prompt("Ваш пол?", "M");
// if (sex === "M") alert("Good morning Sir");
// else if (sex === "Ж") alert("Good morning Mrs.");
// else alert("I don't know your gender");

// Zhanna
// let sex = prompt("enter your gender:", "f");
// if (sex === "m") {
//   console.log(`Good morning SIR`);
// } else if (sex === "f") {
//   console.log(`Good morning Mrs`);
// } else {
//   console.log(`Unknown gender`);
// }

// Tatiana
// let userGender = prompt("What is your gender?", "M");
// if (userGender === "M") {
//   console.log("Good morning Sir");
// } else if (userGender === "F") {
//   console.log("Good morning Mrs.");
// } else {
//   console.log("I don't know your gender");
// }

// Задание 2
// 1 Написать код который открывает модалъное окно и берет статус пользователя
// 2 ИСпользуя констукцию switch написат:
// 3 Если у ползователя статус "ADMIN" в консольк логе написать "добро пожаловать админ"
// 4 Если у нас статус не указан в консольк логе написать "Мы знаем вашего статуса, у вас нет прав для входа"
// 5 Если у нас статус "REGULAR"   в консольк логе написать "добро пожаловать простой пользователь"
// 6 В любом ином случает написать "Ваш статус не соответствует ни одному из нашей системы"

// Zhanna
// let userStatus = prompt("enter your status:");

// switch (userStatus) {
//   case "admin":
//     console.log(`Welcome ADMIN`);
//     break;

//   case "":
//     console.log("Мы не знаем кто вы");
//     break;

//   case "regular":
//     console.log(`Welcome USER`);
//     break;

//   default:
//     console.log(`Unknown status`);
//     break;
// }

// Antony
// let statusUser = prompt("your status?");
// switch (statusUser) {
//   case "ADMIN":
//     alert("добро пожаловать админ");
//     break;
//   case "":
//     alert("Мы не знаем вашего статуса, у вас нет прав для входа");
//     break;
//   case "REGULAR":
//     alert("добро пожаловать простой пользователь");
//     break;
//   default:
//     alert("Ваш статус не соответствует ни одному из нашей системы");
// }

// Tatiana
// let userStatus = prompt("What is your status?");

// switch (userStatus) {
//   case "ADMIN":
//     console.log("Welcome, ADMIN");
//     break;
//   case "REGULAR":
//     console.log("Welcone, regular User.");
//     break;

//   case "":
//     console.log("I don't know, who you are");
//     break;

//   default:
//     console.log("Sorry, your status is undefined");
// }

// Alesya
// let statusUser = prompt("Who are you?");
// switch (statusUser) {
//   case "ADMIN":
//     console.log("добро пожаловать админ");
//     break;
//   case "":
//     console.log("Мы не знаем вашего статуса, у вас нет прав для входа");
//     break;
//   case "REGULAR":
//     console.log("добро пожаловать простой пользователь");
//     break;
//   default:
//     console.log("Ваш статус не соответствует ни одному из нашей системы");
// }

// Задание 3
// Написать код коотрый открывает модальное окно и принимает число
// Создать переменную и дать ей значение на основе:
// 1. Если число меньше или равно 18 то переменная ровна "Число меньше или ровно 18"
// 2. В другом сличае написать "Число больше или ровно 18"

// Zhanna
// let num = +prompt("enter number:");
// const variable = num <= 18 ? "number <= 18" : "number > 18";
// console.log({ variable });

// Nikita
// let age = Number(prompt("Enter your Age"));
// let message =
//   age <= 18 ? "Число меньше или равно 18" : "Число больше или равно 18";
// alert(message);

// Antony
// let year = +prompt("how year old?");
// let newVaraible =
//   year <= 18 ? "Число меньше или ровно 18" : "Число больше или ровно 18";
// console.log({ newVaraible });

// Tatsiana
// let number = +prompt("Please, enter your number.");
// let newVaraible =
//   number <= 18 ? "Число меньше или ровно 18" : "Число больше или ровно 18";
// console.log({ newVaraible });

// Alesya
// let takeCode = +prompt("Введите число");
// let message =
//   takeCode <= 18 ? "Число меньше или ровно 18" : "Число больше или ровно 18";
// console.log({ message });

// Пример как можно использоват ? в реальном примере
// const randomNumberGenerator = () => Math.floor(Math.random() * 25);

// const resultOfFunction = randomNumberGenerator();
// let isWin =
//   resultOfFunction === 21
//     ? "Вы выграло машину"
//     : `Вы проиграли посколькы ваша цивра была ${resultOfFunction} попобуййте еще раз`;

// const p = document.createElement("p");
// p.textContent = isWin;
// document.body.append(p);
// Пример как можно использоват ? в реальном примере

// Задание 4
// 1 Написать цикл от 255 до 1
// 2 Вывести все числа которые длеятся на 3 и 10

// Zhanna
// for (let i = 250; i > 0; i--) {
//   if (i % 3 === 0 && i % 10 === 0) {
//     console.log(i);
//   }
// }

// Tatsiana
// for (let i = 255; i > 0; i--) {
//   if (i % 3 === 0 && i % 10 === 0) console.log(i);
// }

// Alesya
// for (i = 255; i > 0; i--) {
//   if (i % 3 == 0 && i % 10 == 0) {
//     console.log(i);
//   }
// }

// Задание 5
// Открыть модальное окно, для получения имени
// Если у нас нечего не указано то вызывать модальное окно столько раз пока пользователь не введет свое имя
// Как пользователь введет свое имя то показать имя в консоль логе

// Zhanna
// // здесь пустая строка, если в нее добавим какой символ то цикл не заработает
// let userName = "";
// // Цикл и на каждой итерации у нас идет проверка, если userName у нас falsy значение (undefined,null,0)
// // то пусть столько раз работает наш цикл
// while (!userName) {
//   // здесь каждой итерации у нас будет открыватся окно и спрашивать имя ползьвателя
//   userName = prompt("Enter your name, please:");
// }
// console.log(`Hello, ${userName}!`);

// Tatsiana
// let userName = prompt("Please, enter your name.");
// while (!userName) {
//   userName = prompt("Please, enter your name.");
// }
// console.log(userName);

// Задание 6
// Создать пустой массив
// Сделать цикл от 1 то 100
// Во врмея каждой итерации доаблять итерруемое значение в массив если итеруемое значение делится на 5 и не делится на 10

// Alesya;
// const arr = [];
// for (let i = 1; i < 100; i++) {
//   if (i % 5 === 0 && i % 10 !== 0) {
//     arr.push(i);
//   }
// }
// console.log(arr);

// Zhanna
// let arr1 = [];
// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0 && i % 10 !== 0) {
//     arr1.push(i);
//   }
// }
// console.log(arr1);

// Tatsiana
// let arr = [];
// for (let i = 0; i < 100; i++) {
//   if (i % 5 === 0 && i & (10 !== 0)) arr.push(i);
// }
// console.log(arr);

// Заданию 7
// Создать массив состоящий из цифр
// С помощью цикла посчитать сумму всех элементов массва

// Zhanna
// let arr2 = [4, 1, 6, 9, 0, 2];
// let sum = 0;
// for (let i = 0; i < arr2.length; i++) {
//   sum += arr2[i];
// }
// console.log(arr2);
// console.log("sum = ", sum);

// Tatsiana
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   result += arr[i];
// }
// console.log(result);

// Alesya
// const arr1 = [10, 288, 351, 448, 92];
// let sum = 0;
// for (let i = 0; i < arr1.length; i++) {
//   sum += arr1[i];
// }
// console.log(sum);

// Задание 8
// Содать массив чисел из 10 элементов
// С помощью метода массива взять последние 5 элементов
// В новоабразованном массиве из 5и элеменетов посчитать сумму всех чисел исполья метод reduce

// Zhanna
// let arr = [4, 1, 6, 9, 0, 2, 7, 5, 9, 3];
// console.log("arr = ", arr);
// let newArr = arr.slice(-5);
// console.log("newArr = ", newArr);
// let sumOfValuesOfArray = newArr.reduce((sum, elem) => sum + elem, 0);
// console.log("sumOfValuesOfArray = ", sumOfValuesOfArray);
