import React, { useState } from 'react';
import Routing from '../../components/Routing/routingProps';
import '../styles/login.scss';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';


export default function ForgetPass() {
    const [email, setEmail] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [isUserFound, setIsUserFound] = useState(false);
    const [showNewPass, setShowNewPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const [users, setUsers] = useState(() => {
        const savedUsers = localStorage.getItem('users');
        return savedUsers ? JSON.parse(savedUsers) : [];
    });

    const navigate = useNavigate();

    const findAccount = (e) => {
        e.preventDefault();
        const user = users.find(user => user.Email === email);

        if (user) {
            toast.success("User Found");
            setIsUserFound(true);
        } else {
            toast.error("User Not Found");
        }
    };

    const changePassword = (e) => {
        e.preventDefault();
        if (newPass !== confirmPass) {
            toast.error("Passwords do not match");
            return;
        }

        if (newPass.length < 8) {
            return toast.warning("Password Must be more than 7 character")
        }

        const updatedUsers = users.map(user => {
            if (user.Email === email) {
                return { ...user, Password: newPass };
            }
            return user;
        });

        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        toast.success("Password changed successfully!");
        setTimeout(() => {
            navigate('/');
        }, 1500);

    };

    const toggleShowNewPass = () => {
        setShowNewPass(!showNewPass);
    };

    const toggleShowConfirmPass = () => {
        setShowConfirmPass(!showConfirmPass);
    };

    return (
        <div id='container'>
            {!isUserFound ? (
                <form id='form' className='border p-4 rounded' onSubmit={findAccount}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <button type="submit" id='btn' className="btn btn-primary text-center">Find Account</button>
                    <Routing classes="d-flex justify-content-end mt-3 me-3" text="Wants to " linkName="Login" path="/" />
                </form>
            ) : (
                <form id='form' className='border p-4 rounded' onSubmit={changePassword}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">New Password</label>
                        <div className="input-group">
                            <input
                                type={showNewPass ? "text" : "password"}
                                value={newPass}
                                className="form-control"
                                id="exampleInputPassword1"
                                onChange={(e) => setNewPass(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={toggleShowNewPass}
                            >{showNewPass ? <EyeInvisibleOutlined /> : <EyeOutlined />}</button>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword2" className="form-label">Confirm New Password</label>
                        <div className="input-group">
                            <input
                                type={showConfirmPass ? "text" : "password"}
                                value={confirmPass}
                                className="form-control"
                                id="exampleInputPassword2"
                                onChange={(e) => setConfirmPass(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={toggleShowConfirmPass}
                            >{showNewPass ? <EyeInvisibleOutlined /> : <EyeOutlined />}</button>
                        </div>
                    </div>
                    <button type="submit" id='btn' className="btn btn-primary text-center">Change Password</button>
                    <Routing classes="d-flex justify-content-end mt-3 me-3" text="Wants to " linkName="Login" path="/" />
                </form>
            )}
            <ToastContainer />
        </div>
    );
}
