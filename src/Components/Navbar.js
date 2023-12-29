import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

// const [state, setstate] = useState()


export default function Navbar() {
    const [state, setstate] = useState('/')
    const location = useLocation()
    useEffect(() => {
      setstate(location.pathname)
    }, [location])
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">iNoteBook</Link> 
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${state==='/'?"active":""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${state==='/usernotes'?"active":""}`} to="/usernotes">Your_Notes</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" data-bs-theme="light">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-primary bg-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
