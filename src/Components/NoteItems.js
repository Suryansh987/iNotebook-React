import React, { useContext, useRef } from 'react'
import NoteContext from '../Context/NoteContext'
import Modal from './Modal'


const NoteItems = (props) => {
    const {note} = props
    const {deleteNote, updateNote} = useContext(NoteContext)
    const ref = useRef(null)

    const handleOnClick = (e) =>{
        deleteNote(note._id)
    }

    const handleOnUpdate = (e)=>{
        ref.current.click()
    }

    

    return (
        <>
        <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#updateModal" data-bs-whatever="@mdo">Open modal</button>
        <Modal note={note}/>
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
                    <button className="btn btn-primary mx-2" onClick={handleOnUpdate}>Update</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default NoteItems
