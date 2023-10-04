import React, { useMemo, useState } from 'react'

export default function App() {
  const [example, setExample] = useState(false);

  const oneMillion = useMemo(() => {
    console.log("Я сделаю тот же расчет еще раз")
    let number = 0
    for (let i = 0; i < 1000000; i++) {
      number++
    }
    return number
    // если в массив зависимостей добавить переменную example то данный расчет будет происходить столько раз сколько раз менятся значения example
  }, [])

  const toggleState = () => {
    setExample(prevState => !prevState);
  }

  return (
    <div>
      {oneMillion}
      <br />
      <br />
      <br />
      <button onClick={toggleState}>Click</button>
      <h1>{example ? "Hello" : "null"}</h1>
    </div>
  )
}


// 1. Создать оберточный(Аpp) компонент в котором есть состояние count, есть еще и кнопка которая увеличивает значение count на единицу
// 2. Создать второй дочерний компонент который импортируется в первый, и во втором написать с помощю useMemo закешированние значение стиля по border

// если count = 0 то бордера быть не должно
// если count = 1 то бордер 1px solid red
// если count = 2 то бордер 2px solid red
// если count = 3 то бордер 3px solid red
// если count больше 3х то тогда border 10p solid blue