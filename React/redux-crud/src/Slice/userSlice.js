import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// read function
export const readUser = createAsyncThunk(
    'readUser',async(data,{rejectWithValue})=>{
        try {
            const res = await axios.get("http://localhost:3000/users")
            const result = await res.data;
            return result;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// adduser
export const adddata= createAsyncThunk(
    'adddata',async(data,{rejectWithValue})=>{
        try {
            const res = await axios.post("http://localhost:3000/users",data)
            const result = await res.data 
            return result;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const userSlice = createSlice({
    name:"userDetails",
    initialState : {
        loading : true,
        users : [],
        error : ""
    },
    reducers:{
        userPending:(state,action)=>{
            state.loading = true;
        },
        userFullfild:(state,action)=>{
            state.loading = false;
            state.users.push(action.payload)
        },
        userRejected:(state,action)=>{
            state.loading = false;
            state.error = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        // read user
        .addCase(readUser.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(readUser.fulfilled,(state,action)=>{
            state.loading = false
            state.users = action.payload
        })
         .addCase(readUser.rejected,(state,action)=>{
            state.loading = false 
            state.error = action.payload
        })

        // add user 
        .addCase(adddata.pending,(state,action)=>{
            state.loading = true
        })

        .addCase(adddata.fulfilled,(state,action)=>{
            state.loading = false
            state.users.push(action.payload)
        })

        .addCase(adddata.rejected,(state,action)=>{
            state.loading = false 
            state.error = action.payload
        })
    }
})

export const {userFullfild,userPending,userRejected} = userSlice.actions 

export default userSlice.reducer;