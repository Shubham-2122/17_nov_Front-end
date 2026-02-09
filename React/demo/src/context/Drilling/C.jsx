import React from 'react'
import D from './D'

function C({name,setname}) {
  return (
    <div>
      <h1>Hello this C compo</h1>
      <D name={name} setname={setname} />
    </div>
  )
}

export default C
