import React from 'react'
import Home from './Website/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Website/Pages/About'
import Service from './Website/Pages/Service'
import Rooms from './Website/Pages/Rooms'
import Booking from './Website/Pages/Booking'
import Team from './Website/Pages/Team'
import Testi from './Website/Pages/Testi'
import Contact from './Website/Pages/Contact'
import NotFound from './Website/Pages/NotFound'
import Dashboard from './Admin/Apages/Dashboard'
import RoomsMange from './Admin/Apages/RoomsMange'
import RoomAdd from './Admin/Apages/RoomAdd'


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/booking' element={<Booking />} />
           <Route path='/team' element={<Team />} />
           <Route path='/testi' element={<Testi />} />
            <Route path='/contact' element={<Contact />} />


            <Route path='*' element={<NotFound />} />


      {/* admin */}
          <Route path='/dash' element={<Dashboard />} />
          <Route path='/roommange' element={<RoomsMange />} />
          <Route path='/roomadd' element={<RoomAdd />} />

        </Routes>

      </div>
    </BrowserRouter>

  )
}

export default App
