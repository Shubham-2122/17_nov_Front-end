import React from 'react'

function UserAdd() {
    return (
        <div>
            <h1 className='text-center'>hello this Form data user </h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="Name" className="form-label">Enter your Name</label>
                                <input type="text" className="form-control" id="Name" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="radioDisabled" id="radioDisabled" />
                                        <label className="form-check-label" htmlFor="radioDisabled">
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="radioDisabled" id="radioCheckedDisabled"/>
                                        <label className="form-check-label" htmlFor="radioCheckedDisabled">
                                           Female
                                        </label>
                                    </div>
                                </div>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
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
