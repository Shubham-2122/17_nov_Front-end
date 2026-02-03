// function : state : we can change data
// Fuction react v16.8 Hooks
// hooks reuse useState
// const [state,setstate] = useState()
// return outside 
// define a state and change a data

import React, { useState } from 'react'
import Images from './Images'

function FuncState() {

    // type [defined,setdefined] = useState(value)
    const [name,setname] = useState("karan patel")
    const [count,setcount] = useState(0)
    const [isImage,setisIamge] = useState(true)

    const Increment2=()=>{
        setcount(count+2)
    }

  return (
    <div>
      <h1>Hello name : {name}</h1>
      <button onClick={()=>setname("rushi parmar")}>Change name</button>
      <button onClick={()=>setname("shubham jadav")}>Change name 2</button>

    <h1>Count : {count}</h1>

    <button onClick={()=>setcount(count+1)}>Increment</button>
    <button onClick={()=>setcount(count-1)}>Decrement</button>
    <button onClick={()=>setcount(0)}>Zero</button>

    <button onClick={Increment2}>Inrement by 2</button>
    
    <hr /> <br />
    <button onClick={()=>setisIamge(false)}>Hide</button>
    <button onClick={()=>setisIamge(true)}>Show</button>

    <button onClick={()=>setisIamge(!isImage)}>Toogle</button>

    {
        (isImage)?<Images /> : false 
    }

    </div>
  )
}

export default FuncState
