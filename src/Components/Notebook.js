import React, { useContext, useEffect, useState } from 'react'
import Notes from './Notes';
import NoteContext from '../Context/NoteContext';
import { Link } from 'react-router-dom';


export default function Notebook() {
    const { notes, fetchall, addnote } = useContext(NoteContext)
    const displaySize = 3
    const displayNotes = notes.slice(0, displaySize)
    const [note, setnote] = useState({
        title: "",
        description: "",
        tag: ""
    })
    useEffect(() => {
        fetchall()
    }, [])

    const handleOnChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (!note.tag) {
            addnote(note.title, note.description)
        }
        else {
            addnote(note.title, note.description, note.tag)
        }
    }


    return (
        <>
            <form onSubmit={handleOnSubmit} noValidate>
                <div className='container p-2 my-5'>
                    <h1 className='my-3 text-center '>Welcome!!</h1>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" onChange={handleOnChange} value={note.title} placeholder="Enter your Title here..." autoComplete='true' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" id="description" name='description' onChange={handleOnChange} rows="3" value={note.description} placeholder='Enter Your Description Here...' autoComplete='true'></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name="tag" onChange={handleOnChange} value={note.tag} placeholder="Enter your Tag here..." autoComplete='true' />
                    </div>
                    <button disabled={!note.title && !note.description} type="submit" className="btn btn-primary">Add Note</button>
                </div>
            </form>
            <div className="container row-my-3">
                <div className='container'>
                    {notes.length === 0 ? "Add some Notes First" : 
                    displayNotes.map((note) => {
                        return (<Notes key={note._id} noteTitle={note.title} noteTag={note.tag} noteDescription={note.description} />)
                    })}
                </div>
                <div className="d-flex justify-content-center my-5">
                    <Link to='/usernotes' className="btn btn-primary justify-content-center">View All</Link>
                </div>
            </div>
        </>
    );
}
