import React from 'react'
import { Link } from 'react-router-dom'


export default function Notes(props) {
    const { noteTitle,noteDescription,noteTag } = props
    return (
        <>
        <div className="container my-3">
            <div className="card">
                <div className="card-header">
                    {noteTag}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{noteTitle}</h5>
                    <p className="card-text">{noteDescription}</p>
                    <Link to="#" className="btn btn-primary">Read More</Link>
                </div>
            </div>
            </div>
        </>
    )
}
