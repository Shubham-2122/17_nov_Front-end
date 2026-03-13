import React from 'react'
import useFetch from './useFetch'

function UserApi() {

    const { data } = useFetch("https://jsonplaceholder.typicode.com/users")

    console.log(data)
    return (
        <div>
            <table style={{border:"5px solid "}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((user, index) => {
                            return (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserApi
