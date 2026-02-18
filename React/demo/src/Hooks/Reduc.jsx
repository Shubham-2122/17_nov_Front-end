/*
    useState : 
    useReducer : complex stat manage : global

    reducer : logic Coman 

*/



import React, { useReducer } from 'react'
import Header from '../Layout/Coman/Header'

const inisataldata = 0

export const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
            break;
        case 'decrement':
            return state - 1;
            break;

        case 'zero':
            return state = 0;
            break

        default:
            return state
            break;
    }
}

function Reduc() {

    const [count, dispatch] = useReducer(reducer, inisataldata)

    return (
        <div>
            <Header />
            <h1>Hello this hook reducer</h1>

            <h1>Hello count : {count}</h1>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('zero')}>Zero</button>
        </div>
    )
}

export default Reduc
