// 1 Создать массив компани (каждая компания это объект), который содержит: названия компании, локация (континент,континент в себе будет содержать государство, государство город), количесто сторудников, ген-дирекотра, средниая зп в компании
// 2 Создали функцию которая делает проверку: Если в компании работают больше 20тыс сотрнудников и средная зп больше 1500 евро то написать что все ок и вывести информацию о компании
// 3 Если в компании вольше 20ты  и средная зп меньше 1500 то выводим что компания работает с нарушениями
// В ином любом слочеар если количество сотрудников меньше 20000 ти средная зп произвольна то пишем что у этой компании нет возможности поднять зп

// Antony
// const microsoft = {
//   name: "Microsoft",
//   people: 40000,
//   price: 6000,
//   location: {
//     materic: "Several America",
//     country: "USA",
//   },
// };

// const Ubisoft = {
//   name: "Ubisoft",
//   people: 20000,
//   price: 4000,
//   location: {
//     materic: "Evrazian",
//     country: "Franch",
//   },
// };

// const Fitchiken = {
//   name: "Fitchiken",
//   people: 200,
//   price: 1500,
//   location: {
//     materic: "Evrazian",
//     country: "Czech Republic",
//   },
// };

// const company = [microsoft, Ubisoft, Fitchiken];

// company.forEach((eachCompany) => {
//   const {
//     name,
//     people,
//     price,
//     location: { materic, country },
//   } = eachCompany;

//   if (people > 20000 && price > 1500) {
//     console.log(
//       `В компанн ${name}, которая базурется в ${materic}, ${country}  работают  ${people} сотрудников, с средней зарплатон ${price}`
//     );
//   } else console.log(" этой компании нет возможности поднять зп ");
// });
