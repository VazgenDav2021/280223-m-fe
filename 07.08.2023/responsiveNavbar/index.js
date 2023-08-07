const burgerBtn = document.querySelector(".navbar_burger");
const menu = document.querySelector(".navbar_menu");


burgerBtn.addEventListener("click", ()=>{
    menu.classList.toggle("active")
});