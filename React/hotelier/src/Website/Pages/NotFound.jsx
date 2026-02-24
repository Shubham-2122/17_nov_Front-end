import React from 'react'
import NavTitle from '../Coman/NavTitle'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <NavTitle title="404 Not Found" name="NOT FOUND" />
      <h1 className='text-start'>404 Not Found Pages</h1>
      <Link to="/" className='btn btn-success'>Back to Home</Link>
    </div>
  )
}

export default NotFound
