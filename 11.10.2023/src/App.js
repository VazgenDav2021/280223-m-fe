import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Navbar from './components/Navbar/Navbar'
import DetailedPage from './pages/DetailedPage/DetailedPage'
import './App.css'

const App = () => {
  return (
    <>
    {/* написали navbar вне routes для того чотбы он всега показывался не смотря на странуцы */}
      <Navbar />
      {/* В компоненте Routes прописываем все маршруты(Route) нашего приложения */}
      <Routes>
      {/* Во время вызова компонента Route даем 2 пропа: path говорим при каком маршруте показывать компонент */}
      {/* Показываем компонент Home если клиент находится на директоии / или оснавной страницы */}
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/product/:vazgenId' Component={DetailedPage} />
      </Routes>
    </>
  )
}

export default App