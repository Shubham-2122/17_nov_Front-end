import React, { useState } from 'react'
import Images from './Images'

function FuncObj() {

    const [data, setdata] = useState({
        name: "ruhsi",
        count: 1,
        isimage: true
    })

    // console.log(data)

    return (
        <div>
            <h1>Hello this Function object</h1>

            <h1>Hello name : {data.name}</h1>
            <button onClick={() => setdata({ ...data, name: "karan patel" })}>Chnage name</button>
            <button onClick={() => setdata({ ...data, name: "shubham patel" })}>Chnage name</button>

            <h1>Count : {data.count}</h1>
            <button onClick={() => setdata({ ...data, count: data.count + 1 })}>Increment</button>
            <button onClick={() => setdata({ ...data, count: data.count - 1 })}>decrement</button>
            <button onClick={() => setdata({ ...data, count: 0 })}>Zero</button>

                <hr />
                <br />
                <button>Hide</button>

            {
                (data.isimage) ? <Images /> : false
            }

        </div>
    )
}

export default FuncObj
