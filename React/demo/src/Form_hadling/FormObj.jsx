import React, { useState } from 'react'

function FormObj() {

    const [form,setform]= useState({
        name : "",
        surname : "",
        email : "",
        password :""
    })

    const getchange=(e)=>{
        setform({
            ...form,
            [e.target.name] : e.target.value
        })
        console.log(form)
    }

  return (
    <div>
        <div className="container">
                <div className="row">
                    <div className="col-6 mx-auto mt-5">
                        {/* <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Enter Your name</label>
                                <input type="text" value={form.name} onChange={(e)=>setform({...form,name:e.target.value})} className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="surname" className="form-label">Enter Your surname</label>
                                <input type="text" value={form.surname} onChange={(e)=>setform({...form,surname:e.target.value})}  className="form-control" id="surname" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" value={form.email}  onChange={(e)=>setform({...form,email:e.target.value})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={form.password}  onChange={(e)=>setform({...form,password:e.target.value})} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form> */}
                          <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Enter Your name</label>
                                <input type="text" value={form.name} name='name' onChange={getchange} className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="surname" className="form-label">Enter Your surname</label>
                                <input type="text" value={form.surname} name='surname' onChange={getchange}  className="form-control" id="surname" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" value={form.email} name='email' onChange={getchange}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={form.password} onChange={getchange} name='password'  className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
    </div>
  )
}

export default FormObj
