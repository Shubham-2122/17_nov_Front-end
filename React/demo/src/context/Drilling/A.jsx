import React, { useState } from 'react'
import B from './B'

function A() {

    const [name,setname] = useState("karan patel")
    return (
    <div>

        {/* props drilling */}

      <h1>Hello this A compo</h1>
      <h1>A Name : {name}</h1>

        <B name={name} setname={setname} />

    </div>
  )
}

export default A
