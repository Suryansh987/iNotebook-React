import React from 'react'

const NoteItems = (props) => {
    const {noteTitle, noteTag, noteDescription} = props
    return (
        <div className='container my-3'>
            <div className="card">
                <div className="card-header">
                    {noteTag}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{noteTitle}</h5>
                    <p className="card-text">{noteDescription}</p>
                    <a href="/" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NoteItems
