import React from 'react'
import '../styles/login.scss'
import { Link } from 'react-router-dom'

export default function login() {
  return (
    <div id='container'>
      <form id='form' className='border p-4 rounded'>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <div id="moveBtn" className='d-flex justify-content-end '>
          <Link to="/forgetPass">
            {/* <button type="submit" class="btn btn-primary text-center btn-sm w-2 mx-3">Register</button> */}
            <p className='ms-3'>Forget Password?</p>

          </Link>
        </div>
        <button type="submit" id='btn' class="btn btn-primary text-center">Login</button>


        <div id="moveBtn" className='d-flex justify-content-center mt-3 '>
          <p className='pt-1 px-1 '>Don't have an Account? </p>
          <Link to="/register">
            <p class="text-center pt-1">Register</p>
          </Link>
        </div>
      </form>
    </div>
  )
}
