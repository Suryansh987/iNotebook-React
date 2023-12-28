import NoteContext from "./NoteContext";
import React, { useState } from 'react'


// API CALL FOR FETCHING USERS
const users = ()=>{
    
}

const NoteState = (props) => {
    
    const [state, setstate] = useState({
        "name":"jhs",
        "Class":"djwed"
    })
    // const state = "Hello"
    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
