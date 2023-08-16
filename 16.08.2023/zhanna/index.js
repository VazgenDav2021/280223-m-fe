// // создаем функцию для генерации случайного ццвета в формате rgb
// function generateRandomColor() {
//     // 3-6 строчку генерируем случайное значение для цветов
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
//     // возращаем значение фунцкии в виде строки, используя интерполяцию
//     return `rgb(${red}, ${green}, ${blue})`;
// }

// // генерируем слочайную позицию 
// function generateRandomPosition() {
//     // генерируем случайное значение для вертикальной позиции
//     // window.innerHeight получаем видимой части окна браузера,
//     // -51 если внизу создался элемент то он не былес за предел окна браузера
//     const top = Math.floor(Math.random() * (window.innerHeight - 51)) + 'px';
//     const left = Math.floor(Math.random() * (window.innerWidth - 51)) + 'px';
//     // возращаем значение функции в виде объекта в виде значении position, top, left
//     return { position: 'absolute', top: top, left: left };
// }

// // генерируем случайного количества и расположение блоков
// function generateRandomDivs() {
//     // генерируем случайное число от 0 до 20
//     const numDivs = Math.floor(Math.random() * 21);
//     // получаем ссылку на тело body
//     const body = document.body;

//     // идет цикл которые генерирует kolihestvo div-ov от 0 do numDivs
//     for (let i = 0; i < numDivs; i++) {
//         // создаем новый div
//         const div = document.createElement('div');
//         // с 34-35 сторку устанавливаем ширину и высоту div-а
//         div.style.width = '50px';
//         div.style.height = '50px';
//         // переменной color присваеваем значение функции generateRandomColor()
//         const color = generateRandomColor();
//         // переменной postion присваеваем значение функции generateRandomPosition()
//         const position = generateRandomPosition();

//         // с 42-45 присваеваем  div-у стили
//         div.style.backgroundColor = color;
//         div.style.position = position.position;
//         div.style.top = position.top;
//         div.style.left = position.left;
        
//         //добавляем в body div-ы
//         body.append(div);
//     }
// }

// generateRandomDivs();



// function generateRandomSize(type) {
//     if (type === 'width') {
//         return Math.random() * (window.innerHeight - 51)
//     } else {
//         return Math.random() * (window.innerWidth - 51)
//     }
// }

// // генерируем слочайную позицию 
// function generateRandomPosition() {
//     // генерируем случайное значение для вертикальной позиции
//     // window.innerHeight получаем видимой части окна браузера,
//     // -51 если внизу создался элемент то он не былес за предел окна браузера
//     const top = Math.floor(generateRandomSize('height')) + 'px';
//     const left = Math.floor(generateRandomSize('width')) + 'px';
//     // возращаем значение функции в виде объекта в виде значении position, top, left
//     return { position: 'absolute', top: top, left: left };
// }


// TASK 2

// создаем div для часов
let clockDiv = document.createElement('div');
// с 81 по 86 строку задаемм стили
clockDiv.style.display = 'inline-block';
clockDiv.style.textAlign = 'center';
clockDiv.style.padding = '20px';
clockDiv.style.backgroundColor = 'yellow';
clockDiv.style.fontSize = '150px';
clockDiv.style.fontFamily = 'Arial';
// добавляем див в body
document.body.append(clockDiv);

// пишем функцию для часов 
function updateClock() {
    // присваеваем к переменой now new Date для того чтобы извлекать часы и минуты и секунды 
    const now = new Date();

    // с 96 по 98 извлекаем часы минуты и секунды
    // для того чтобы их длина была 2 символа делаем padStart
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // с помощю интерполяции создаем сотрку для показа времени
    clockDiv.innerHTML = `${hours}:${minutes}:${seconds}`;
}

// Обновляем часы каждую секунду
// setInterval запускает функцию updateClock каждые 1000 милесекунды
setInterval(updateClock, 1000);

// Инициализация при загрузке страницы
// setInterval вызвыается не сразу поэтому вызываем данную функцию здесь
updateClock();