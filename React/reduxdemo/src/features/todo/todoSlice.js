import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo: ["karan", "het"]
}

export const todoSlice = createSlice({
    name: "Todos",
    initialState,
    reducers: {
        Addtodo: (state, action) => {
            state.todo.push(action.payload)
        },
        DeleteTodo: (state, action) => {
            state.todo = state.todo.filter((data, index) => index != action.payload)
        }
    }

})

export const { Addtodo, DeleteTodo } = todoSlice.actions;

export default todoSlice.reducer;