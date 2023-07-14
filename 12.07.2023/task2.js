// Создать функцию которая принимает произвольное количество объектов с сотрдуниками с полями:
// Имя, возраст, зп
// Сделать так чтобы функция проверяла средний возраст сотрудника

// Zhanna
const emp1 = {
  name: "Peter",
  age: 45,
  salary: 2550,
};

const emp2 = {
  name: "Kate",
  age: 18,
  salary: 5300,
};

const emp3 = {
  name: "Maxim",
  age: 28,
  salary: 1870,
};

function avgAge(...arr) {
  if (arr.length) {
    let summa = arr.reduce((sum, elem) => sum + elem.age, 0);
    let result = Math.floor(summa / arr.length);
    return result;
  }

  return 0;
}

console.log(avgAge());
console.log(avgAge(emp1));
console.log(avgAge(emp1, emp2));
console.log(avgAge(emp1, emp2, emp3));
