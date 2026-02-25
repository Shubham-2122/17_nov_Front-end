import React, { useEffect, useState } from 'react'
import Aheader from './Aheader'
import AnavTi from './AnavTi'
import axios from 'axios'

function RoomsMange() {

    const [room, setroom] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const res = await axios.get("http://localhost:3000/rooms")
            console.log(res.data)
            setroom(res.data)
        } catch (error) {
            console.log("api not found", error)
        }
    }

    return (
        <div>
            <Aheader />
            <AnavTi title="RoomManage" name="RoomManage" />
            <div className="container">
                <h1>Hello this Rooms Manage</h1>
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">Image</th>
                            <th scope="col">name</th>
                            <th scope="col">Bed</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            room && room.map((data, index) => {
                                return (
                                    <tr key={index} className='text-center'>
                                        <th scope="row">{data.id}</th>
                                        <td>
                                            <img src={data.img} style={{ width: "100px", borderRadius: "10px" }} alt="" />
                                        </td>
                                        <td>{data.name}</td>
                                        <td>{data.bed}</td>
                                        <td>
                                            <button className='btn btn-primary'>View</button>
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

export default RoomsMange
