import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Addtodo } from './todoSlice'

function AddData() {

    const [name,setname] = useState("")

    const disptach = useDispatch()

    const getsubmit=(e)=>{
        e.preventDefault()
        disptach(Addtodo(name))
        setname("")
    }

  return (
    <div>
      <form action="">
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder='Enter your Name' name="" id="" />
        <input type="submit" onClick={getsubmit} value="add Data" />
      </form>
    </div>
  )
}

export default AddData
