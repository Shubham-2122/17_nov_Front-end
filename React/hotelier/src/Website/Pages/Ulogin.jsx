import React, { useEffect, useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function Ulogin() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("Uid")){
            redirect("/")
        }
    },[])

    const [form, setform] = useState({
        email: "",
        password: ""
    })

    const getchage = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const getsubmit = async (e) => {
        e.preventDefault()

        try {
            const { email, password } = form

            if (email == "" || password == "") {
                console.log("Pls Data check")
                toast.error("Pls feild Required...")
                return false
            }

            const res = await axios.get(`http://localhost:3000/users?email=${email}`)
            // console.log(res.data)

            if(res.data.length === 0){
                console.log("Email does not match..")
                toast.error("Email does not match..")
                return false
            }

            const users = res.data[0]
            console.log(users)

            if(users.password != password){
                console.log("Password does not match")
                toast.error("Password does not match")
                return false
            }

            if(users.status === "block"){
                toast.error("Account hase been Block")
                return false
            }

            localStorage.setItem("Uid",users.id)
            localStorage.setItem("Uname",users.name)
            console.log("Successfully login")
            toast.success("Successfully login")
            redirect("/")


        } catch (error) {
            console.log("Api data not Found")
            toast.error("Api data not Found")
        }
    }

    return (
        <div>
            <MDBContainer fluid>

                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                      <form action="">
                          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                                <p className="text-white-50 mb-3">Please enter your login and password!</p>

                                <MDBInput value={form.email} name='email' onChange={getchage} wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg" />
                                <MDBInput value={form.password} name='password' onChange={getchage} wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" />

                                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

                                <MDBBtn size='lg' onClick={getsubmit}>
                                    Login
                                </MDBBtn>

                                <hr className="my-4" />

                                <div>
                                    <p className="mb-0">Don't have an account? <a href="#!" className="text-info-50 fw-bold">Sign Up</a></p>

                                </div>
                            </MDBCardBody>
                        </MDBCard>
                      </form>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </div>
    )
}

export default Ulogin
