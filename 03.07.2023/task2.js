// 1 написать функцию которая в качестве параметра получает: имя, пол, номер билета.
// 2 Номер билета если не задается то ее значение "Кабина"
// 3 Исохдя из пола выводим данноый текст: "Пассажир(ка) ИМЯ сидит (если номера билета нет) в кабине"
// 4 Если билет есть то выводим: "Пассажир(ка) ИМЯ сидит на месте НОМЕР МЕСТА"

// Zhanna

// const passengerSex = function (sex) {
//   return sex === "m" ? `Пассажир` : `Пассажирка`;
// };

// const aboutTravel = function (name, sex, ticketNumber = "Кабина") {
//   let passenger = passengerSex(sex);
//   if (sex === "m" && ticketNumber != "Кабина") {
//     return `${passenger} ${name} сидит на месте №${ticketNumber}`;
//   } else if (sex === "f" && ticketNumber != "Кабина") {
//     return `${passenger} ${name} сидит на месте №${ticketNumber}`;
//   } else return `${passenger} ${name} сидит в кабине`;
// };

// console.log("aboutTravel = ", aboutTravel("Jane", "f", 567));
// console.log("aboutTravel = ", aboutTravel("Peter", "m", 322));
// console.log("aboutTravel = ", aboutTravel("Victor", "m"));

// Vazgen
const printTaverl = (name, sex, ticketNumber = "Кабина") => {
  if (sex === "m") {
    if (ticketNumber === "Кабина") return `Пассажир ${name} сидидит в кабине`;
    else return `Пассажир ${name} сидит на месте No ${ticketNumber}`;
  } else {
    if (ticketNumber === "Кабина") return `Пассажирка ${name} сидидит в кабине`;
    else return `Пассажирка ${name} сидит на месте No ${ticketNumber}`;
  }
};
console.log("aboutTravel = ", printTaverl("Jane", "f", 567));
console.log("aboutTravel = ", printTaverl("Peter", "m", 322));
console.log("aboutTravel = ", printTaverl("Victor", "m"));
