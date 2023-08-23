// // 1

// // создаю переменную для хранение возраста
// const userAge = +prompt("How old are you", 17)


// // создаю промис который обещает мне вернуть или успшеный или ошибочный ответ
// const promise = new Promise((resolve, reject) => {
//     // если данное услоиве верно то промис отработал успшено
//     if (userAge >= 18) {
//         resolve("You are adult and can buy alcohol")
//     } else {
//         // если данное условие неверно то промис отработал с ошибко
//         reject("ERROR!")
//     }
// })

// // если  зарабитал "reslove" то из цепочки зработает then, finally
// // если  зарабитал "reject" то из цепочки зработает catch, finally
// promise.then(result => {
//     console.log("Success", result);
//     return 1
// }).catch(error => {
//     console.log("Error", error);
// }).finally(() => {
//     console.log('final');
// })


// 2 

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
    }).then(users => console.log({ users })).catch(error => {
        console.log({ error });
    })
}


// делаем вызов функции для получение пользователей или подсвечивание ошибок
// getUsers().then(users => console.log({ users })).catch(error => {
//     console.log({ error });
// })


document.getElementById("button").addEventListener("click", getUsers)