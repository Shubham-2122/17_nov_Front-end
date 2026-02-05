// useeffect : function side effect 
// Api data call
// useEffect one component one api 
// re-render api data console two
// useEffect(()=>{
//  apifucntion()
// },[])


import React, { useEffect, useState } from 'react'

function UseDate() {

    // 1) without show data 
    // useEffect(()=>{
    //     console.log("Hello without funtion")
    //     return(()=>{
    //         console.log("Hello with function")
    //     })
    // })
    
    // 2) with array blank
    // useEffect(()=>{
    //     console.log("Hello without funtion")
    //     return(()=>{
    //         console.log("Hello with function")
    //     })
    // },[])

    const [data,setdata]= useState("shubham jadav")

    // 3) useEffect state chnage call
    useEffect(()=>{
        console.log("Hello without funtion")
        return(()=>{
            console.log("Hello with function")
        })
    },[data])

  return (
    <div>
      <h1>Hello this Function UseEffect</h1>

    <h1>name : {data}</h1>
    <button onClick={()=>setdata("karan patel")}>Chnage name</button>

    </div>
  )
}

export default UseDate
