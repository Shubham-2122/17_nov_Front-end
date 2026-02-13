// useRef : Dom Chanage
// Real dom :disadavatage 
// 1) re-redering Stop
// useRef : Refrence Data pass : form without refrsh


import React, { useRef } from 'react'
import Header from '../Layout/Coman/Header'

function Ref() {

    const refElement = useRef()

    // const 

    const getdata=()=>{
        refElement.current.focus();
    }

    const Getstyle =()=>{
        refElement.current.style.background = "red";
        refElement.current.style.color = "white"
    }

  return (
    <div>
        <Header />
        <h1>Hello this UseRef data</h1>
      <input type="text" ref={refElement} placeholder='Enter your data' />
      <button onClick={getdata}>Get data</button>

      <button onClick={Getstyle}>Getstyle</button>
    </div>
  )
}

export default Ref
