import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

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
                        <form className="d-flex" role="search" data-bs-theme="dark">
                            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
                                <Link to='/login' className="btn btn-primary mx-2" type="submit">Login</Link>
                                <Link to='/signup' className="btn btn-primary mx-2" type="submit">Signup</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
