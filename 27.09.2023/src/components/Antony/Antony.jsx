import React, { useState } from 'react';

export default function Example() {
    let [counter, setCounter] = useState(1);

    const upCounter = () => {
        setCounter(prevState => prevState + 3)
    }

    const downCounter = () => {
        setCounter(prevState => {
            return prevState - 3 <= 0 ? prevState : prevState - 3
        })
    }

    return <div>
        <button onClick={upCounter}>upCounter</button>
        <h1>{counter}</h1>
        <button onClick={downCounter}>downCounter</button>
    </div>
}