import React from 'react'
import '../styles/login.scss'
import { Link } from 'react-router-dom'

export default function forgetPass() {
    return (
        <div id='container'>
            <form id='form' className='border p-4 rounded'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" id='btn' class="btn btn-primary text-center">Find Account</button>
                <div id="moveBtn" className='d-flex justify-content-end mt-3 '>
                    <p className='pt-1 '>Want to  </p>
                    <Link to="/">
                    <p className='pt-1 px-1'> Login</p>                       
                    </Link>
                </div>
            </form>
        </div>
    )
}