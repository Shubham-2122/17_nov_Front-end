import React from 'react'
import ChaildA from './useContext/ChaildA'
// import A from './Drilling/A'

function MainContext() {
  return (
    <div>
      <h1>Hello context data</h1>
      
      {/* drilling concept */}
      {/* <A /> */}

      {/* context */}
      <ChaildA />
    </div>
  )
}

export default MainContext
