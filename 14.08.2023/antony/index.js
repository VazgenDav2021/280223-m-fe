const transactions = [
    {
        from: "Jhon Kanday",
        amount: 3500,
        currency: "USD",
        to: "Lu Kan"
    },
    {
        from: "Ember Antony",
        amount: 2140,
        currency: "EUR",
        to: "Jerar France"
    },
    {
        from: "Vazgen Davtyn",
        amount: 300000,
        currency: "RUB",
        to: "Emil Poghosyan"
    }
]

let info = document.querySelector("#info")
let body = document.querySelector("body");

for (let i in transactions) {
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let div = document.createElement("div");
    p2.style.margin = "5px";
    p3.style.margin = "5px";
    p4.style.margin = "5px";
    div.style.margin = "10px";
    div.style.border = "1px solid #323232";
    div.style.borderRadius = "10px";
    p2.textContent = `от:${transactions[i].from}`;
    p3.textContent = `сумма:${transactions[i].amount}`;
    p4.textContent = `к:${transactions[i].to}`;
    if (transactions[i].currency === "USD")
        p3.textContent += "$";
    else if (transactions[i].currency === "EUR")
        p3.textContent += "€";
    else if (transactions[i].currency === "RUB")
        p3.textContent += "₽";

    info.appendChild(div);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
    body.appendChild(info);

}