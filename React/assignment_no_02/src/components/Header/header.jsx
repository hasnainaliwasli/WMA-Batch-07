import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

    const [users, setUsers] = useState(() => {
        // Load users from local storage or set to an empty array if not available
        const savedUsers = localStorage.getItem('users');
        return savedUsers ? JSON.parse(savedUsers) : [];
    });

    console.log();


    return (
        <div>
            <nav className="navbar navbar-expand-lg custom-navbar" style={{ backgroundColor: 'rgb(128,24,149)' }}>
                <div className="container">
                    <Link className="navbar-brand text-white" id='navBrand' >TODO APP</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item"><Link to="/todo" className="nav-link" id='navLink'>Home</Link></li>
                            <li className="nav-item"><Link to="/todo" className="nav-link" id='navLink'>Todos</Link></li>
                            <li className="nav-item"><Link to="/users" className="nav-link" id='navLink'>Users</Link></li>

                        </ul>
                        <p className='mt-3 me-5'>Welcome here Dear <span id='topName'>{users[0].Name}</span></p>
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
