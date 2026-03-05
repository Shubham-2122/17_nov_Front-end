import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import AnavTi from '../Acoman/AnavTi'
import axios from 'axios'
import { toast } from 'react-toastify'

function TeamManage() {

    const [Team, setTeam] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        try {
            const res = await axios.get("http://localhost:3000/team")
            console.log(res.data)
            setTeam(res.data)
        } catch (error) {
            console.log("Api data not Found", error)
        }
    }

    const [editmodel, seteditmodel] = useState(null)
    const [edited, setedited] = useState({
        id: "",
        name: "",
        img: "",
        Designation: ""
    })

    const getModel = (data) => {
        console.log(data)
        seteditmodel(data)
        setedited(data)
    }

    const getchange = (e) => {
        setedited({
            ...edited,
            [e.target.name]: e.target.value
        })
    }

    const UpdateTeam = async (e) => {
        e.preventDefault()

        try {

            const res = await axios.put(`http://localhost:3000/team/${edited.id}`, edited)
            console.log(res.data)
            toast.success("Team Succefully Updated")
            fetchdata()
            setedited({
                name: "",
                img: "",
                Designation: ""
            })
            seteditmodel(null)

        } catch (error) {
            toast.error("Api data not Found")
        }
    }

    return (
        <div>
            <Aheader />
            <AnavTi name="Team Manage" title="Team Manage" />
            <div className="container">
                <h1 className=''>Hello this Team Manage</h1>
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">Image</th>
                            <th scope="col">name</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            Team && Team.map((data) => {
                                return (
                                    <tr key={data.id} className='text-center'>
                                        <th scope="row">{data.id}</th>
                                        <td>
                                            <img src={data.img} style={{ width: "100px", borderRadius: "10px" }} alt="" />
                                        </td>
                                        <td>{data.name}</td>
                                        <td>{data.Designation}</td>
                                        <td>
                                            <button className='btn btn-primary'>View</button>
                                            <button className='btn btn-success mx-2' onClick={() => getModel(data)} >Edit</button>
                                            <button className='btn btn-danger' >Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
                {
                    editmodel && (
                        <div className="container py-5">
                            <h1>Hello this Team Udpate</h1>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="wow fadeInUp" data-wow-delay="0.2s">
                                        <form >
                                            <div className="row g-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input name='name' onChange={getchange} value={edited.name} type="text" className="form-control" id="name" placeholder="Team Name" />
                                                        <label htmlFor="name">Team Name</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input type="text" onChange={getchange} value={edited.Designation} name='Designation' className="form-control" id="TeamDesignation" placeholder="Team Designation" />
                                                        <label htmlFor="Team Designation">Team Designation</label>
                                                    </div>
                                                </div>


                                                <div className="col-12">
                                                    <div className="form-floating">
                                                        <input type="url" onChange={getchange} value={edited.img} name='img' className="form-control" id="img" placeholder="Team Image" />
                                                        <label htmlFor="img">Team Image</label>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <button className="btn btn-primary w-100 py-3" type="submit"  onClick={UpdateTeam}>Update Team</button>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <button className="btn btn-primary w-100 py-3" onClick={() => seteditmodel(null)} >cancle Team</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default TeamManage
