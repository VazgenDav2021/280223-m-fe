
import React, { useEffect, useState, useCallback } from "react";

export default function App() {
    const [counter, setCounter] = useState(0);

    // пересоздаетдя каждый раз когда происходит ререндер (из  за counter)
    const updateOne = () => {
        console.log(
            "Я не мемоизирован"
        );
    };

    // создает один раз поскольку мы в него не передали значение counter в массив завимостей
    const updateTwo = useCallback(() => {
        console.log(
            "Я мемоизирован!", { counter }
        );
    }, []);

    return (
        <div className="App">
            <button onClick={() => setCounter(counter + 1)}>One</button>
            <br />
            <Child updateOne={updateOne} updateTwo={updateTwo} />
        </div>
    );
}


function Child({ updateOne, updateTwo }) {
    // ставим "слушатель" если изменится updateOne то вызви функци updateOne. Она будет вызвыатся каждый раз когда у нас рендерится компонент App
    // и будет заного создавать функцию updateOne  и из за того что каждый раз у нас занго создается функция updateOne
    // то она у нас тут вызывается
    useEffect(() => {
        updateOne();
    }, [updateOne]);

    // данная функция сработает один раз при загузке страницы, поскольку функция updateTwo закешированная и она зангоо не пересоздается
    useEffect(() => {
        updateTwo();
    }, [updateTwo]);

    return <div className="App" />
}