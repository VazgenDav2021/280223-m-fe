import React from 'react'
import { useSelector } from 'react-redux'

const App = () => {
    // с помощю метода useSelector получаем глобальное общее хранилище данных
    // const result = useSelector(state=>state)
    // const counter = useSelector((vazgenState) => vazgenState.counter);
    const { counter } = useSelector((vazgenState) => vazgenState);
   
  return (
    <div>{counter}</div>
  )
}

export default App