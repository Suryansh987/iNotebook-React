import React, { useContext } from 'react'
import NoteContext from '../Context/NoteContext'

const NoteItems = (props) => {
    const {note} = props
    const {deleteNote, updateNote} = useContext(NoteContext)

    const handleOnClick = (e) =>{
        console.log(note._id)
    }

    return (
        <div className='container my-3'>
            <div className="card">
                <div className="card-header">
                    {note.tag}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <button className="btn btn-primary mx-2" onClick={handleOnClick}>Read More</button>
                    <button className="btn btn-primary mx-2" onClick={handleOnClick}>Delete</button>
                    <button className="btn btn-primary mx-2" onClick={handleOnClick}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default NoteItems
