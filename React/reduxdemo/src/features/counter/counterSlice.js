import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

export const counterSlice = createSlice({
    // action
    name:"count",
    initialState,
    reducers:{
        // logic function
        increment:(state)=>{
             state.value += 1
        },
        decrement:(state)=>{
            state.value -= 1
        } ,
        zero: (state)=>{
            state.value = 0
        },
        increment2:(state)=>{
            state.value *= 2
        }
    }
})

export const {increment,decrement,zero,increment2} = counterSlice.actions

export default counterSlice.reducer;