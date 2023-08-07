// инициализация массива
const users = [
    {
        "name": "Alice",
        "salary": 60000,
        "city": "New York",
        "image": "./download.jpeg"
    },
    {
        "name": "Bob",
        "salary": 55000,
        "city": "Los Angeles",
        "image": "./download.jpeg"
    },
    {
        "name": "Charlie",
        "salary": 75000,
        "city": "Los Angeles",
        "image": "./download.jpeg"
    },
    {
        "name": "David",
        "salary": 45000,
        "city": "Houston",
        "image": "./download.jpeg"
    },
    {
        "name": "Eva",
        "salary": 70000,
        "city": "San Francisco",
        "image": "./download.jpeg"
    },
    {
        "name": "Frank",
        "salary": 62000,
        "city": "Los Angeles",
        "image": "./download.jpeg"
    },
    {
        "name": "Grace",
        "salary": 58000,
        "city": "Boston",
        "image": "./download.jpeg"
    },
    {
        "name": "Henry",
        "salary": 50000,
        "city": "Los Angeles",
        "image": "./download.jpeg"
    },
    {
        "name": "Ivy",
        "salary": 48000,
        "city": "Atlanta",
        "image": "./download.jpeg"
    },
    {
        "name": "Jack",
        "salary": 68000,
        "city": "Denver",
        "image": "./download.jpeg"
    }
];


// функция для отрисовки пользователей
const renderUsers = () => {
    // создаем обертку для всех пользователей
    const container = document.createElement("div");
    // добавляем обертки класс
    container.classList.add("container");
    // добавляем новасозданную обертку в тег body который находится в нашем html документе
    document.body.prepend(container);

    //1. Для отрисовки всех пользователей, используя метод foreac пробегаемся по массиву польователей
    // и создаем для каждого пользователья элементы для показа его информации

    // 2. Для того чотбы кажды раз не пистаь "eachUser.src, eachUser.name и тд" я сразу деструктуризирую объект пользователя
   const info  =  users.map(({ name, salary, city, image }, index) => {
        // С 80 - 85 строку циклично создаем элементы для отаброжения информации для каждого пользователья
        const img = document.createElement("img");
        const nameTitle = document.createElement("p");
        const salaryTitle = document.createElement("p");
        const cityTitle = document.createElement("p");
        const eeachUser = document.createElement("div")


        // Как мы создали элементы для показа, начинаем их заполнять
        img.src = image;
        img.alt = "Some Image"
        nameTitle.textContent = `name: ${name}`;
        salaryTitle.textContent = `salary: ${salary > 50000 ? `${salary} (rich)` : `${salary}`}`;
        cityTitle.textContent = `city: ${city === 'Los Angeles' ? `${city} 🌴` : `${city}` }`;

        // Как мы добавили занчение каждому элементу, надо все эти элементы во время окончания каждого круга (цикла) добавить их в обертку каждого ползователья
        eeachUser.prepend(img, nameTitle, salaryTitle, cityTitle);
        // Добавляем класс каждому пользователью
        eeachUser.classList.add(`eachUser_${index + 1}`);
        if (city ==="Los Angeles"){
            eeachUser.classList.add("sunny")
        }
        // Под конец каждой итерации добаляем наших пользоватлей в общий контейнер "container"
        container.append(eeachUser);
        return eeachUser;
    })

    info.forEach(eachElement=>{
        eachElement.classList.add("Antony");
    });
}


// слушатель события на весь докумнет. "Когда у меня DOM прогрузится то запусти функцию "renderUsers""
document.addEventListener("DOMContentLoaded", renderUsers)
