import React, { useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Register() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        status: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            status: "unblock",
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const NewData = async (e) => {
        e.preventDefault()

        try {

            if(form.name == "" || form.email == "" || form.password == ""){
                toast.error("Pls required Data...")
                return false
            }

            const res = await axios.post("http://localhost:3000/users", form)
            console.log(res.data)
            setform({
                name: "",
                email: "",
                password: "",
                status: ""
            })
            toast.success("Register successfully..")
            redirect("/login")
        } catch (error) {
            console.log("Api data not Found")
        }
    }

    return (
        <div>
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' >
                <div className='mask gradient-custom-3'></div>
                <form action="" onSubmit={NewData}>
                    <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                        <MDBCardBody className='px-5'>
                            <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                            <MDBInput value={form.name} onChange={getchange} name='name' wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' />
                            <MDBInput value={form.email} onChange={getchange} name='email' wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' />
                            <MDBInput value={form.password} onChange={getchange} name='password' wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' />
                            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </form>
            </MDBContainer>
        </div>
    )
}

export default Register
