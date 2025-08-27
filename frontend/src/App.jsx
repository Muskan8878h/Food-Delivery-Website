import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import ContactPage from './pages/ContactPage/ContactPage'
import Menu from './pages/Menu/Menu'
import Cart from './pages/Cart/Cart'
import AboutPage from './pages/AboutPage/AboutPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/login' element={<Home />} /> 
    </Routes>
  )
}

export default App
