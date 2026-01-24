import React from 'react'
import "./style.css"

function Cssdata() {

    let internlcss = {
        background : "blue",
        color:"red",
        padding : "40px"
    }

  return (
    <>
      {/* 3 type */}

        {/* 1) inline css  */}
        <h1 style={{background:"red",color:"blue"}}>Hello this inline css</h1>

        {/* 2) internal css : not use in react  */}

        <h1 style={internlcss}>Hello this internal css</h1>

        <h1>Shadfiukashdiuh</h1>

        {/* 3) external css : file outside */}
        <h2 className='data'>Hello this External css</h2>

        <h1 id='hello'>asdkhaiskd</h1>

    </>
  )
}

export default Cssdata
