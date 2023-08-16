// Для работы с датами надо использовать конструкто new Date
// он нам возращает конкретно время
// const date = new Date();
// console.log({ date }); // 2023-08-16T09:24:52.850Z

// здесь мы указываем конкретную дату передовая значения
// месяц начинается с 0
// const specifiedDate = new Date(2022, 8, 15, 12, 30, 0, 0);
// console.log({ specifiedDate });

// берем значение из даты
const date = new Date();
// getFullYear возращает текущий год
const year = date.getFullYear(); // 2023
// getMonth возращает текущий месяц
const month = date.getMonth(); // 7
// getDate возращает текущий день месяца
const day = date.getDate();  // 16
// getDay возращает текущий день недели
const dayOfWeek = date.getDay(); // 3
// getHours возращает текущий час
const hours = date.getHours(); // 13
// getMinutes возращает текущею минуту
const minutes = date.getMinutes(); // 32
// getSeconds возращает текущею секунду
const seconds = date.getSeconds(); // 32


const formatedDate = date.toISOString()
console.log(formatedDate);



// https://learn.javascript.ru/date
// https://devhints.io/wip/intl-datetime


