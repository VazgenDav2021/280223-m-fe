// Zhanna
// let buttons = document.querySelectorAll('.show-modal');
// let buttonClose = document.querySelector('.close-modal');
// let modalDiv = document.querySelector('.modal');
// let hiddenDiv = document.querySelector('.overlay');

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", () => {
//         modalDiv.classList.remove('hidden');
//         hiddenDiv.classList.remove("hidden")
//     });
// }

// buttonClose.addEventListener("click", () => {
//     modalDiv.classList.add('hidden');
//     hiddenDiv.classList.add("hidden")
// });

// Vazgen
let buttons = document.querySelectorAll('.show-modal');
let buttonClose = document.querySelector('.close-modal');
let modalDiv = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

const openModal = ()=>{
    modalDiv.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = () => {
    modalDiv.classList.add("hidden");
    overlay.classList.add("hidden");
};

for(let i=0;i <buttons.length; i++){
    buttons[i].addEventListener("click", openModal);
};

buttonClose.addEventListener("click", closeModal);


overlay.addEventListener("click", closeModal);

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});