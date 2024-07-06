import React from 'react'
import '../styles/login.scss'

export default function login() {
  return (
    <div id='container'>
   <form id='form' className='border p-4 rounded'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
 
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" id='btn' class="btn btn-primary text-center">Login</button>
</form>
    </div>
  )
}
