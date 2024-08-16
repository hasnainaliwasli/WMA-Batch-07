import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import { useAuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'


export default function Login() {
  const [state, setState] = useState({ email: '', password: '' })
  const { dispatch } = useAuthContext()
  const navigate = useNavigate()
  const users = JSON.parse(localStorage.getItem('Users')) || []

  const handleOnchange = (e) => setState(s => ({ ...s, [e.target.name]: e.target.value }))

  const navigateToRegister = () => {
    navigate("/auth/register")
  }

  const onSubmitHandler = () => {
    const { email, password } = state;
    if (!window.isEmail(email)) { return window.toastify("Please enter a valid email address", "warning") }
    if (password.length < 6) { return window.toastify("Password must be more than 6 character.", "warning") }

    const user = users.find(user => user.email === email);

    if (user) {
      if (user.password === password) {
        dispatch({ type: "SET_LOGGED_IN", payload: { user } })
        localStorage.setItem("user", JSON.stringify(user))
      }
      else {
        window.toastify("Incorect Password", 'error')
      }

    }
    else {
      window.toastify("User Not Found", 'error')
    }

  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 p-4 rounded-4 mainDiv">
          <div className="card p-4 " id='card'>
            <h1 className='card-title text-center' style={{textDecoration:'underline'}}>Login</h1>
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
                name="check"
                valuePropName="checked"
              >
                <Checkbox name="check">Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                className="text-center"
              >
                <Button type="primary" htmlType="submit" className='w-25' onClick={onSubmitHandler}>
                  Login
                </Button >
              </Form.Item>
            </Form>

            <div className='d-flex justify-content-around'><p>Don't have an Account? </p><Button className='w-25' onClick={navigateToRegister}>Register</Button></div>
          </div>
        </div>
      </div>
    </div>
  )
}
