import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrmenet } from './featrues/actions/action';

const App = () => {
    // с помощю метода useSelector получаем глобальное общее хранилище данных
    // const result = useSelector(state=>state)
    // const counter = useSelector((vazgenState) => vazgenState.counter);
    const { counter } = useSelector((vazgenState) => vazgenState);

  // Создаем переменную dispatch котора ровна вызовы хука useDispatch
  // Данная переменная явялется функции для передачии acio creator в редуюсер для изменения store
    const dispatch = useDispatch();

  const addToOne = () =>{
    dispatch(incrmenet())
  }

  return (
    <div>{counter}
    <button onClick={addToOne}>+</button>
    </div>
  )
}

export default App