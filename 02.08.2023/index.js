// Пример 1

// const title = document.getElementById("title");
// const paragraph = document.querySelector("p");
// const myButton = document.querySelector(".btn");


// // Для того чотбы повесиьт функционал клика кнопку или на любой деугой элемент пишем:
// // 1. Название переменной с пмощью кторого мы обратились к элементу
// // 2. После назване названия ставим точку и пишем метод addEventListener - повесь обраотчик события на данный элемент
// // 3. Метод addEventListener принмает 2 параметра. Первый параметром это тип события (в данном случае клик)
// // 4. Вторым параметром идет функция которая должна сработать при каждом клике

// myButton.addEventListener("click", () => {
//     title.textContent = "Hello From JS file";
// });

// myButton.addEventListener("dblclick", () => {
//     paragraph.style.color = 'red';
// });


// Пример 2 
// const myAllSpans = document.querySelectorAll("span");
// const myAllSpans = document.querySelectorAll(".span");
// console.log({ myAllSpans });

// for(let i=0; i < myAllSpans.length; i++){

//     if(i%2==0){
//         myAllSpans[i].style.background = "green"
//     } else {
//         myAllSpans[i].style.background = "yellow"
//     }
// }


// const myAllSpans = document.getElementsByTagName("span")
// console.log(myAllSpans);

// for(let i=0; i < myAllSpans.length; i++){

//     if(i%2==0){
//         myAllSpans[i].style.background = "green"
//     } else {
//         myAllSpans[i].style.background = "yellow"
//     }
// }


// const span = document.querySelector("span");
// console.log({span});


// Пример 3 

// const myButton = document.querySelector(".btn");
// const block = document.querySelector(".block");

// myButton.addEventListener("click", () => {
//     block.classList.add("container")
// });

// myButton.addEventListener("dblclick", () => {
//     block.classList.remove("container")
// });

// myButton.addEventListener("click",()=>{
//     block.classList.toggle("container");
// })


// // Zhanna
// myButton.addEventListener("click", () => {
//     block.classList.add("container");
//     if (block.style.display == 'block') {
//         block.style.display = 'none';
//     } else {
//         block.style.display = 'block';
//     }
// });


// Пример 4

