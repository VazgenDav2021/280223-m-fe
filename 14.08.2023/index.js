const string = "Hello World"


// 1 Получения длины строки
// const lengthOfString = string.length
// console.log(string.length);
// console.log("Hello".length);
// console.log(lengthOfString);

// 2 Получения конкретного элемента из строки
// const firstCharacter = string[0]
// const firstCharacter = string[1 - 1]
// const lestCharacter = string[string.length-1]
// console.log(firstCharacter);
// console.log(lestCharacter);

// 3 charAt метод для получения символа по индексу
// const characterInIndexOne = string.charAt(1)
// console.log(characterInIndexOne);

// 4 slice вырезает часть строки
// Принемает 2 параметра. Первый начиная с кокого индекса отрезать. Второй по какой индекс отрезать (не включительно).
// Если второй параемтр не передать то данный метод отрежет он конкретного индекса до конца
// const partOfText = string.slice(0, 5);
// const tillEnd = string.slice(5)
// console.log(tillEnd);

// // 5 toUpperCase -  Для возвышения всех символов в верхний регистр
// const upperCasea = string.toUpperCase();
// console.log(upperCasea);

// 6 toLowerCase -  Для возвышения всех символов в верхний регистр
// const upperCasea = string.toLowerCase();
// console.log(upperCasea);

// 7 indexOf - поиск подстроки. Находит и возращает первый попавщейся
// console.log(string.indexOf('o'));

// 8 replace - для замены текста
// console.log(string.replace("Hello", "Goodbye"));

// ЗАДАНИЕ 1: 
// массив  - ['apple', 'banana', 'orange']
// Итеруясь по массиву взять каждую строку и возвести первый символ в верхний регист
// ['Apple', 'Banana', 'Orange']

// let str = ['apple', 'banana', 'orange'];

// const upperCaseedArray = str.map(eachString => {
//     // берем символ из индекса 0, и переводим в верхний регистр
//     const firstCharacterToUpperCase = eachString.charAt(0).toUpperCase();
//     // отрезаем текст с индекса 1 до конца
//     const restText = eachString.slice(1)
//     // прибавляем их друг к другу
//     return firstCharacterToUpperCase + restText
// })

// console.log(upperCaseedArray);

// // 9 substring - это метод который возращает подстроку
// console.log(string.substring(1,4));

// 10 paddStart - добавялет к началу строки подстроку до достижения определенной длину
// console.log("4150".padStart(16, "*"));

// 10 padEnd - добавялет к концу строки подстроку до достижения определенной длину
// console.log("4150".padEnd(16, "*"));

// 11  join - массив трансфиромирует в строку. Принимает как параметр строку, которая является разделитилем
// const arr =  ['apple', 'banana', 'orange'];
// const stringifiedArray = arr.join(", ");
// console.log(stringifiedArray);


// 12 (метод массива) split - трансформирует строку в массив. Как параметр принимат строку. Она служит для того чобы показать каким способом происходит разделение элементов в масиве

// console.log(string.split(" "));

// Задание 2:
// '1432567288889223'
//  взять последние 4 символа
// ************9223


let cardN = '14325672888829223';
// берем последние 4 элемента из строки
const lastFoursElemets = cardN.slice(-4); // 9223
// подставляем к данной переменной * и делаем так чтобы сумарная длина была ровна длинне "cardN" 
console.log(lastFoursElemets.padStart(cardN.length, '*'));