'use client'
import React, { useState } from 'react'

function page() {

    const [count,setcount] = useState(0)
    const increment=()=>{
      setcount(count+1)
    }

  return (
    <div>
      <h1>Hello Help pages</h1>
      <h1>count :{count}</h1>
      <button className='bg-amber-400 p-5' onClick={increment}>incmrenet</button>
    </div>
  )
}

export default page
