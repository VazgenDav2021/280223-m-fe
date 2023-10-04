import React, { useEffect, useRef, useState } from 'react'
import Zhanna from './Zhanna'
import Anotny from './Antony'

const App = () => {
    const inputRef = useRef(null);
    const inputFocus = useRef(null);

    useEffect(() => {
        // во время рендера делается проверка если в inputFocus.current есть правилное значение
        if (inputFocus.current) {
            // то на тот элемент на который повешен данный "ref" пусть будет фокус
            inputFocus.current.focus();
        }
    }, []);

    const handleChangeInputValue = (e) => {
        inputRef.current = e.target.value
    }

    console.log('Я отрендерился');

    const submit = () => {
        console.log({ inputRef: inputRef.current });
    }

    return (
        <div>

            {/* навешиваем на input  inputFocus
            <input type='text' ref={inputFocus} value={inputRef.current} onChange={handleChangeInputValue} />
            <button onClick={submit}>Submit</button> */}
            <Zhanna />
            {/* <Anotny /> */}
        </div>
    )
}

// Написать компонент в котором есть инпут
// При загрузки странице сдлеать так чтобы на данный инпут был автоматический фокус с помощю useRef

export default App