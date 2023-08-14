const transactionsContainer = document.querySelector('.transactions');


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


const renderIcon = (currency) => {
    if (currency === "USD") {
        return "$";
    } else if (currency === "EUR") {
        return "€";

    } else if (currency === "RUB") {
        return "₽";
    }
}

for (let index = 0; index < transactions.length; index++) {
    const transactionElem = document.createElement('div');
    const fromElem = document.createElement('p');
    fromElem.innerText = transactions[index].from;

    const currencyElem = document.createElement('p');
    currencyElem.innerText = `${transactions[index].amount} ${renderIcon(transactions[index].currency)}`;

    const toElem = document.createElement('p');
    toElem.innerText = transactions[index].to

    transactionElem.append(fromElem, currencyElem, toElem);

    transactionsContainer.append(transactionElem);

  
    transactionsContainer.append(transactionElem);
}


