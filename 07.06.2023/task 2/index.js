const toggleBtn = document.querySelector(".navbar__togleBtn");
const menu = document.querySelector(".navbar__menu");

// Здесь обрабатывасется клик на бургер
toggleBtn.addEventListener("click", () => {
  // При клике на бургер будет проверка если у элемента menu есть класс
  //    acitve то убери его если нет то добавь
  menu.classList.toggle("active");
});
