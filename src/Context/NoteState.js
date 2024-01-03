import NoteContext from "./NoteContext";
import React, { useState } from 'react'

let notesInitial = []

  
  const NoteState = (props) => {
    const [notes, setnotes] = useState(notesInitial)

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
      console.log(json);
    }

    const fetchall = async() =>{
      const response = await fetch(process.env.REACT_APP_URL_FETCH_ALL, {
        method: "GET",
      });
      const json = await response.json(); // parses JSON response into native JavaScript objects
      setnotes(json)
    }

    return (
        <NoteContext.Provider value={{notes, setnotes, fetchall, addnote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
