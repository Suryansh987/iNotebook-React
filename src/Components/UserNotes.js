import React, { useContext } from 'react'
import NoteContext from '../Context/NoteContext'

export default function UserNotes() {
    const a = useContext(NoteContext)
    return (
        <div className='container my-3'>
            <div className="card">
                <div className="card-header">
                    { console.log(a)}
                    {a.name}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
