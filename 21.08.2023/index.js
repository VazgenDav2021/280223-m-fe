function example (){
    console.log("Я буду вызыватся кажду секунды");
}

const intervalId = setInterval(example, 1000);

setTimeout(() => {
    clearInterval(intervalId);
}, 4000)


// document.querySelector("button").addEventListener("click", () => {
//     setTimeout(function timer() {
//         console.log('You clicked the button!');
//     }, 2000);
// })