import React, { useState } from 'react'
import Aheader from '../Acoman/Aheader'
import AnavTi from '../Acoman/AnavTi'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function RoomAdd() {

    const redirect = useNavigate()

    const [room, setroom] = useState({
        id: "",
        name: "",
        price: "",
        bed: "",
        bath: "",
        desc: "",
        img: ""
    })

    const getchange = (e) => {
        setroom({
            ...room,
            // new id created
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(room)
    }

    const getRoom = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post("http://localhost:3000/rooms", room)
            console.log(res.data)
            redirect("/roommange")
            setroom({
                id: "",
                name: "",
                price: "",
                bed: "",
                bath: "",
                desc: "",
                img: ""
            })
        } catch (error) {
            console.log("Api data not found", error)
        }
    }

    return (
        <div>
            <Aheader />
            <AnavTi title="Rooms Add" name="AddRoom" />
            <div className="container py-5">
                <h1>Hello this Rooms Add</h1>
                <div className="row">
                    <div className="col-md-12">
                        <div className="wow fadeInUp" data-wow-delay="0.2s">
                            <form onSubmit={getRoom}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input name='name' value={room.name} onChange={getchange} type="text" className="form-control" id="name" placeholder="Rooms Name" />
                                            <label htmlFor="name">Rooms Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input value={room.price} name='price' onChange={getchange} type="text" className="form-control" id="Price" placeholder="Rooms Price" />
                                            <label htmlFor="Price">Rooms Price</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div class="form-floating">
                                            <select class="form-select" name='bed' onChange={getchange} value={room.bed} id="floatingSelect" aria-label="Rooms bed">
                                                <option hidden>Rooms bed</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="3">4</option>
                                                <option value="3">5</option>
                                                <option value="3">6</option>
                                            </select>
                                            <label for="floatingSelect">Rooms bed</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div class="form-floating">
                                            <select value={room.bath} name='bath' onChange={getchange} class="form-select" id="floatingSelect" aria-label="Rooms bath">
                                                <option hidden>Rooms bath</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="3">4</option>
                                            </select>
                                            <label for="floatingSelect">Rooms bath</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="url" name='img' onChange={getchange} value={room.img} className="form-control" id="img" placeholder="Rooms Image" />
                                            <label htmlFor="img">Rooms Image</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea value={room.desc} name='desc' onChange={getchange} className="form-control" placeholder="Leave a message here" id="message" style={{ height: 150 }} defaultValue={""} />
                                            <label htmlFor="message">Rooms Descrition</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Add Room</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomAdd
