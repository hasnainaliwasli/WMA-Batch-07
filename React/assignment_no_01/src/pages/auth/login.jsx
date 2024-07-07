import React from 'react'
import '../styles/login.scss'
import Routing from '../../components/Routing/routing'

export default function Login() {

  const loginHandle = (e) => {
    e.preventDefault()
    // console.log(users);
  }



  return (
    <div id='container' onSubmit={loginHandle}>
      <form id='form' className='border p-4 rounded'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>


        <Routing classes="d-flex justify-content-end me-3" text="" linkName="Forgot Password ?" path="/forgetPass" />
        <button type="submit" id='btn' className="btn btn-primary text-center">Login</button>
        <Routing classes="d-flex justify-content-center mt-3" text="Don't have an Account?" linkName="Register" path="/register" />

      </form>
    </div>
  )
}
