import NoteContext from "./NoteContext";
import React, { useState } from 'react'

const notes = [
    {
      "_id": "658855b6a6814f42a5b27bcc",
      "userid": "65885567a6814f42a5b27bc7",
      "title": "Prep for Exam",
      "description": "Morning 11 AM and Evening 8PM",
      "tag": "Genral",
      "Date": "2023-12-24T16:00:54.891Z",
      "__v": 0
    },
    {
      "_id": "65894d060eaaed88454779ac",
      "userid": "65885567a6814f42a5b27bc7",
      "title": "Talk",
      "description": "At 3pm",
      "tag": "Genral",
      "Date": "2023-12-25T09:36:06.781Z",
      "__v": 0
    },
    {
      "_id": "65894d1e0eaaed88454779ae",
      "userid": "65885567a6814f42a5b27bc7",
      "title": "Talk to someone",
      "description": "At 8am",
      "tag": "Genral",
      "Date": "2023-12-25T09:36:30.907Z",
      "__v": 0
    }
  ]

// API CALL FOR FETCHING USERS
// const users = ()=>{
    
// }

const NoteState = (props) => {
    
    const [state, setstate] = useState(notes)
    // const state = "Hello"
    return (
        <NoteContext.Provider value={{state, setstate}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
