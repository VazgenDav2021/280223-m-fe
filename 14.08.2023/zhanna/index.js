const transacsions = [
    {
        from: "Jhon Kanday",
        amount: 3500,
        currency: "USD",
        to: "Lu Kan"
    },
    {
        from: "Ember Antony",
        amount: 2140,
        currency: "EUR",
        to: "Jerar France"
    },
    {
        from: "Vazgen Davtyn",
        amount: 300000,
        currency: "UAH",
        to: "Emil Poghosyan"
    }
]

// циклично показать каждую трансзакцию
// Прoверять если валются доллар то после amount ставим значок доллора => 3500$, валюта евро => 2140€ и тд


// // создаем контейнер для отаброжение карточек
// const container = document.createElement('div');
// // добавить к этому элементу класс контейнер
// container.classList.add('container');


// // функция для проверки валюты и возращает значок соответствующий этой валюте
// function currency(obj) {
//     if (obj.currency === "USD") {
//         return '$';
//     }
//     else if (obj.currency === "EUR") {
//         return '€';
//     }
//     else if (obj.currency === "UAH") {
//         return '₴';
//     }
//     else return 'currency';
// }

// // перебираем массив с нашими элементами
// transacsions.forEach(elem => {
//     // создаем карточку для записи итерируемого элемента массива
//     const card = document.createElement('div');
//     // назначаем класс к элементу
//     card.classList.add('card');
//     // создаем 3 строки с помощю тега параграф
//     const paragraph1 = document.createElement('p');
//     const paragraph2 = document.createElement('p');
//     const paragraph3 = document.createElement('p');


//     // после создания трех параграфоф через интерполяцию...
//     paragraph1.innerHTML = `from: ${elem.from}`;
//     paragraph2.innerHTML = `amount: ${elem.amount} ${currency(elem)}`;
//     paragraph3.innerHTML = `to: ${elem.to}`;

//     // добавляем карточку все 3 параграфа
//     card.append(paragraph1, paragraph2, paragraph3);
//     // в контейнер добавляем карточку
//     container.append(card);
// })

// // в конце добавляем контейнер в документ
// document.body.append(container);



// InserAdjacentHTML

function renderCurrency(obj) {
    if (obj.currency === "USD") {
        return '$';
    }
    else if (obj.currency === "EUR") {
        return '€';
    }
    else if (obj.currency === "UAH") {
        return '₴';
    }
    else return 'currency';
}

const container = document.createElement('div');
container.classList.add('container');
let html = '';

transacsions.forEach(({from,amount,to,currency})=>{
    html += `
        <div class="card">
            <p>от:${from}</p>
            <p>сумма:${amount} ${renderCurrency(currency)}</p>
            <p>к:${to}</p>
        </div>
    `
})

container.classList.add("container")
document.body.appendChild(container)
container.insertAdjacentHTML("beforebegin", html)