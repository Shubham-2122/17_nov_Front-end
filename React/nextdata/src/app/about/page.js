import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <h1>hello this About Pages</h1>
       <Link href='/' className='mx-2'>Home</Link>
      <Link href='/about'>About</Link>
    </div>
  )
}

export default page
