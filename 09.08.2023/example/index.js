const outer = document.querySelector(".outer");
const middle = document.querySelector(".middle");
const inner = document.querySelector(".inner");

outer.addEventListener("click", (event)=>{
    console.log("Кликнули на элемент outer");
})

middle.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Кликнули на элемент middle");
})

inner.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Кликнули на элемент inner");
})