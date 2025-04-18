import React from 'react'
import { Link } from 'react-router-dom'

//this nav bar is not in use its just for other purpose

export default function Navbar() {
  return (
   <>
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="#">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Add other navbar items here if needed */}
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-light me-2" type="button">LogIn</button>
            <button className="btn btn-outline-light" type="button">SignUp</button>
          </div>
        </div>
      </div>
    </nav>

   
   </>
  )
}
