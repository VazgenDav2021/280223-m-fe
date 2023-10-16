import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, decrement, incrmenet, removeUser } from './featrues/actions/action';
import './App.css'


const ChildComponent = () => {
  // с помощю метода useSelector получаем глобальное общее хранилище данных
  // const result = useSelector(state=>state)
  // const counter = useSelector((vazgenState) => vazgenState.counter);
  const { counter } = useSelector((vazgenState) => vazgenState.counter);
  return <>
    <h1>{counter}</h1>
    <ButtonsComponent />
  </>
}

const ButtonsComponent = () => {
  // Создаем переменную dispatch котора ровна вызовы хука useDispatch
  // Данная переменная явялется функции для передачии acio creator в редуюсер для изменения store
  const dispatch = useDispatch();

  const addToOne = () => {
    // вызываем даную функию и в нее в качестве параметра передаем incrmenet для увелечения значения на 1
    dispatch(incrmenet())
  }

  const minusOne = () => {
    dispatch(decrement())
  }

  return <>
    <button onClick={minusOne}>-</button>
    <button onClick={addToOne}>+</button>
  </>
}


const UserList = () => {

  // берем список пользоватлей из нашего общего хранилищя
  const {users} = useSelector(state=>state.users)
  return <div>
    {users?.map((eachUser, index) => (<li key={index}>{eachUser.name}</li>))}
  </div>
}


const Users = () => {
  // храним локлаьное состояния для добавления пользователя
  const [user, setUser] = useState({ name: "", age: "" })
  const dispatch = useDispatch()

  // здесь изменяем состояние исходя из какго инпута у нас вызыватся данная функция
  const handleChangeUserValue = (e) => {
    setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  // создаем функцию для того чтобы вызвать функцию dispatch с параметром addUser для добавлнения нового пользователя
  const onAddUser = () => {
    dispatch(addUser(user))
    // очищаем поля
    setUser({name:'', age:""})
  }  

  return <div>
    <label>
      Name: <input type='text' name='name' value={user.name} onChange={handleChangeUserValue} />
      age: <input type='text' name='age' value={user.age} onChange={handleChangeUserValue} />
      <button onClick={onAddUser}>Add user</button>
    </label>

    <UserList />
  </div>
}


const App = () => {
  return (
    <div>
      <ChildComponent />
      <Users />
    </div>
  )
}

export default App