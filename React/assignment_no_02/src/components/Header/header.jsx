import React from 'react'
import { Link } from 'react-router-dom'

export default function header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg custom-navbar" style={{ backgroundColor: 'rgb(128,24,149)' }}>
                <div className="container">
                    <a className="navbar-brand text-white" id='navBrand' href="#">TODO APP</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item"><Link to="/todo" active className="nav-link" id='navLink'>Home</Link></li>
                            <li className="nav-item"><Link to="/todo" active className="nav-link" id='navLink'>Todos</Link></li>
                            <li className="nav-item"><Link to="/users" className="nav-link" id='navLink'>Users</Link></li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn border btn-outline-white text-white" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}









// import React from 'react';

// export default function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg custom-navbar">
//             <div className="navbar-brand">BrandName</div>
//             <ul className="navbar-menu">
//                 <li className="navbar-item"><a href="/">Home</a></li>
//                 <li className="navbar-item"><a href="/about">About</a></li>
//                 <li className="navbar-item"><a href="/services">Services</a></li>
//                 <li className="navbar-item"><a href="/contact">Contact</a></li>
//             </ul>
//         </nav>
//     );
// }
