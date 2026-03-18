import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { readUser } from '../Slice/userSlice'

function UsersGet() {

  const { loading, users } = useSelector((state) => state.users)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(readUser())
  }, [])

  return (
    <div>
      <h1>Hello this user Data get</h1>
      <div className="container">
        <table class="table table-dark table-hover">
          <thead>
            <tr className='text-center'>
              <th scope="col">#id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">gender</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users && users.map((data, index) => {
                // console.log(data)
                return (
                  <tr className='text-center'>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.gender}</td>
                    <td>
                      <button className='btn btn-info'>View</button>
                      <button className='btn btn-success mx-2'>Edit</button>
                      <button className='btn btn-danger'>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UsersGet
