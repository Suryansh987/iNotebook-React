import React, { useContext } from 'react'
import NoteContext from '../Context/NoteContext'
import NoteItems from './NoteItems'

export default function UserNotes() {
    const {notes , setnotes} = useContext(NoteContext)
    return (
        <>
            {notes.map((value)=>{
                return (<NoteItems key={value._id} noteTitle={value.title} noteTag={value.tag} noteDescription={value.description} />)
            })}
        </>
    )
}
