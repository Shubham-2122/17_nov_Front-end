import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, zero } from './counterSlice'

function Counter() {

  // state access selector 
    const count = useSelector((state)=>state.count.value)
    console.log(count)

    // function access disptach
    const dispatch = useDispatch()

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={()=>dispatch(increment())}>Incmrenet</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(zero())}>Zero</button>
    </div>
  )
}

export default Counter
