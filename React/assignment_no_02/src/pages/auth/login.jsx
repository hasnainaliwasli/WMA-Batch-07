import React from 'react'
import '../styles/login.scss'
import Routing from '../../components/Routing/routingProps'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';



export default function Login() {

  let navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false)

  const [users, setUsers] = useState(() => {
    // Load users from local storage or set to an empty array if not available
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });


  const LoginHandle = (e) => {
    e.preventDefault()

    if (!email || !password) {
      return toast.warning("Please fill all the input fields")
    }

    let user = users.find(user => user.Email === email && user.Password === password)

    if (user) {
      toast.success("Login Successfull!!")
      localStorage.setItem('LoggedInUser', JSON.stringify(user));
      navigate('/todo')

    }
    else {
      toast.error("Invalid Email or Password")
    }
    setEmail('')
    setPassword('')
  }

  const toggleShowPass = () => {
    setShowPass(!showPass)
  }




  return (
    <div id='container' onSubmit={LoginHandle}>
      <form id='form' className='border p-4 rounded'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { setEmail(e.target.value) }} />

        </div>

        <div className="mb-3">

          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <div className="input-group">
            <input type={showPass ? "text" : "password"} value={password} className="form-control" id="exampleInputPassword1" onChange={(e) => { setPassword(e.target.value) }} />
            <button
              type="button"
              className="btn btn-primary"
              onClick={toggleShowPass}
            >{showPass ? <EyeInvisibleOutlined /> : <EyeOutlined />}</button>
          </div>
        </div>



        <Routing classes="d-flex justify-content-end me-3" text="" linkName="Forgot Password ?" path="/forgetPass" />
        <button type="submit" id='btn' className="btn btn-primary text-center">Login</button>
        <Routing classes="d-flex justify-content-center mt-3" text="Don't have an Account?" linkName="Register" path="/register" />

      </form>
      <ToastContainer />
    </div>
  )
}
