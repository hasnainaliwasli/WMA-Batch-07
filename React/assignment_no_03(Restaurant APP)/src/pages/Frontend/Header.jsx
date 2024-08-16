import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {



  return (
    <>
      <nav className="navbar navbar-expand-lg  headerFooter">
        <div className="container">
          <Link className="navbar-brand" href="#" style={{color:'white'}}>FoodPoint</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse container" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link"aria-current="page" to="/" >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="cart">Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="user">User</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact-us">Contact US</Link>
              </li>
              
             
            </ul>
            <form className="d-flex">
                <button className="btn btn-outline-success"style={{color:'white'}}>Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
