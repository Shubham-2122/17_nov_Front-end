import React from 'react'
import useCounter from './useCounter'

function Count() {

    const {count,increment,decrement,Zero} = useCounter(1)

  return (
    <div>
      <h1>Hello this Custom Hooks</h1>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={increment}>+</button>
      <button className='btn' onClick={decrement}>-</button>
    </div>
  )
}

export default Count
