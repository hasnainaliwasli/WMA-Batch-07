import React, { useEffect, useState } from 'react'
import '../styles/register.scss'
import Routing from '../../components/Routing/routing'

export default function Register() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [users, setUsers] = useState([])


  const registerHandle = (e) => {
    e.preventDefault()
    let user = {
      Email: email,
      Name: name,
      Password: password
    }
    setUsers((prevUsers) => [...prevUsers, user])
  }

  useEffect(() => {
    console.log(users);
  }, [users])


  return (
    <div id='container'>
      <form id='form' className='border p-4 rounded' onSubmit={registerHandle}>
        <div className="mb-3">
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="exampleInputName1" onChange={(e) => { setName(e.target.value) }} />
          </div>
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { setEmail(e.target.value) }} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => { setPassword(e.target.value) }} />
        </div>
        <button type="submit" id='btn' className="btn btn-primary text-center" >Register</button>

        <Routing classes="d-flex justify-content-center mt-3" text="Already have an Account? " linkName="Login" path="/" />
      </form>
    </div>
  )
}
