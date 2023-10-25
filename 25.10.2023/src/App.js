import React, { createContext, useContext } from 'react'
import { ChildComponent } from './ChildComponent';


// сперва надо создать контекст
export const MyFirstContext = createContext();

// создаем провайдер для передачи данных в наше приложение
function MyProvider({ children }) {
  const userInfo = {name:"Vazgen", age:22}

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






export default App
