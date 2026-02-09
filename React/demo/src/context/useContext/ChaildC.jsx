import React, { useContext } from 'react'
import { data } from './ChaildA'

function ChaildC() {

    const {form,setform} = useContext(data)

  return (
    <div>
          <h1>Hello Child C </h1>

          <h1>C : Count : {form.count}</h1>
          <button onClick={()=>setform({...form,count:form.count + 1})}>increment</button>
    </div>
  )
}

export default ChaildC
