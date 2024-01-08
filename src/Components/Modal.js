import React, { useContext, useState } from 'react'
import NoteContext from '../Context/NoteContext'


const Modal = (props) => {
    const {updateNote} = useContext(NoteContext)
    const { note } = props
    const [updatedNote, setupdatedNote] = useState({
        uTitle: note.title,
        uDescription:note.description,
        uTag:note.tag
    })

    const handleOnClick = (e)=>{
        setupdatedNote({...note,[e.target.name]:e.target.value})
    }

    const handleUpdate = (e)=>{
        updateNote(note._id,{
            title:updatedNote.uTitle,
            description:updatedNote.uDescription,
            tag:updatedNote.uTag
        })
    }

    return (
        <div>
            <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="updateModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Update Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Title:</label>
                                    <input type="text" className="form-control" id="uTitle" name='uTitle' value={updatedNote.uTitle} onChange={handleOnClick}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message-text" className="col-form-label">Description:</label>
                                    <textarea className="form-control" id="uDescription" name='uDescription' value={updatedNote.uDescription} onChange={handleOnClick}></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Tag:</label>
                                    <input type="text" className="form-control" id="uTag" name='uTag' value={updatedNote.uTag} onChange={handleOnClick}/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancle</button>
                            <button type="button" className="btn btn-primary" onClick={handleUpdate} data-bs-dismiss='modal'>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
