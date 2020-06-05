import React from 'react'

function Navbar({title,addContact}) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="navbar-header">
                <span className="navbar-brand mb-0 h1">{title}</span>
                <button className="btn btn-success float-right" onClick={()=>{addContact()}}>ADD</button>
            </div>
        </nav>
    )
}

export default Navbar
