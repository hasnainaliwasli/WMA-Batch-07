import React, { useState } from 'react'
import { useAuthContext } from '../../context/AuthContext'

export default function User() {
  const { handleLogout } = useAuthContext()

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  console.log(user);

  const changePass = () => {
    console.log("Change Password Handle");

  }

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row justify-content-center w-100">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card p-4">
            <h1 className='text-center'>{user.username}</h1>
            <div className='d-flex flex-column flex-sm-row justify-content-between align-items-center mb-4'>
              <h4 className='mb-2 mb-sm-0'>{user.email}</h4>
              <button className='btn btn-primary btn-md mt-2 mt-sm-0' onClick={changePass}>Change Password</button>
            </div>
            <div className='d-flex justify-content-center'>
              <button className='btn btn-danger w-100 w-sm-75 w-md-50 mb-3' onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>




  )
}
