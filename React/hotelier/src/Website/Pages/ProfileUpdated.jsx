import React, { useEffect, useState } from 'react'
import Header from '../Coman/Header'
import AnavTi from '../../Admin/Acoman/AnavTi'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProfileUpdated() {

    const redirect =useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        password: "",
        email: ""
    })

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/users/${localStorage.getItem("Uid")}`)
            console.log(res.data)
            setform(res.data)
        } catch (error) {
            toast.error("Api data not found")
        }
    }

    const getchage = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const getsubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:3000/users/${form.id}`, form)
            console.log(res.data)
            setform({
                id: "",
                name: "",
                password: "",
                email: ""
            })
            toast.success("Update profile")
            localStorage.setItem("Uname",form.name)
            redirect("/")
        } catch (error) {
            console.log("Api data not Found", error)
        }
    }

    return (
        <div>
            <Header />
            <AnavTi title="Update Profile" name="Update Profile" />
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' >
                <div className='mask gradient-custom-3'></div>
                <form action="" onSubmit={getsubmit}>
                    <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                        <MDBCardBody className='px-5'>
                            <h2 className="text-uppercase text-center mb-5">Update Profile</h2>
                            <MDBInput onChange={getchage} value={form.name} name='name' wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' />
                            <MDBInput value={form.email} onChange={getchage} name='email' wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' />
                            <MDBInput value={form.password} name='password' onChange={getchage} wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' />
                            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Updated</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </form>
            </MDBContainer>
        </div>
    )
}

export default ProfileUpdated
