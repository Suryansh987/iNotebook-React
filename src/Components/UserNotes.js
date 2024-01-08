import React, { useContext, useRef } from 'react'
import NoteContext from '../Context/NoteContext'
import NoteItems from './NoteItems'
import Modal from './Modal'


export default function UserNotes() {
    const { notes } = useContext(NoteContext)
    const ref = useRef(null)
    

    return (
        <>
            <div className="container row-my-3">
            <div className='container'>
            {notes.length===0 && "No Notes to View Please add some notes First"}
            {notes.map((note)=>{
                return (<NoteItems key={note._id} note={note} />)
            })}
            </div>
            </div>
        </>
    )
}
