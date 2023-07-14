// Как создается объект
// 1
// const obj = new Object({
//   name: "Vazgen",
//   age: 23,
//   isLectrurer: true,
// });
// console.log(obj);

// 2
// const obj = {
//   name: "Vazgen",
//   age: 23,
//   isLectrurer: true,
// };
// console.log(obj);

// Как добавлять значение в уже существущей объект
// const person = {
//   name: "Igor",
//   city: "Minsk",
//   age: 23,
//   apparments: {
//     London: 2,
//     Dubai: 1,
//     Paris: 23,
//     USA: {
//       Glendel: 2,
//       Arizona: 3,
//       //   New York:2 будет ошибка
//       "New York City": 2,
//     },
//   },
// };
// person.family = ["Papa", "Mama", "Sister"];
// console.log(person);

// Как брать значение из объекта
// const person = {
//   name: "Igor",
//   city: "Minsk",
//   age: 23,
//   apparments: {
//     London: 2,
//     Dubai: 1,
//     Paris: 23,
//     USA: {
//       Glendel: 2,
//       Arizona: 3,
//       //   New York:2 будет ошибка
//       "New York City": 2,
//     },
//   },
// };
// person.family = ["Papa", "Mama", "Sister"];
// person.firend = {
//   bestFriend: "Sregeyh",
//   otherFriedn: ["Nikolay", "Evgeniy", "Nikola"],
// };

// // console.log("name", person.name); // Igor
// // console.log("age", person.age); // 23
// // console.log("apparments", person.apparments.USA["New York City"]);

// const valueOfObject = prompt("Select field in Object");
// console.log("value", person[valueOfObject]);

// Как хранить в объекте функции
// const user = {
//   name: "Vazgen",
//   age: 23,
//   proffesion: "Lecturer",

//   //   Устарел
//   // printInfoAboutUser: function (city) {
//   //   return `${user.name} is ${user.age} years old and he is ${user.proffesion}. And he lives in ${city}`;
//   // },

//   //   ES6+
//   printInfoAboutUser(city) {
//     const capital = "capital";
//     return `${user.name} is ${user.age} years old and he is ${user.proffesion}. And he lives in ${capital} ${city}`;
//   },
// };

// printInfoAboutUser(); // printInfoAboutUser is not defined
// console.log(user.printInfoAboutUser("Tegeran"));

// Как использвоат объекты в качестве параметра в функции

// const order1 = {
//   qunatity: 3,
//   check: 30,
// };

// const order2 = {
//   qunatity: 2,
//   check: 100,
// };

// const order3 = {
//   qunatity: 3,
//   check: 250,
// };

// function getAllChecks(ord1, ord2, ord3) {
//   const sum = ord1.check + ord2.check + ord3.check;
//   return sum;
// }

// console.log(getAllChecks(order1, order2, order3));

// const employees = [
//   { name: "Julia", salary: 5000 },
//   { name: "Igor", salary: 1400 },
//   { name: "Segey", salary: 2300 },
//   { name: "Ivan", salary: 4500 },
//   { name: "Alexei", salary: 2200 },
// ];

// const sumOfSallaries = employees.reduce((prev, acc) => {
//   return prev + acc.salary;
// }, 0);

// const namesOfAllEmployess = employees.map((employee) => employee.name);

// const filteredEmployees = employees.filter(
//   (employee) => employee.salary > 3000
// );

// const lowToHigh = employees.sort((a, b) => {
//   return a.salary - b.salary;
// });

// const hightToLow = employees.sort((a, b) => {
//   return b.salary - a.salary;
// });

// Деструктуризация
// const userInfo = {
//   name: "Igor",
//   age: 32,
//   proffession: "Director",
//   city: undefined,
//   collegues: {
//     "Front end developer": "Vazgen",
//     "QA Engineer": "Ignat",
//     "Solution Architect": "Stat",
//   },
//   familiy: ["Papa", "Mama", "Borther"],
// };

// // const name = "Vazgen";

// // const name = userInfo.name;
// // const proffession = userInfo.proffession;
// // const collegues = userInfo.collegues;
// // console.log({ name, proffession, collegues });
// const {
//   name: vazgenExampleUserName,
//   proffession,
//   collegues,
//   familiy,
// } = userInfo; // Identifier 'name' has already been declared
// console.log({ vazgenExampleUserName, proffession, collegues, familiy });

// Если у нас название ключа и переменная в которой хранится значение совпадают то значние можно не писать

// const returnsInfo = (name, age, city) => {
//   return {
//     name,
//     age,
//     city,
//   };
// };

// console.log(returnsInfo("Vazgen", 23, "Yerevan"));

// const { name, age, city } = returnsInfo("Vazgen", 23, "Yerevan");
// const result = returnsInfo("Vazgen", 23, "Yerevan");

// const product = {
//   name: "Iphone",
//   image: "/images/iphone.png",
//   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, inventore sit! Recusandae et quisquam, veritatis totam assumenda impedit exercitationem in illo quam id iusto accusantium, voluptates, explicabo sequi sapiente! Tempore?",
//   oldPrice: 1200,
//   price: 1500,
//   discount: 20,
// };

// function printInfoAboutProduct(product) {
//   const { name, price } = product;

//   if (price > 1000) {
//     return `Product ${name} is VIP, becuase it costs more than ${price} eurous`;
//   } else {
//     return `Product ${name} is regular product that everbydoy cann afford it `;
//   }
// }

// console.log(printInfoAboutProduct(product));

// const user = {
//   name: "Vazgen",
//   age: 23,
//   location: "Armenia",
//   password: "Qwerty123",
//   proffesion: "Lecturer",
// };

// // раздели мой объект на две части: первый это значение пароля, а ...otherData это у меня остальной объект
// const { password, ...otherData } = user;
// console.dir(`We get info about user here it is ${JSON.stringify(otherData)}`, {
//   depth: null,
// });
