// 1. Создать функцию которая принимает в качестве параметра: имя, возраяст пол
// 2. Селать проверку на пол и если он у нас "М" ВОЗРАЩАЕМ стокру "Гражданину ${ИМЯ} ${возраст} лет"
// 3. Если пол "Ж" то  ВОЗРАЩАЕМ стокру "Гражданке ${ИМЯ} ${возраст} лет"
// 4. Храним результат выполнения функции в переменной и делаем console.log днаной переменно

// Zhanna
// const aboutPerson = function (name, age, sex) {
//   let result;
//   if (sex === "m") {
//     result = `Mister ${name} is ${age} years old`;
//     return result;
//   }
//   if (sex === "f") {
//     result = `Miss ${name} is ${age} years old`;
//     return result;
//   } else result = `Unknown sex`;
//   return result;
// };
// console.log("aboutPerson = ", aboutPerson("Jane", 18, "f"));
// console.log("aboutPerson = ", aboutPerson("Peter", 28, "m"));
// console.log("aboutPerson = ", aboutPerson("Alex", 34, "r"));

// const printAbout = (name, age, sex) => {
//   return sex === "m"
//     ? `Mister ${name} is ${age} years old`
//     : sex === "f"
//     ? `Miss ${name} is ${age} years old`
//     : `Unknown sex`;
// };

// console.log("aboutPerson = ", printAbout("Jane", 18, "f"));
// console.log("aboutPerson = ", printAbout("Peter", 28, "m"));
// console.log("printAbout = ", printAbout("Bus", 45, "c"));

// Alesya
// function infoAboutUser(name, age, sex) {
//   if (sex === "m") {
//     const masculin = `Гражданину ${name} ${age} лет`;
//     return masculin;
//   } else {
//     const faminin = `Гражданке ${name} ${age} лет`;
//     return faminin;
//   }
// }
// console.log(infoAboutUser("Alesya", 22, "f"));
// console.log(infoAboutUser("Igor", 22, "m"));

// Tatiana
// function userData(name, age, gender) {
//   if (gender === "M") {
//     return `Гражданину ${name} ${age} лет`;
//   } else {
//     return `Гражданке ${name} ${age} лет`;
//   }
// }
// const result = userData("Tatiana", 37, "Ж");
// const result2 = userData("Vazgen", 37, "M");
// console.log(result, result2);
