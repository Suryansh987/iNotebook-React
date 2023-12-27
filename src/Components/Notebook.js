import React from 'react'

export default function Notebook() {
    return (
        <>
        <div className='container p-2 my-5'>
            <h1 className='my-3 text-center '>Welcome!!</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="button" className="btn btn-primary">Primary</button>
            </div>
        </>
    );
}
