import React,{useContext,useEffect} from 'react'
import Notes from './Notes';
import NoteContext from '../Context/NoteContext';

export default function Notebook() {
    const {notes,fetchall} = useContext(NoteContext)

    useEffect(() => {
      fetchall()
    }, [])
    

    return (
        <>
        
        <div className='container p-2 my-5'>
            <h1 className='my-3 text-center '>Welcome!!</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="button" className="btn btn-primary">Primary</button>
            </div>
            <div className="container row-my-3">
            <div className='container'>
            {notes.length===0 && "HI"}
            </div>
            {notes.map((note)=>{
                return (<Notes key={note._id} noteTitle={note.title} noteTag={note.tag} noteDescription={note.description} />)
            })}
            </div>
        </>
    );
}
