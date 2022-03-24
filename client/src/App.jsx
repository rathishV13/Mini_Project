import { useState } from 'react'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Item from './pages/Item'
import ListProducts from './pages/ListProducts'
import Login from './pages/Login'
import Register from './pages/Register'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const App = () => {

  const user = true
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ListProducts />} />
        <Route path="/product/:id" element={<Item />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? (
          <Navigate replace to="/" />
        ) : (
          <Login />
        )} />
        <Route path="/register" element={user ? (
          <Navigate replace to="/" />
        ) : (
          <Register />
        )} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
