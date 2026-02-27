import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import AnavTi from '../Acoman/AnavTi'
import axios from 'axios'
import { toast } from 'react-toastify'

function RoomsMange() {

    const [room, setroom] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const res = await axios.get("http://localhost:3000/rooms")
            // console.log(res.data)
            setroom(res.data)
        } catch (error) {
            console.log("api not found", error)
            toast.error("Apid data not Found")
        }
    }

    const [singleRoom, singlesetroom] = useState({
        id: "",
        name: "",
        price: "",
        bed: "",
        bath: "",
        desc: "",
        img: ""
    })

    // getdata single product
    const getRooms = async (id) => {
        try {
            const res = await axios.get(`http://localhost:3000/rooms/${id}`)
            console.log(res.data)
            singlesetroom(res.data)
        } catch (error) {
            console.log("Api data not Found", error)
            toast.error("Apid data not Found")
        }
    }

    // deleteproduct
    const deleteRoom=async(id)=>{
        try {


            const res = await axios.delete(`http://localhost:3000/rooms/${id}`)
            console.log(res.data)
            toast.success("Room delete SuccessFully..");
            fetchData()
        } catch (error) {
            console.log("Api data not Found",error)
            toast.error("Apid data not Found")
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
                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getRooms(data.id)} className='btn btn-primary'>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger' onClick={()=>deleteRoom(data.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Single Rooms Deatils {singleRoom.id}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="room-item shadow rounded overflow-hidden">
                                        <div className="position-relative">
                                            <img className="img-fluid" src={singleRoom.img} alt />
                                            <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">${singleRoom.price}/Night</small>
                                        </div>
                                        <div className="p-4 mt-2">
                                            <div className="d-flex justify-content-between mb-3">
                                                <h5 className="mb-0">{singleRoom.name}</h5>
                                                <div className="ps-2">
                                                    <small className="fa fa-star text-primary" />
                                                    <small className="fa fa-star text-primary" />
                                                    <small className="fa fa-star text-primary" />
                                                    <small className="fa fa-star text-primary" />
                                                    <small className="fa fa-star text-primary" />
                                                </div>
                                            </div>
                                            <div className="d-flex mb-3">
                                                <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />{singleRoom.bed} Bed</small>
                                                <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                                                <small><i className="fa fa-wifi text-primary me-2" />Wifi</small>
                                            </div>
                                            <p className="text-body mb-3">{singleRoom.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomsMange
