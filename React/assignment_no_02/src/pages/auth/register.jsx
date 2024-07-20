import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/register.scss'
import Routing from '../../components/Routing/routingProps'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

export default function Register() {

  const navigate = useNavigate();

  const id =()=> Math.random()

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showpass, setShowpass] = useState(false)

  const [users, setUsers] = useState(() => {
    // Load users from local storage or set to an empty array if not available
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  useEffect(() => {
    // Save users to local storage whenever they change
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  // Email Validation Function
  let Regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  function isEmail(email) {
    return Regex.test(email);
  }

  const registerHandle = (e) => {

    e.preventDefault()

    if (email === '' || password === '' || name === '') {
      toast.warning("Please fill all the input fields");
    } else {
      let trimedName = name.trim()
      let trimedEmail = email.trim()
      if (!isEmail(trimedEmail)) {
        return toast.error("Please Enter Valid Email Address")
      }
      if (password.length < 8) {
        return toast.warning("Password Must be more than 7 character")
      }

      let alreadyEmail = users.find(user => user.Email === trimedEmail)
      if (alreadyEmail) {
        return toast.error("Email Already Exists")
      }

      let user = {
        Email: trimedEmail,
        Name: trimedName,
        Password: password,
      };
      setUsers((prevUsers) => [...prevUsers, user]);
      toast.success("User registered successfully!");

      setEmail('');
      setName('');
      setPassword('');

      setTimeout(() => {
        navigate('/')
      }, 1000);

    }
  }

  const toglePassShow = () => {
    setShowpass(!showpass)
  }


  return (
    <div id='container'>
      <form id='form' className='border p-4 rounded' onSubmit={registerHandle}>
        <div className="mb-3">
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="exampleInputName1" value={name} onChange={(e) => { setName(e.target.value) }} />
          </div>
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { setEmail(e.target.value) }} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>

          <div className="input-group">
            <input type={showpass ? "Text" : "password"} value={password} className="form-control" id="exampleInputPassword1" onChange={(e) => { setPassword(e.target.value) }} />
            <button
              type='button'
              className='btn btn-primary'
              onClick={toglePassShow}

            >
              {showpass ? <EyeInvisibleOutlined /> : <EyeOutlined />}
            </button>

          </div>
        </div>
        <button type="submit" id='btn' className="btn btn-primary text-center" >Register</button>


        <Routing classes="d-flex justify-content-center mt-3" text="Already have an Account? " linkName="Login" path="/" />
      </form>
      <ToastContainer />
    </div>
  )
}
