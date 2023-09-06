// Antony
// class Restaurant {
//     #balance = 0;
//     constructor(name, numGuests, employees, workShifts) {
//         this.name = name;
//         this.numGuests = numGuests;
//         this.employees = employees;
//         this.numEmployees = employees.length;
//         this.workShifts = workShifts;
//     }

//     restaurantInfo() {
//         return `Restaurant "${this.name}" has ${this.numGuests} guests at the moment, and ${this.numEmployees} employees. Working hours is ${this.workShifts}`
//     }
//     goOut() {
//         this.numGuests--
//         return `The guest has left the establishment ${this.numGuests - 1}`;
//     }

//     addEmployees(name, age, salary) {
//         const newEmployee = {
//             name,
//             age,
//             salary
//         };

//         this.employees.push(newEmployee)
//         this.numEmployees++
//     }

//     updateBalance(amount) {
//         return this.#balance = amount;
//     }
//     getBalance() {
//         return this.#balance;
//     }
// }

// const employees = [
//     { name: "Example1", age: 20, salary: 1200 },
//     { name: "Example1", age: 20, salary: 1200 },
//     { name: "Example1", age: 20, salary: 1200 },
//     { name: "Example1", age: 20, salary: 1200 },
// ]

// const rest1 = new Restaurant("U Burcho", 20, employees, {
//     mon: { open: "11:30", close: "21:00" },
//     tue: { open: "11:30", close: "21:00" },
//     wed: { open: "11:30", close: "21:00" },
//     thu: { open: "11:30", close: "21:00" },
//     fri: { open: "11:30", close: "21:00" },
//     sat: { open: "11:30", close: "21:00" },
//     sun: { open: "11:30", close: "21:00" }
// })

// // проверяем функционал ухода гостя
// // console.log(rest1.goOut());
// // console.log(rest1.goOut());
// // console.log(rest1.goOut());
// // console.log(rest1);

// // проверяем функционал добавления нового сотрудника
// // rest1.addEmployees("Antony", 25, 1200)
// // console.log(rest1);


// // проверяем изменения баланса и его получение
// // rest1.updateBalance(200)
// // console.log(rest1.getBalance());


// Zhanna
class Restaurant {
    #balance = 0;
    constructor(name, numGuests, employees, workShifts) {
        this.name = name;
        this.numGuests = numGuests;
        this.employees = employees;
        this.numEmployees = employees.length;
        this.workShifts = workShifts;
    }

    restaurantInfo() {
        return `Restaurant "${this.name}" has ${this.numGuests} guests at the moment, and ${this.numEmployees} employees. Working hours is ${this.workShifts}`;
    }

    createEmployee(name, age, salary) {
        this.employees.push({ name, age, salary });
        this.numEmployees++
        return this.employees;
    }

    set ballnace(amount) {
        this.#balance = amount;
        console.log(amount);
    }

    get ballnace() {
        return this.#balance
    }

    gestOut() {
        this.numGuests--;
        return this.numGuests;
    }

}

const employees = [
    { name: "Alex", age: 25, salary: 1100 },
    { name: "Jane", age: 30, salary: 2200 },
    { name: "Ivan", age: 31, salary: 1150 },
    { name: "Eva", age: 24, salary: 1350 },
    { name: "Richard", age: 34, salary: 1030 },
    { name: "George", age: 19, salary: 900 }
]

const rest1 = new Restaurant("Ustriza", 20, employees, {
    mon: { open: "11:30", close: "21:00" },
    tue: { open: "11:30", close: "21:00" },
    wed: { open: "11:30", close: "21:00" },
    thu: { open: "11:30", close: "21:00" },
    fri: { open: "11:30", close: "21:00" },
    sat: { open: "11:30", close: "21:00" },
    sun: { open: "11:30", close: "21:00" }
})

rest1.createEmployee("ZHanna", 30, 2000);
rest1.ballnace = 300;
console.log(rest1.ballnace);
