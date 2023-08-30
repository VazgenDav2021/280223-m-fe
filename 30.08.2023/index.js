// Antony
// function Citis(name, country, population) {
//     this.name = name;
//     this.country = country;
//     this.population = population;
// }
// const citi1 = new Citis("Moscow", "Russia", 3200000);
// const citi2 = new Citis("Odessa", "Ukrain", 320000);
// const citi3 = new Citis("Berlin", "Germani", 3200000);

// console.table(citi1);
// console.table(citi2);
// console.table(citi3);


// Nikita
// function Car(model, price, country) {
//     this.model = model;
//     this.price = price;
//     this.country = country;
// };
// const car1 = new Car("Toyota", 20000, "Japan");
// console.log({ car1 });

// Regina
// function Currency(name, exchangeRate, country) {
//     this.name = name;
//     this.exchangeRate = exchangeRate;
//     this.country = country;
// }

// const dollar = new Currency("Доллар", 1, "США");
// const euro = new Currency("Евро", 0.85, "Европейский союз");
// const pound = new Currency("Фунт стерлингов", 0.75, "Великобритания");

// console.log(dollar);
// console.log(euro);
// console.log(pound);

// Samir
// function Bilding(address, floors, tenants) {
//     this.address = address;
//     this.floors = floors;
//     this.tenants = tenants;

//     this.printInfo = function () {
//         console.log(`Адрес: ${this.address}, Этажи: ${this.floors}, Жители: ${this.tenants}`);
//     }
// };
// const bilding1 = new Bilding('Бекетова 12', 4, 32);
// console.log(bilding1, bilding2, bilding3, bilding4);
// bilding1.printInfo();



// const user1 = {
//     name: "Igor",
//     surname: "Ivanov",
//     age: 32
// };
// const user2 = {
//     name: "Alexandr",
//     surname: "Smith",
//     age: 56
// };
// const user3 = {
//     name: "Anna",
//     surname: "Nikula",
//     age: 22
// };
// const user4 = {
//     name: "ALexandr",
//     surname: "Nikolayev",
//     age: 45
// };

function User(name, surname, age, gender) {
    // что в функции User создаем с помощю контекста значения name, surname, age которые равны параметрам которые пришли
    this.name = name;
    this.surname = surname;
    this.age = age
    this.country = "Germany"
    this.gender = gender === "M" ? "Male" : "Female"

    // ПЛОХО!!!!!
    // this.sayHello = function(){
    //     return `Hello ${this.gender==="Male" ? "Mr." : "Mrs."} ${this.name}, how are you. Are you realy ${this.age} years old ?) `
    // }
};

User.prototype.sayHello = function () {
    return `Hello ${this.gender === "Male" ? "Mr." : "Mrs."} ${this.name}, how are you. Are you realy ${this.age} years old ?) `
};

// const user1 = new User("Igor", "Ivanov", 32, "M");
// const user2 = new User("Alexandr", "Smith", 56, "M");
// const user3 = new User("Anna", "Nikula", 22, "F");
// const user4 = new User("ALexandr", "Nikolayev", 45, "M");

// // console.log({ user1, user2, user3 });
// console.log(user2.sayHello());
// console.log(user3.sayHello());

// console.log(user1, user2, user3, user4);
