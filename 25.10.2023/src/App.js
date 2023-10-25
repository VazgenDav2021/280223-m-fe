import React, { createContext } from 'react'
import { ChildComponent } from './ChildComponent';


// сперва надо создать контекст
export const MyFirstContext = createContext();

// создаем провайдер для передачи данных в наше приложение
function MyProvider({ children }) {
  const userInfo = { name: "Vazgen", age: 22 };

  // в качестве глобального значение будет myData так как мы ее передаем в качестве пропа в Provider
  return <MyFirstContext.Provider value={userInfo}>
    {children}
  </MyFirstContext.Provider>
}


//  после создания провайдера мы наше приложение обарачиваем в него
const App = () => {
  return (
    <MyProvider>
      <ChildComponent />
    </MyProvider>
  )
}



// Anotony: Создать массив пользователей (CHAT GBT) в контексте и отрисовать в дочерних компонетах использовав react context
// Zhanna Regina: создать объект пользователя с значение имя, возраст и пол. Используя react context передать данные в дочерних Компонент и отрисовать
// Tatsiana: создать переменную mode у кторого значение может быть "light" "dark" пердав его в дочерних компонент сделать проверку если mode dark то задний цвет компонента черных ели нет до розовый



export default App
