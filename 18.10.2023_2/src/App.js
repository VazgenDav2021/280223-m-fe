import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, fetchUsersFail, fetchUsersSucces } from './features/action';

const App = () => {
  const dispatch = useDispatch()
  const {users,loading,error} = useSelector(state=>state.users);

  const getUsers = async()=>{
    // при начале запроса вызвать fetchUsers для того чтобы поменять флажок loading на true
    dispatch(fetchUsers())
    await fetch('https://jsonplaceholder.typicode.com/users').then(async data=>{
      const res = await data.json()
      // при успшеном запросе добавить в наш стор дату котора пришла из сервера
      dispatch(fetchUsersSucces(res))
    }).catch(()=>{
      // если пошло что то не таки отправить сигнал нашему редаксу что запрос провален
      dispatch(fetchUsersFail())
    })
  }

  useEffect(()=>{
    getUsers()
  },[])

  return (
    <div>App</div>
  )
}

export default App