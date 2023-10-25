// import React, { createContext } from 'react'
// import { ChildComponent } from './ChildComponent';


// // сперва надо создать контекст
// export const MyFirstContext = createContext();

// // создаем провайдер для передачи данных в наше приложение
// function MyProvider({ children }) {
//   const userInfo = { name: "Vazgen", age: 22 };

//   // в качестве глобального значение будет myData так как мы ее передаем в качестве пропа в Provider
//   return <MyFirstContext.Provider value={userInfo}>
//     {children}
//   </MyFirstContext.Provider>
// }


// //  после создания провайдера мы наше приложение обарачиваем в него
// const App = () => {
//   return (
//     <MyProvider>
//       {/* <ChildComponent /> */}
//     </MyProvider>
//   )
// }



// // Anotony: Создать массив пользователей (CHAT GBT) в контексте и отрисовать в дочерних компонетах использовав react context
// // Zhanna Regina: создать объект пользователя с значение имя, возраст и пол. Используя react context передать данные в дочерних Компонент и отрисовать
// // Tatsiana: создать переменную mode у кторого значение может быть "light" "dark" пердав его в дочерних компонент сделать проверку если mode dark то задний цвет компонента черных ели нет до розовый



// export default App



import React, { createContext, useContext, useEffect, useState } from 'react';

// создаем контекст для переброски пользвоатлеей и их методов к компонентам
const UsersContext = createContext();


// создаем провайдер для обетки приложения
const UsersProvider = ({ children }) => {
  // создаем состояние для хранение и изменения списка пользователей
  const [users, setUser] = useState([]);

  const getUsers = async() =>{
    await fetch('https://jsonplaceholder.typicode.com/users').then(async(data)=>{
      const res = await data.json()
      setUser(()=>([...res]))
    })
  }

  useEffect(()=>{
    getUsers()
  },[])

  // добавление нового пользователя в список
  const addUser = (newUser) => {
    setUser((currentUsers) => ([...currentUsers, newUser]))
  }

  // удаление пользователя из списка через id
  const deleteUser = (userId) => {
    setUser((currentUsers) => currentUsers.filter(eachUser => eachUser.id !== userId))
  }

  // изменение пользоватлея(изменяем только имя)
  const editUser = (editUser) => {
    setUser(currentUsers => {
      return currentUsers.map(eachUser => {
        return eachUser.id === editUser.id ? editUser : eachUser
      })
    })
  }

  // Говорим что пробрасвыем обект со значением во все те компоненты которые были обернуты UsersContext.Provider
  return <UsersContext.Provider value={{ users, addUser, deleteUser, editUser }}>
    {children}
  </UsersContext.Provider>
}

const EachUser = ({ email, id, username }) => {
  // берем методы для удаления и редактиорвания пользователя
  const { deleteUser, editUser } = useContext(UsersContext)


  // с 92 по 99 строку создаем функции для того чтобы в onlick не передавать callback
  const handleDeleteUser = () => {
    deleteUser(id)
  };

  const hadnleEditUser = () => {
    editUser({ email, id, username: "Edit" })
  }

  return <li>{username}
    <button onClick={handleDeleteUser}>Delete</button>
    <button onClick={hadnleEditUser}>Edit</button>
  </li>
}

const AddUser = () => {
  // берем метод addUser из контекста для добавления нового пользователя
  const { addUser } = useContext(UsersContext)
  // состояние для хранения значения введеного в input 
  const [inputValue, setInputValue] = useState("")

  // функция для изменения состояния в котором хнраится значения input
  const handleChange = (e) => setInputValue(e.target.value)

  // фунцкия котороя вызвыает метод addUser для добацления пользователя в список
  const handleAddUser = () => {
    // делаем проверку если в инпуте введен хоть один символ то запусакем след функционал
    if (inputValue.length) {
      // создае новый объект с id Date.now (не очень хорошая практика), username в котром хранится значение input
      const newUser = { id: Date.now(), username: inputValue }
      // новазданный объект пользователя передаем в качестве параметра метод addUser
      addUser(newUser)
      // В конце очищаем input
      setInputValue("");
    }
  }

  return <div>
    <h1>Add User</h1>
    <input type='text'
      value={inputValue}
      onChange={handleChange}
    />
    <button onClick={handleAddUser}>Add User</button>
  </div>
}

const Users = () => {
  // берем всех пользоватлейе через контекст
  const { users } = useContext(UsersContext);
  return <>
  {/* итерируемо показываем каждого пользователя */}
    {users?.map(eachUser => {
      return <EachUser key={eachUser.id} {...eachUser} />
    })}
    <AddUser />
  </>
}



const App = () => {
  return (
    // Обарачиваем Users в UsersProvider для получения всех значеиий и методов
    <UsersProvider>
      <Users />
    </UsersProvider>
  )
}


// 1 Создать каунтер с помщю react context
// 2 Должно значение и функции для увеличения и уменьшения значения

export default App