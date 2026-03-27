import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <h1 className='text-center text-4xl hover:bg-amber-300'>Hello this Next js Application</h1>
      <Link href='/' className='mx-2'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/help'>Help</Link>
      
    </div>
  )
}

export default page
