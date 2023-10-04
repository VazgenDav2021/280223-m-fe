// import React, { useEffect, useRef } from 'react';

// function AutoFocusInput() {
//     // Создаем реф для инпута
//     const inputRef = useRef(null);

//     const handleExample = () => {
//         // Проверяем, что инпут существует
//         if (inputRef.current) {
//             // Устанавливаем фокус на инпут
//             inputRef.current.focus();
//         }
//     }

//     // Используем useEffect для установки фокуса при загрузке компонента
//     useEffect(() => {
//         handleExample()
//     }, []); // Пустой массив зависимостей гарантирует, что эффект сработает только при монтировании компонента

//     return (
//         <div>
//             <h2>AutoFocus Input</h2>
//             {/* навешиваем ref на элемент inputa */}
//             <input ref={inputRef} type="text" placeholder="Type something..." />
//         </div>
//     );
// }

// export default AutoFocusInput;


// // 1 Создать переменную через реф внутри компонента
// // 2 Создать counter который увеличывается на 1ицу
// // 3 С помощю использования ref написать сколько раз отрендерился компонент
// // "Комопнент отрендерился 4 раза"



import React, { useState, useEffect, useRef } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const renderCount = useRef(1); // Создаем переменную ref и инициализируем её значением 0

    useEffect(() => {
        renderCount.current += 1; // Увеличиваем значение переменной ref при каждом рендере
    }, [count]);

    return (
        <div>
            <p>Счетчик: {count}</p>
            <p>Количество рендеров: {renderCount.current}</p> {/* Отображаем количество рендеров */}
            <button onClick={() => setCount(count + 1)}>Увеличить</button>
        </div>
    );
}

export default Counter;
