import React from 'react'
import { useDispatch } from 'react-redux'
import { increment2 } from './counterSlice'

function Data() {

    const dispatch = useDispatch()

  return (
    <div>
        <h1>Hello this data function</h1>
      <button onClick={()=>dispatch(increment2())}>Incmrent by 2</button>
    </div>
  )
}

export default Data
