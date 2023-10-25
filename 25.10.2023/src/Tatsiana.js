import React, { createContext, useContext } from 'react'

const ThemeContext = createContext();

const ThemePorivder = ({ children }) => {
    const mode = 'light'
    return <ThemeContext.Provider value={mode}>
        {children}
    </ThemeContext.Provider>
}


const App = () => {
    return (
        <ThemePorivder>
            <ChildComponent />
        </ThemePorivder>
    )
}

const ChildComponent = () => {
    const mode = useContext(ThemeContext)

    const background = mode === "dark" ? "black" : "yellow"

    const styels = {
        width:"200px",
        height:"200px",
        background,
    }

    return <div style={styels}></div>

}

export default App;