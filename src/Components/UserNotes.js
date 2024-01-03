import React, { useContext } from 'react'
import NoteContext from '../Context/NoteContext'
import NoteItems from './NoteItems'


export default function UserNotes() {
    const { notes } = useContext(NoteContext)
    console.log(notes)
    
    return (
        <>
            <div className="container row-my-3">
            <div className='container'>
            {notes.length===0 && "HI"}
            </div>
            {notes.map((value)=>{
                return (<NoteItems key={value._id} noteTitle={value.title} noteTag={value.tag} noteDescription={value.description} />)
            })}
            </div>
        </>
    )
}
