import NoteContext from "./NoteContext";
import React, { useState } from 'react'

let notesInitial = []

  
  const NoteState = (props) => {
    const [notes, setnotes] = useState(notesInitial)
    // ADD NOTE 
    const addnote = async(title,description,tag) =>{
      const response = await fetch(process.env.REACT_APP_URL_ADD_NOTES, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4ODU1NjdhNjgxNGY0MmE1YjI3YmM3In0sImlhdCI6MTcwMzQ5NjkzOH0.mNnkr8tYRg1QF9c-ciHQ-FwUdE5WCWorSrpXWwILxiQ" 
        },
        body: JSON.stringify({title,description,tag}),
      });
      const json = await response.json()
      setnotes(notes.concat(json))
    }

    //FETCH NOTE
    const fetchall = async() =>{
      const response = await fetch(process.env.REACT_APP_URL_FETCH_ALL, {
        method: "GET",
      });
      const json = await response.json(); // parses JSON response into native JavaScript objects
      setnotes(json)
    }


    //DELETE NOTE
    const deleteNote = async(id) =>{
      const url = process.env.REACT_APP_URL_DELETE_NOTE
      const response = await fetch(`${url}${id}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4ODU1NjdhNjgxNGY0MmE1YjI3YmM3In0sImlhdCI6MTcwMzQ5NjkzOH0.mNnkr8tYRg1QF9c-ciHQ-FwUdE5WCWorSrpXWwILxiQ" 
        }
      });
      const json = await response.json()
      setnotes(notes.filter((note)=>{
        return note._id!==id
      }))
      console.log(json);
    }

    //UPDATE NOTE
    const updateNote = async(id,updatedNote)=>{
      const url = process.env.REACT_APP_URL_UPDATE_NOTE
      const response = await fetch(`${url}${id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4ODU1NjdhNjgxNGY0MmE1YjI3YmM3In0sImlhdCI6MTcwMzQ5NjkzOH0.mNnkr8tYRg1QF9c-ciHQ-FwUdE5WCWorSrpXWwILxiQ" 
        },
        body: JSON.stringify(updatedNote),
      });
      const json = await response.json()
      console.log(json);
    }
    //NOTE CONTEXT
    return (
        <NoteContext.Provider value={{notes, setnotes, fetchall, addnote, deleteNote, updateNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
