import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './router/Home/Home'
import Whishlist from './router/whishlist/Whishlist'
import Login from './router/login/Login'
import Qualified from './router/Qualified/Qualified'
import Cart from './router/Cart/Cart'
import Singlerouter from './router/singleroute/Singleroute'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/whishlist' element={<Whishlist/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Qualified' element={<Qualified/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path="/single-product/:id" element={<Singlerouter />} /> 
      </Routes>
      <Footer/>
    </div>
  )
}

export default App