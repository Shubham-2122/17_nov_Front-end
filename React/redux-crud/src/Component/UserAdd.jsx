import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adddata } from '../Slice/userSlice'
import { useNavigate } from 'react-router-dom'

function UserAdd() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        email: "",
        gender: "",
        password: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const dispatch = useDispatch()

    const submitdata = (e) => {
        e.preventDefault()

        dispatch(adddata(form))
        setform({
            name: "",
            email: "",
            gender: "",
            password: ""
        })
        redirect("/")

    }

    return (
        <div>
            <h1 className='text-center'>hello this Form data user </h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <form onSubmit={submitdata}>
                            <div className="mb-3">
                                <label htmlFor="Name" className="form-label">Enter your Name</label>
                                <input type="text" name='name' onChange={getchange} value={form.name} className="form-control" id="Name" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" name='email' onChange={getchange} value={form.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <div>
                                    <div className="form-check">
                                        <input name="gender" onChange={getchange} value="male" className="form-check-input" type="radio" id="radioDisabled" />
                                        <label className="form-check-label" htmlFor="radioDisabled">
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input value="female" name='gender' onChange={getchange} className="form-check-input" type="radio" id="radioCheckedDisabled" />
                                        <label className="form-check-label" htmlFor="radioCheckedDisabled">
                                            Female
                                        </label>
                                    </div>
                                </div>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" name='password' onChange={getchange} value={form.password} className="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" className="btn btn-primary">Add User</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserAdd
