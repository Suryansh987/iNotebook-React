import React from 'react'
import { Link } from 'react-router-dom'


export default function Notes(props) {
    const { noteTitle, noteDescription, noteTag } = props
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
                        <button className="btn btn-primary mx-2">Read More</button>
                        <button className="btn btn-primary mx-2">Update</button>
                        <button className="btn btn-primary mx-2">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}
