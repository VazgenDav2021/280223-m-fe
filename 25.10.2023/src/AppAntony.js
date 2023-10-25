import React, { createContext, useContext } from 'react'

// создаем контекст
const Context = createContext();

// создаем значгение для его передачи в качестве глобального значения
const users = [
    { username: "user1", email: "user1@example.com" },
    { username: "user2", email: "user2@example.com" },
    { username: "user3", email: "user3@example.com" },
    { username: "user4", email: "user4@example.com" },
    { username: "user5", email: "user5@example.com" },
    { username: "user6", email: "user6@example.com" },
    { username: "user7", email: "user7@example.com" }
]

// создаем провайдер для обертки начерго приложения и передачи данных во все компоненты
function ContextProvider({ children }) {
    return <Context.Provider value={users}>
        {children}
    </Context.Provider>
}

// Обарачиваем наше приложение в провайдер для того чтобы все компоненты нашего приложения могли ползьватся users
const AppAntony = () => {
    return (
        <ContextProvider>
            <ChildComponent />
        </ContextProvider>
    )
}

// после того как AppAntony был обернут в ContextProvider уже ChildComponent имеет доступ к глобльным значениям users
function ChildComponent() {
    // с помощю хука useContext с параметром Context получаем users
    const usersFromContext = useContext(Context)
    return <div>
        {usersFromContext.map(({ username, email }, index) => {
            return <li key={index}>{username}</li>
        })}
    </div>
}

export default AppAntony