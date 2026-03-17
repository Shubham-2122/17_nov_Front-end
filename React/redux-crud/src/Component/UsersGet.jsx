import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { readUser } from '../Slice/userSlice'

function UsersGet() {

    const {loading,users} = useSelector((state)=>state.users)

    console.log(loading)
    console.log(users)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(readUser())
    },[])

  return (
    <div>
      <h1>Hello this user Data get</h1>
    </div>
  )
}

export default UsersGet
