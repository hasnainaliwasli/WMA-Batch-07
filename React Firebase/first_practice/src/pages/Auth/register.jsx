import React, { useState } from 'react'
import { Form, Button, Typography, Row, Col, Input } from 'antd'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase'

const { Title } = Typography
const initialState = { fullName: "", email: "", password: "", confirmPassword: "" }

export default function Register() {

    const [state, setState] = useState(initialState)
    const [isProcessing, setIsProcessing] = useState(false)


    const handleChange = (e) => {
        setState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        let { fullName, email, password, confirmPassword } = state

        fullName = fullName.trim()

        if (fullName.length < 3) { window.toastify("Please enter your full name", 'error') }
        if (!window.isEmail(email)) { window.toastify("Please enter a valid email address", "error") }
        if (password.length < 6) { window.toastify("Password must be atleast 6 chars.", "error") }
        if (password !== confirmPassword) { window.toastify("Password doesn't match", "error") }

        setIsProcessing(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("User", user);
                window.toastify("A new user has been successfully registered", 'success')
            })
            .catch((error) => {
                console.log(error.code);
                switch (error.code) {
                    case 'auth/invalid-email':
                        window.toastify("Please Enter a Valid Email Address", 'error')
                        break;
                    case 'auth/email-already-in-use':
                        window.toastify("Email is already in use", 'error')
                        break;

                    default:
                        window.toastify('Something wen wrong while registering the user', 'error')
                }
            })
            .finally(() => {
                setIsProcessing(false)
            })



    }


    return (
        <main className='auth'>
            <div className="card p-3 p-md-4 w-100">
                <Title level={2} className='text-center'>Register</Title>
                <Form layout='vertical' >
                    <Row gutter={[16, 16]} >
                        <Col span={24}>
                            <Input size='large' type="text" placeholder='Enter Your Name' name='fullName' value={state.fullName} onChange={handleChange} />
                        </Col>

                        <Col span={24}>
                            <Input size='large' type='email' placeholder='Enter your Email' name='email' value={state.email} onChange={handleChange} />
                        </Col>

                        <Col span={24}>
                            <Input.Password size='large' placeholder='Type your Password' name='password' value={state.password} onChange={handleChange} />
                        </Col>

                        <Col span={24}>
                            <Input.Password size='large' placeholder='Confirm your Password' name='confirmPassword' value={state.confirmPassword} onChange={handleChange} />
                        </Col>

                        <Col span={24}>
                            <Button type='primary' size='large' onClick={submitHandler} >Register</Button>
                        </Col>
                    </Row>

                </Form>

            </div>
        </main>
    )
}