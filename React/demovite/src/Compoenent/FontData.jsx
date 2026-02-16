import React from 'react'

function FontData() {
    return (
        <div>
            <h1 className='text-xl text-cyan-400'>Hello Data</h1>

            <h1 className='text-2xl'>Hello Data</h1>
            <h1 className='text-3xl  underline decoration-double decoration-amber-500 italic text-right font-sans'>Hello Data</h1>
            <h1 className='text-4xl uppercase overline decoration-dashed font-bold text-left font-serif'>Hello Data</h1>
            <h1 className='text-5xl lowercase line-through decoration-dotted text-center font-mono'>Hello Data</h1>
            <h1 className='text-6xl'>Hello Data</h1>
            {/* <h1 className='text-9xl'>Hello Data</h1> */}


            <h1 className='text-6xl underline decoration-2 decoration-cyan-300 text-yellow-400'>Hello Data</h1>
            <h1 className='text-6xl text-green-400'>Hello Data</h1>
            <h1 className='text-6xl text-blue-400'>Hello Data</h1>

        </div>
    )
}

export default FontData
