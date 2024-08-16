import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [state, setState] = useState({ username: '', email: '', password: '' })
  const navigate = useNavigate()
  const handleOnchange = (e) => setState(s => ({ ...s, [e.target.name]: e.target.value }))
  const userId = () => { return Math.random().toString(32).slice(2) }


  const navigateToLogin = () => {
    navigate("/auth/login")
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let { username, email, password } = state

    if (username < 3) { return window.toastify("Enter your full Name", 'warning') }
    if (password < 6) { return window.toastify("Password must be more than 6 character", 'warning') }
    if (!window.isEmail(email)) { return window.toastify("Enter proper email", 'warning') }

    username = username.trim()
    email = email.trim()

    const existedUser = JSON.parse(localStorage.getItem('Users')) || [];

    const existEmail = existedUser.some(e => e.email === email)
    if (existEmail) { return window.toastify("Email already registred", 'error') }

    const updatedUserList = Array.isArray(existedUser) ? [...existedUser, state] : [state]
    localStorage.setItem('Users', JSON.stringify(updatedUserList))
    navigate('/auth/login')
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 p-4 rounded-4 mainDiv">
          <div className="card p-4 " id='card'>
            <h1 className='card-title text-center' style={{ textDecoration: 'underline' }}>Register</h1>
            <Form
              name="basic"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              initialValues={{ remember: true }}
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}


              >
                <Input name="username" onChange={handleOnchange} />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your Email Address!' }]}

              >
                <Input name="email" onChange={handleOnchange} />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}

              >
                <Input.Password name="password" onChange={handleOnchange} />
              </Form.Item>

              <Form.Item
                className="text-center"
              >
                <Button type="primary" className='w-25' htmlType="submit" onClick={onSubmitHandler}>
                  Register
                </Button >
              </Form.Item>
            </Form>

            <div className='d-flex justify-content-around'><p>Already have an Account? </p><Button className='w-25' onClick={navigateToLogin}>Login</Button></div>

          </div>
        </div>
      </div>
    </div>



  );
}
