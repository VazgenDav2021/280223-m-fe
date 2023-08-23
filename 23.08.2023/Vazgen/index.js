// 1. Написать промыт для получения id пользователя
// 2. Как получили id пользователя делать запрос по этому адресу “https://jsonplaceholder.typicode.com/users/id пользователя”
// 3. Вывести данного пользователя в консоль



const getUserIdAndRenderIt = () => {
    // берем значение id
    const userId = prompt("enter user id")
    return new Promise((resolve, reject) => {
        // делаем запорс на адресс https://jsonplaceholder.typicode.com/users
        // с помощю интепраляции ставим id
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(response => {
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
    }).then(currentUsers => {
        // получаем нашего конкретного пользователя
        console.log({ currentUsers });
    }).catch(error => {
        console.log({ error });
    })
}

getUserIdAndRenderIt()