import React, { createContext, useState } from 'react'
import ChaildB from './ChaildB'
import ChaildC from './ChaildC'
import ChaildD from './ChaildD'

export const data = createContext()

function ChaildA() {

    const [name,setname] = useState("rishi patel")
    const [form,setform] = useState({
        name : "hello",
        count : 0
    })

  return (
    <div>
      <h1>Hello Child A </h1>

        {/* 
            1) created context
            2) provide : context data pass
        */}

      <h1>Hello name : {name}</h1>

            <data.Provider value={{name,setname,form,setform}}>
                <ChaildB />
                <ChaildC />
                <ChaildD />
            </data.Provider>

    </div>
  )
}

export default ChaildA
