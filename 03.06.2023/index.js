// 1
// Если бы не знали что такое функция
// const num1 = 19;
// const num2 = 2;
// const sum = num1 + num2; // 21

// const number1 = 2;
// const number2 = 23;
// const sum2 = number1 + number2; // 25

// const number3 = 5;
// const number4 = 87;
// const sum3 = number3 + number4; //92

// const chislo1 = 67;
// const chislo2 = 56;
// const result = chislo2 - chislo1; // -11

// // Если бы я знал функции
// function calcTowSum(number1, number2, type) {
//   if (type === "plus") {
//     const sum = number1 + number2;
//     return sum;
//   } else {
//     const result = number1 - number2;
//     return result;
//   }
// }

// console.log(calcTowSum(19, 2, "plus")); // 21
// console.log(calcTowSum(2, 23, "minus")); // -21
// console.log(calcTowSum(5, 87, "plus")); //92

// =========================== FUNCTION DECLORATION
// function printVazgenName() {
//   return `Hello Vazgen`;
// }

// console.log(printVazgenName()); // Hello Vazgen

// function printVazgenName2() {
//   console.log("Hello Vazgen");
// }

// printVazgenName2(); // Hello Vazgen

// function printInfoAboutUser(name, age) {
//   return `${name} is ${age} years old`;
// }

// console.log(printInfoAboutUser("Tatian", 22));
// console.log(printInfoAboutUser("Vazgen", 23));
// console.log(printInfoAboutUser("Oksan", 45));
// =========================== FUNCTION DECLORATION
// =========================== FUNCTION EXPRESSION
// const printVazgenName = function () {
//   return "Hello Vazgen";
// };

// console.log(printVazgenName()); // Hello Vazgen

// const printInfoAboutUser = function (name, age) {
//   return `${name} is ${age} years old`;
// };

// console.log(printInfoAboutUser("Tatian", 22));
// console.log(printInfoAboutUser("Vazgen", 23));
// console.log(printInfoAboutUser("Oksan", 45));

// =========================== FUNCTION EXPRESSION
// =========================== ARROW EXPRESSION

// const printVazgenName = () => {
//   return `Hello Vazgen`;
// };

// console.log(printVazgenName()); // Hello Vazgen

// const printVazgenName2 = () => `Hello Vazgen`;
// console.log(printVazgenName2()); // Hello Vazgen

// const printInfoAboutUser = (name, age) => `${name} is ${age} years old`;

// console.log(printInfoAboutUser("Tatian", 22));
// console.log(printInfoAboutUser("Vazgen", 23));
// console.log(printInfoAboutUser("Oksan", 45));
// =========================== ARROW EXPRESSION

// =========================== DECLORATION VS EXPRESSION VS ARROW
// 1
// helloWorld(); // Hello World
// function helloWorld() {
//   console.log("Hello World");
// }
// helloWorld(); // Hello World

// 2
// helloWorld(); // Cannot access 'helloWorld' before initialization:
// // не можем вызвыать функцию до ее иницализации(создание)
// const helloWorld = function () {
//   //   console.log("Hello World");
// };
// helloWorld(); // Hello World

// 3
// helloWorld(); // Cannot access 'helloWorld' before initialization:

// const helloWorld = () => {
//   console.log("Hello World");
// };

// helloWorld(); // Hello World

// 4. Что делать если количество параметров приходит динамически

// function getArguments(arg1, arg2, arg3, arg4, arg5) {
//   console.log(arg1, arg2, arg3, arg4, arg5);
// }

// getArguments(1, 4, 87, 2, 7);
// getArguments(1, 4, 87, 2, 7, 222, 3, 5, 7, 97654, 33);
// getArguments(1);

// function getArguments() {
//   console.log(arguments);
// }
// getArguments(1, 4, 87, 2, 7);
// getArguments(1, 4, 87, 2, 7, 222, 3, 5, 7, 97654, 33);
// getArguments(1);

// const getArguments3 = function () {
//   console.log(arguments);
// };
// getArguments3(1, 4, 87, 2, 7);
// getArguments3(1, 4, 87, 2, 7, 222, 3, 5, 7, 97654, 33);
// getArguments3(1);
// const getArguments2 = () => {
//   console.log(arguments);
// };
// getArguments2(1, 4, 87, 2, 7);
// getArguments2(1, 4, 87, 2, 7, 222, 3, 5, 7, 97654, 33);
// getArguments2(1);
// =========================== DECLORATION VS EXPRESSION VS ARROW

// =========================== RETURN

// const calcTowSum = (sum1, sum2) => {
//   // console.log играет только информативную роль, он нечего не возвращает
//   // для того чтобы функция возращала какое то значение то надо написать "return" и то значение кторое хотим вернуть
//   console.log(sum1 + sum2);
// };

// const result = calcTowSum(1, 2);
// console.log("result", result); //  undefined

// const calcTowSum2 = (sum1, sum2) => {
//   return sum1 + sum2;
//   console.log("1");
//   console.log("1");
//   console.log("1");
//   console.log("1");
//   console.log("1");
//   console.log("1");
//   console.log("1");
//   console.log("1");
//   console.log("1");
//   console.log("1");
//   console.log("1");
//   console.log("1");
//   console.log("1");
//   console.log("1");
// };

// // const result1 = calcTowSum2(1, 2); // 3
// // const result2 = calcTowSum2(4, 2); // 6
// // const finalResult = calcTowSum2(result1, result2); // 9

// // Это более кратко но не читаемо
// const finalResult = calcTowSum2(calcTowSum2(1, 2), calcTowSum2(4, 2)); // 9

// В подробности не вдаемся поскольку не работали еще с обьектами
// данный пример служит в качестве примера
// function returnNumbers(number1, number2) {
//   let obj = {};

//   let sum = number1 + number2;
//   let minus = number1 - number2;

//   obj.sum = sum;
//   obj.minus = minus;

//   return obj;
// }

// console.log(returnNumbers(10, 2));

// ========================== Дефолтные параметры/параметры по умалчанию

// const calcTowValues = (num1, num2) => num1 + num2;

// const result1 = calcTowValues(1); // NaN -> 1 + undefined
// console.log(result1);

// const calcTowSum = (num1 = 100, num2 = 10) => num1 + num2;

// const result1 = calcTowSum(1); // 11 -> num-1, num2-10
// console.log(result1);

// const result2 = calcTowSum(); // 110 -> num1-100, num2-10
// console.log(result2);

// если у меня заказ на меньше 50 евро то процент состовляет 10%, если заказ больше на 50 евро то процент состовляет 5%

// const calcBill = (bill) => {
//   if (bill <= 50) {
//     return bill + bill * 0.1;
//   } else {
//     return bill + bill * 0.05;
//   }
// };

// const showBill = (name = "Guest", bill = 10) => {
//   const finalBill = calcBill(bill);
//   return `Mr. ${name} your bill is ${finalBill} euro. This bill is not so expressnive for you: ${finalBill}`;
// };

// console.log(showBill("Vazgen", 40));
// console.log(showBill("Oksana", 60));
// console.log(showBill());
