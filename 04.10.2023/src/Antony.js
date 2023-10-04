import React, { useRef, useState, useEffect } from 'react'

const App = () => {
    // создается реф для сохраненя количства перерисовок
    const inputRef = useRef(null);
    let [counter, setCounter] = useState(0);

    useEffect(() => {
        // данная функция будет срабатывать каждый раз когда меняется counter и увеличивать значения ref на единицу
        inputRef.current++;
        console.log("Компонент отрендерился:", inputRef.current);
    }, [counter]);


    const incrmeentCount = () => {
        setCounter((prevState) => prevState + 1);
    }

    return (
        <div>
            <button onClick={incrmeentCount}>Submit</button>
        </div>
    )
}
export default App