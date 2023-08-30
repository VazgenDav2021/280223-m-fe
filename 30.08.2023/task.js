// Samir
// function Car(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;


//     this.accelerate = function () {
//         this.speed += 10;
//     };

//     this.decelerate = function () {
//         this.speed -= 5;
//     };
// }

// const myCar = new Car("Toyota", 60);

// myCar.accelerate();
// myCar.decelerate();


// console.log(`Марка: ${myCar.brand}, Скорость: ${myCar.speed}`);


// Antony
// function Car({ marka, speed }) {
//     this.marka = marka;
//     this.speed = speed
// } (function () {
//     this.upSpeed = function () {
//         console.log(`Текущяя скорость: ${this.speed + 10}`)
//         return this
//     }
//     this.downSpeed = function () {
//         console.log(`Текущяя скорость:${this.speed = -5} `)
//         return this
//     }
// }.call(Car.prototype))

// const car1 = new Car({
//     marka: 'bmw',
//     speed: 30
// })


// console.log(car1.upSpeed());


// Regina
// function Car(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//     this.increaseSpeed = function () {
//         this.speed += 10;
//     };
//     this.decreaseSpeed = function () {
//         this.speed -= 5;
//     };
// }
// let myCar = new Car("Toyota", 50);
// console.log(myCar.speed); // 50
// myCar.increaseSpeed();
// console.log(myCar.speed); // 60
// myCar.decreaseSpeed();
// console.log(myCar.speed); // 55


// Vazgen
// function Car(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//     this.speed += 10
// }

// Car.prototype.break = function () {
//     this.speed -= 5
// }
// const bmw = new Car("BMW", 200);
// bmw.accelerate() // 210
// bmw.accelerate() // 220
// bmw.accelerate() // 230
// bmw.break() // 225
// console.log({bmw});