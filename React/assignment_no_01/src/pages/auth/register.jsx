import React from 'react'
import '../styles/register.scss'
import { Link } from 'react-router-dom'

export default function register() {
  return (
    <div id='container'>
      <form id='form' className='border p-4 rounded'>
        <div class="mb-3">
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="exampleInputPassword1" />
          </div>
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" id='btn' class="btn btn-primary text-center">Register</button>
        <div id="moveBtn" className='d-flex justify-content-center mt-3 '>
          <p className='pt-1 px-1 '>Already have an Account? </p>
          <Link to="/">
            <p class="text-center pt-1">Login</p>
          </Link>
        </div>
      </form>
    </div>
  )
}
