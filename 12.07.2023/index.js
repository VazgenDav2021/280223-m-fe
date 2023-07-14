// // const users = [
// //   { name: "Julia", city: "New York", password: "Julia123" },
// //   { name: "Antony", city: "New Jersey", password: "Antony123" },
// //   { name: "Irina", city: "New York", password: "Irina123" },
// //   { name: "Karinas", city: "Paris", password: "Karinas123" },
// //   { name: "Sergey", city: "Toronto", password: "Sergey123" },
// //   { name: "Svetlana", city: "New York", password: "Svetlana123" },
// // ];

// // const container = document.querySelector(".container");
// // let html = "";

// // users.forEach((eachUser, index) => {
// //   const { name, city, password } = eachUser;
// //   html += `<div style="border:2px solid red; padding:20px">
// //         <p>${name}</p>
// //         <p>${city}</p>
// //         <p>${password}</p>
// //     </div>`;
// // });

// // container.insertAdjacentHTML("afterbegin", html);

// // Destructuring in object With FUnction
// // function printInfo(name, family_name, age, city, proffession) {
// //   console.log(
// //     `${proffession} ${name} ${family_name} lives in ${city} and he is ${age} years old`
// //   );
// // }

// // printInfo("Davtyan", "Yerevan", "Vazgen", 23, "Lecturer"); // Lecturer Davtyan Yerevan lives in 23 and he is Vazgen years old

// // function printInfo({ name, family_name, age, city, proffession }) {
// //   console.log(
// //     `${proffession} ${name} ${family_name} lives in ${city} and he is ${age} years old`
// //   );
// // }

// // printInfo({
// //   family_name: "Davtyan",
// //   city: "Yerevan",
// //   name: "Vazgen",
// //   age: 23,
// //   proffession: "Lecturer",
// // }); // Lecturer Vazgen Davtyan lives in Yerevan and he is 23 years old

// // Destructuring in object With FUnction

// // Destructuring in nested object with default values

// // const user = {
// //   name: undefined,
// //   detailedInfo: {
// //     location: {
// //       city: "Yerevan",
// //       address: {
// //         street: "Pushkin 21",
// //         apratament: "2",
// //       },
// //     },
// //   },
// // };

// // const {
// //   name = "Vazgen",
// //   detailedInfo: {
// //     location: {
// //       city,
// //       address: { street, apratament },
// //     },
// //   },
// // } = user;

// // console.log({ name, city, street, apratament });

// // Деструктуризация массива

// // const animals = [
// //   "Dog",
// //   "Cat",
// //   "Rat",
// //   "Eagle",
// //   "Rihno",
// //   "Zibra",
// //   "Mouse",
// //   "Snake",
// // ];

// // const [
// //   firstElementOfVazgensArray,
// //   secondElement,
// //   ,
// //   fourthAnimal,
// //   ...restElement
// // ] = animals;
// // console.log({
// //   firstElementOfVazgensArray,
// //   secondElement,
// //   fourthAnimal,
// //   restElement,
// // });

// // const arr = [1, 2];

// // const [firstElement, secondElement, thirdElement = 44] = arr;
// // console.log({ firstElement, secondElement, thirdElement });

// function calcSum(...vazgenNumbers) {
//   return vazgenNumbers.reduce((prev, acc) => {
//     return prev + acc;
//   }, 0);
// }

// console.log(calcSum(1, 9));
// console.log(calcSum(1, 9, 20));
// console.log(calcSum(1, 9, 20, 30));
// console.log(calcSum(1, 9, 20, 30, 40));

// // Создать функцию которая принимает произвольное количество объектов с сотрдуниками с полями:
// // Имя, возраст, зп
// // Сделать так чтобы функция проверяла средний возраст сотрудника

// const emp1 = {
//   name: "Sergey",
//   age: 23,
//   salary: 200,
// };

// const emp2 = {
//   name: "Sergey",
//   age: 23,
//   salary: 200,
// };

// const emp3 = {
//   name: "Sergey",
//   age: 23,
//   salary: 200,
// };

// const emp4 = {
//   name: "Sergey",
//   age: 23,
//   salary: 200,
// };

// calcAvgAge(emp2);
// calcAvgAge(emp2, emp3);
// calcAvgAge();
// calcAvgAge(emp2, emp3, emp3);

// --------------------------THIS--------------------------
// const lufthansa = {
//   name: "Lufthansa",
//   code: "LH",
//   passangers: [],

//   registerPassanger(passangerName, seat) {
//     this.passangers.push({
//       passangerName,
//       seat,
//     });
//     return `${passangerName} using company ${this.name} seats on place ${this.code}:${seat}`;
//   },
// };

// // console.log(lufthansa.registerPassanger("Vazgen", "45B"));
// // console.log(lufthansa.registerPassanger("Inna", "23C"));

// const register = lufthansa.registerPassanger; //  не делаем вызов функции, а просото приравниваем переменную к этой функции

// const airArabia = {
//   name: "Air Arabia",
//   code: "AB",
//   passangers: [],
// };

// console.log(register.call(airArabia, "Jhon", "01C"));
// console.log({ airArabia });

// const turkishAirlines = {
//   name: "Turkish Airlines",
//   code: "TA",
//   passangers: [],
// };

// console.log(register.apply(turkishAirlines, ["Enver", "22A"]));
// console.log({ turkishAirlines });

// const armaviaAvia = {
//   name: "Armavia Avia",
//   code: "AM",
//   passangers: [],
// };

// const resultOfBind = register.bind(armaviaAvia);
// console.log(resultOfBind("Tigran", "12A"));
// console.log({ armaviaAvia });

// Втотой вариант

function registerPassanger(passangerName, seat) {
  this.passangers.push({
    passangerName,
    seat,
  });
  return `${passangerName} using company ${this.name} seats on place ${this.code}:${seat}`;
}

const lufthansa = {
  name: "Lufthansa",
  code: "LH",
  passangers: [],
};

const airArabia = {
  name: "Air Arabia",
  code: "AB",
  passangers: [],
};

const turkishAirlines = {
  name: "Turkish Airlines",
  code: "TA",
  passangers: [],
};

const armaviaAvia = {
  name: "Armavia Avia",
  code: "AM",
  passangers: [],
};

console.log(registerPassanger.call(lufthansa, "Alex", "01B"));
console.log(registerPassanger.apply(airArabia, ["Muhammed", "22A"]));
const resultFunction = registerPassanger.bind(armaviaAvia);
console.log(resultFunction("Hovhannes", "32A"));
// --------------------------THIS--------------------------
