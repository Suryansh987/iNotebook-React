import React, { useState } from 'react'

const Signup = () => {

    const [signdetails, setsigndetails] = useState({
        name:"",
        email:'',
        pass:'',
        confirmPass:''
    })

    const handleOnSubmit = (e)=>{
        e.preventDefault()
        console.log(signdetails)
    }

    const handleOnChange = (e)=>{
        setsigndetails({...signdetails,[e.target.name]:e.target.value})
    }

    return (
        <>
            <div className="container mt-5">
                <form onSubmit={handleOnSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name='name' placeholder="Enter Your Name here...." autoComplete='on' onChange={handleOnChange} value={signdetails.Name}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name='email' placeholder="name@example.com" autoComplete='on' onChange={handleOnChange} value={signdetails.email}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pass" className="form-label">Password</label>
                        <input type="password" className="form-control" id="pass" name='pass' placeholder="Enter Your Password here...." autoComplete='on' onChange={handleOnChange} value={signdetails.pass}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="re-pass" className="form-label">Re-enter Password</label>
                        <input type="password" className="form-control" id="re-pass" name='confirmPass' placeholder="Enter Your Password again...." autoComplete='on' onChange={handleOnChange} value={signdetails.confirmPass} />
                    </div>
                    <button type='submit' className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Signup
