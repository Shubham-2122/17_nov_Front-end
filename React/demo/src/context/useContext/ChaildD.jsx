import React, { useContext } from 'react'
import { data } from './ChaildA'

function ChaildD() {

    const {name,setname} = useContext(data)

  return (
    <div>
          <h1>Hello Child D </h1>
          <h1>D Name : {name}</h1>
          <button onClick={()=>setname("shubham jadav")}>Change name</button>
    </div>
  )
}

export default ChaildD
