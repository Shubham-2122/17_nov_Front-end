import React, { useState } from 'react'

function useCounter(initialvalue) {

    const [count,setcount] = useState(initialvalue);

    const increment=()=>{
        setcount(count+1)
    }

    const decrement=()=>{
        setcount(count-1)
    }

    const Zero =()=>{
        setcount(initialvalue)
    }

    return {increment,decrement,Zero,count}
  
}

export default useCounter
