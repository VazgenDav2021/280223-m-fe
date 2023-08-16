// //antony
// // созадем функцию для отраброжение
// function generic() {
//     // создаем цикл с итерируемым элементом i до того момента пока не дойдет до рандомного числа
//     for (let i = 0; i < Math.trunc(Math.random() * 20); i++) {
//         // во время каждой итерации создаем div
//         let div = document.createElement('div');
//         // с 9-16 строку задем стили нашему div-у
//         div.style.height = "100px";
//         div.style.width = "100px";
//         // создаем стиль заднего фона и присваеваем рандомное значение для цвета
//         div.style.background = 'rgb(' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ')';
//         // создаем позивию влево относительно body
//         div.style.marginLeft = Math.trunc(Math.random() * 255);
//         // создаем позивию вниз относительно body
//         div.style.marginTop = Math.trunc(Math.random() * 255);
//         // к body добавляем
//         document.querySelector('body').appendChild(div);
//     }
// }
// generic()

// // vazgen

// // function generateRandomValue() {
// //     return Math.trunc(Math.random() * 255)
// // }

// // const WIDTH_HEIGHT = '100px'

// // function generic() {
// //     for (let i = 0; i < Math.trunc(Math.random() * 20); i++) {
// //         let div = document.createElement('div');
// //         div.style.height = WIDTH_HEIGHT;
// //         div.style.width = WIDTH_HEIGHT;
// //         div.style.position = "absolute";
// //         div.style.background = `rgb(${generateRandomValue()}, ${generateRandomValue()}, ${generateRandomValue()})`
// //         div.style.left = `${Math.trunc(Math.random() * window.innerWidth)}px`;
// //         div.style.top = `${Math.trunc(Math.random() * window.innerHeight)}px`;
// //         document.body.appendChild(div);
// //     }
// // }
// // generic()


// TASK 2

function clock (){
    // создаем в которой берем текущее время
    let now = new Date();
    // обращаемся к текущему времени и берем часы
    const hour = now.getHours();
    // обращаемся к текущему времени и берем минуты
    const minuts = now.getMinutes();
    // обращаемся к текущему времени и берем секунды
    const second = now.getSeconds();

    // обращаемся через id localTime и записаиваем туда часы минуты и секунды
    document.getElementById("localTime").textContent = `${hour}:${minuts}:${second}`;
}


// функция которая принимает как параемтр функцию clock и вызывает ее каждую 1000 милесекунд
setInterval(clock,1000)

clock()