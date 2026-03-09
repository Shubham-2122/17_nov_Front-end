import React from 'react'
import Home from './Website/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Slide, ToastContainer, toast } from 'react-toastify';
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
import TeamManage from './Admin/Apages/TeamManage';
import TeamAdd from './Admin/Apages/TeamAdd';
import Alogin from './Admin/Apages/Alogin';
import Ulogin from './Website/Pages/Ulogin';
import Register from './Website/Pages/Register';
import ProfileUpdated from './Website/Pages/ProfileUpdated';


function App() {
  return (
    <BrowserRouter>
      <div>
        <ToastContainer position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide} />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/team' element={<Team />} />
          <Route path='/testi' element={<Testi />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Ulogin />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<ProfileUpdated />} />


          <Route path='*' element={<NotFound />} />


          {/* admin */}
          <Route path='/dash' element={<Dashboard />} />
          <Route path='/roommange' element={<RoomsMange />} />
          <Route path='/roomadd' element={<RoomAdd />} />
          <Route path='/teamManage' element={<TeamManage />} />
          <Route path='/teamadd' element={<TeamAdd />} />

          <Route path='/alogin' element={<Alogin />} />

        </Routes>

      </div>
    </BrowserRouter>

  )
}

export default App
