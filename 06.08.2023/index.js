// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     greet(){
//         return `Hello ${this.name}, you are ${this.age} years old`
//     }
// }

// const vazgen = new Person("Vazgen", 23)
// console.log({ vazgen });
// console.log(vazgen.greet());


// 1  Инкапсуляция
// class BankAccount {
//     // когда # это означает что данное поле должно быть невидно
//     #balance = 0;

//     #updateBalance(amount) {
//         this.#balance = amount
//     }

//     depoist(amount){
//         this.#updateBalance(amount)
//     }


//     withdraw(amount){
//         if(this.#balance>=amount){
//             this.#updateBalance(-amount)
//         } else {
//             console.log("Not enough balance in your account");
//         }
//     }

//     getBalance(){
//         return this.#balance
//     }
// }

// const account = new BankAccount();
// console.log(account);
// console.log(account.getBalance());


// Полиморфизм

class Shape {
    #programmer = "Vazgen";
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    ploshad() {
        console.log('Hello');
    }
}

class Square extends Shape {
    constructor(width, height, programmer) {
        super(width, height)
    }

    ploshad() {
        return this.width ** 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height, programmer) {
        super(width, height, programmer);
    }

    ploshad() {
        return this.width * this.height
    }
}

const square = new Square(5, 5);
// console.log("площадь квадрата", square.ploshad());
console.log(square);
// const rectangle = new Rectangle(10, 5);
// console.log(rectangle);
// console.log("площадь прямоугльника", rectangle.ploshad());


// Наследование

// class Animal {
//     constructor(type, soundType){
//         this.type = type;
//         this.soundType = soundType;
//     }

//     sound(){
//         return `${this.type} make sound like ${this.soundType}`
//     }
// }

// class Dog extends Animal {
//     constructor(type,soundType){
//         super(type,soundType)
//     }
// }


// class Cat extends Animal {
//     constructor(type, soundType) {
//         super(type, soundType)
//     }
// }

// const dog = new Dog("dog", "Waf");
// const cat  = new Dog("cat", "Myau");

// console.log(dog.sound());
// console.log(cat.sound());


// Абстракция
// class Mail {
//     constructor(companyName, country) {
//         this.companyName = companyName;
//         this.country = country;
//     }

//     sendMessage(to) {
//         const spilitedELelemnt = to.split(".");
//         const lastElement = spilitedELelemnt[spilitedELelemnt.length - 1]
//         if (lastElement === 'com') {
//             return `The message was sent to ${to}`
//         } else {
//             return `The message can not be sent becyase email is Invalid`
//         }
//     }
// }

// const myEmail = new Mail("Gmail", "USA")
// console.log(myEmail.sendMessage("d.2100.v@gmail.com"));
