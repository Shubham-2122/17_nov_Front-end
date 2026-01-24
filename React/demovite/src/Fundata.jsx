import React from 'react'

function Fundata() {
    
  let data = {
    name : "karan patel",
    course :"Front-end"

  }
  return (
    <div>
      <h1>Hello this Jsx Function data</h1>
      <h2>Hello name : {data.name} and Course : {data.course}</h2>
    </div>
  )
}

export default Fundata
