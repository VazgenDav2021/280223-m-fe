function getUsers() {
    // создали промис для получения пользователей
    return new Promise((resolve, reject) => {
        // делаем запорс на адресс https://jsonplaceholder.typicode.com/users
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            // делаем проверку если запрос пошел не успшено то делаем reject
            console.log(response);
            if (!response.ok) {
                reject("Ошибка во врмя запорса")
            }
            // если запорс пошел успешно то форматируем данные и передаем по цепочке
            return response.json();
        }).then(data => {
            // после форматироцание данных их получаем
            resolve(data)
        }).catch(error => {
            // отрабатываем ошибку которая приходит с бэкенда
            reject(error)
        })

    }).then(users => {
        // получаем эелемт списка через id
        const userList = document.getElementById('userList');
        // если кликнем еще раз пусть очистита текущий список
        userList.innerHTML = '';

        // перебираем пользователей
        users.forEach(user => {
            const { id, name, username, email } = user
            // создаем для каждого пользоветля div
            const userItem = document.createElement('div');
            // добавляем к этому элементу класс
            userItem.classList.add('user-item');
            // в содержимое устанавливаем user.id
            userItem.textContent = id;
            // с 35 по 41 строку создаем элменеты для каждого пользователя и их создаем
            const userName = document.createElement('p');
            userName.textContent = `name  ${name}`;
            const userFullName = document.createElement('p');
            userFullName.textContent = `Full name: ${username}`;
            const userMail = document.createElement('p');
            userMail.textContent = `email: ${email}`;

            // добавляем все элементы в карточку пользовател1
            userItem.append(userFullName, userName, userMail);
            // саму карточку в контейнер
            userList.append(userItem);
        })


    }).catch(error => {
        console.log({ error });
    })
}

document.getElementById("button").addEventListener("click", getUsers)




