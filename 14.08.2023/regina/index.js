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

for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    console.log("от: " + transaction.from);
    console.log("сумма: " + transaction.amount + getCurrencySymbol(transaction.currency));
    console.log("к: " + transaction.to);
}

function getCurrencySymbol(currency) {
    if (currency === "USD") {
        return "$";
    } else if (currency === "EUR") {
        return "€";
    } else if (currency === "RUB") {
        return "₽";
    } else {
        return "";
    }
}