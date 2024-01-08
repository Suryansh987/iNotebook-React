import React, { useState } from 'react'

const Login = () => {

    const [loginDetails, setloginDetails] = useState({
        loginMail:"",
        loginPass:""
    })

    const handleOnSubmit = (e)=>{
        e.preventDefault()
        console.log(loginDetails);
    }

    const  handleOnChange = (e)=>{
        setloginDetails({...loginDetails,[e.target.name]:e.target.value})
    }


    return (
        <>
            <div className="container mt-5">
                <form onSubmit={handleOnSubmit}>
                    <div className="mb-3">
                        <label htmlFor="login-mail" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="login-mail" name='loginMail' placeholder="name@example.com" onChange={handleOnChange} value={loginDetails.loginMail} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="login-pass" className="form-label">Password</label>
                        <input type="password" className="form-control" id="login-pass" name='loginPass' placeholder="Enter Your Password here...." onChange={handleOnChange} value={loginDetails.loginPass}/>
                    </div>
                    <button type='submit' className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login
