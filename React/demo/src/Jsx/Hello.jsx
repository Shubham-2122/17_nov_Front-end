// jsx : javascript syntax xml/eatible 
// jsx : html data read and write
// jsx : lighwieght 
// js vs jsx : 0.1 s
// jsx : {}

import React from 'react'

function Hello() {

    // console.log("hello")

    let name = "Shubham jadav"
    console.log(name)

    let data = {
        name : "het patel",
        course : "Front-end"
    }

    console.log(data)

    let math = 10+10

    let htmldata = <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Help</li>
    </ul>

  return (
    <div>
      <h1>Hello jsx Componenet</h1>
      <h1>Hello name {name} </h1>

      <h2>Hello name : {data.name} and course : {data.course}</h2>
      <p>math data : {math}</p>

      {10*6}

      {htmldata}
    </div>
  )
}

export default Hello

