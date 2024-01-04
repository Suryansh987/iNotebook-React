import React, { useContext } from 'react'
import NoteContext from '../Context/NoteContext'
import NoteItems from './NoteItems'


export default function UserNotes() {
    const { notes } = useContext(NoteContext)
    
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
