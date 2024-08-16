import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AntModal from '../changePass'

export default function Header() {

    const navigate = useNavigate()
    
    const [LoggedInUser, setLoggedInUser] = useState(() => {
      
        const savedUsers = localStorage.getItem('LoggedInUser');
        return savedUsers ? JSON.parse(savedUsers) : [];
    });

    const logout = () => {
        localStorage.removeItem('LoggedInUser');
        toast.success("Logout Successful!");
        navigate('/')
    }

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
                            <li className="nav-item"><Link to="/Todo/todo" className="nav-link" id='navLink'>Todos</Link></li>
                            <li className="nav-item"><Link to="/Todo/users" className="nav-link" id='navLink'>Users</Link></li>
                        </ul>


                        <p className='mt-3'>Welcome here Dear <span id='topName'>{LoggedInUser.Name}</span></p>
                        <div className="last">
                            <button id='logoutBtn' className='btn btn-sm btn-primary me-3 ms-1' onClick={logout}>Logout</button>
                            {/* <button id='chngPassBtn' className='btn btn-sm btn-primary ms-3' onClick={changePass}> Change Password</button> */}
                            <AntModal />
                       
                        </div>
                    </div>
                </div>
            </nav>
            <ToastContainer />
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
