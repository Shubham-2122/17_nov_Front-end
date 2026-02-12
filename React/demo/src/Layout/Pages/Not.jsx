import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Not() {

    const redirect = useNavigate()

    const backto = ()=>{
        console.log("hello")
        redirect("/")
    }

  return (
    <div>
      <h1 className='bg-danger text-light text-center p-5'>404 Hello this Not Found Page</h1>
      <Link className='btn btn-success mx-2' to="/" >Back to home</Link>

      <button onClick={backto} className='btn btn-info'>Back to Home 2</button>
    </div>
  )
}

export default Not
