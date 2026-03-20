import React from 'react'
import UsersGet from './Component/UsersGet'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserAdd from './Component/UserAdd'
import Header from './Component/Header'

function App() {

  return (
    <BrowserRouter>

     <div>
      <Header />
      <Routes>
        <Route path='/' element={<UsersGet />} />
        <Route path='/add' element={<UserAdd />} />
         <Route path='/edit/:id' element={<UserAdd />} />
      </Routes>
    </div>
    
    </BrowserRouter>
   
  )
}

export default App
