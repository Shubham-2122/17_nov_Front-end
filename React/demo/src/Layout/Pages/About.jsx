import React from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <Header />

        <h1 className='bg-success p-5'>Hello thsi About Page</h1>
        <Link className='btn btn-info mx-2' to="/about/about1" >About1</Link>
        <Link className='btn btn-danger' to="/about/about2">About2</Link>
        <Outlet />
      <Footer />
    </div>
  )
}

export default About
