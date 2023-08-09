const addButton = document.querySelector(".btn_add");
const form = document.querySelector('.form');
const name = document.querySelector('.name');
const surname = document.querySelector('.surname');
const age = document.querySelector('.age');
const container = document.querySelector(".container");

let users = [];


function renderUsers() {
    // берем пользователей и циклично добавляем их в html
    users.forEach(({ name, surname, age }) => {
        const eachuserConitainer = document.createElement("div");
        eachuserConitainer.classList.add("eachUser");
        const nameP = document.createElement("p");
        const surnameP = document.createElement("p");
        const ageP = document.createElement("p");

        nameP.textContent = name;
        surnameP.textContent = surname;
        ageP.textContent = age;
        eachuserConitainer.prepend(nameP,surnameP,ageP);
        container.prepend(eachuserConitainer);
    })

    // для того чтобы не было дубликации унформации мы очищаем наш массив
    users = [];
}

function addNewUserToArray({ nameValue, surnameValue, ageValue }) {
    // когда получили значения сразу же добавляем в массив users нового пользователя
    users.push({ name: nameValue, surname: surnameValue, age: ageValue })
    // как добавили нового пользователя, к элементу формы добавляем класс hidden для того чтобы форма пропала
    form.classList.add("hidden")
    // как форма пропала мы начинаем отрисовку пользователей
    renderUsers()
}


// при клике на конпку "добавить" удалить из элмента form класс под названием hidden
addButton.addEventListener("click", () => {
    form.classList.remove("hidden");
});


// когда у нас форма уже видна мы заполняем данные и хотим засабмитить форму
// для этого навешиваем на форму обработчик события "submit"
// Во время сабмита у нас появляется элемент event с кототрым можно работать
form.addEventListener("submit", (event) => {
    // когда сабмитим форму по дефолтному поведнию браузера страница обнавляется
    // поэтому мы пишем 48 строку чотбы отменить дефлтное поведение браузера
    event.preventDefault();

    // от 50 по 53 строку берем занчения импутов
    const nameValue = name.value;
    const surnameValue = surname.value;
    const ageValue = age.value;

    // передаем значения в функцию addNewUserToArray
    addNewUserToArray({  nameValue,  surnameValue, ageValue });
});