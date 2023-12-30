import NoteContext from "./NoteContext";
import React, { useState } from 'react'

let notesInitial = []

  
  const NoteState = (props) => {
    const [notes, setnotes] = useState(notesInitial)

    const addnote = async(title,description,tag) =>{
      const response = await fetch(process.env.REACT_APP_URL_ADD_NOTES, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4ODU1NjdhNjgxNGY0MmE1YjI3YmM3In0sImlhdCI6MTcwMzQ5NjkzOH0.mNnkr8tYRg1QF9c-ciHQ-FwUdE5WCWorSrpXWwILxiQ" 
        },
        body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
      });
    }

    const fetchall = async() =>{
      const response = await fetch(process.env.REACT_APP_URL_FETCH_ALL, {
        method: "GET",
      });
      const json = await response.json(); // parses JSON response into native JavaScript objects
      setnotes(json)
    }

    return (
        <NoteContext.Provider value={{notes, setnotes, fetchall}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
