import React from 'react'
import '../styles/login.scss'

export default function forgetPass() {
  return (
    <div id='container'>
   <form id='form' className='border p-4 rounded'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <button type="submit" id='btn' class="btn btn-primary text-center">Find Account</button>
</form>
    </div>
  )
}