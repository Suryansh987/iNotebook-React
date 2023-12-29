import React from 'react'
import { Link } from 'react-router-dom'

export default function Notes() {
    return (
        <>
        <div className="container my-5">
            <h1 className='text-center'>Global Notes</h1>
            <div className="card">
                <div className="card-header">
                    TAG
                </div>
                <div className="card-body">
                    <h5 className="card-title">TITLE</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit eveniet deleniti incidunt magni sunt, fuga ipsa excepturi sequi, totam voluptatum animi repellendus itaque tenetur veritatis hic? Natus in fuga, obcaecati optio, doloremque soluta error quos fugiat, ullam laborum accusamus exercitationem adipisci sapiente pariatur!</p>
                    <Link to="#" className="btn btn-primary">Read More</Link>
                </div>
            </div>
            </div>
        </>
    )
}
