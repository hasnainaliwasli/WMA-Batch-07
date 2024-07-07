import React from 'react'
import '../styles/login.scss'
import Routing from '../../components/Routing/routing'

export default function ForgetPass() {
    return (
        <div id='container'>
            <form id='form' className='border p-4 rounded'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" id='btn' className="btn btn-primary text-center">Find Account</button>

                <Routing classes="d-flex justify-content-end mt-3 me-3" text="Wants to  " linkName="Login" path="/" />
            </form>
        </div>
    )
}