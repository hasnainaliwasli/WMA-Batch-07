import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { toast, ToastContainer } from 'react-toastify';




const App = () => {

    // My created States
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const [users, setUsers] = useState(() => {
        const savedUsers = localStorage.getItem('users');
        return savedUsers ? JSON.parse(savedUsers) : [];
    });
    const [Logeduser, setLogedUser] = useState(() => {
        const savedUsers = localStorage.getItem('LoggedInUser');
        return savedUsers ? JSON.parse(savedUsers) : [];
    });



    // Modal States
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);


    //Modal Function

    const showModal = () => {
        setOpen(true);
    };


    const handleOk = () => {

        // console.log("old", oldPass);
        // console.log('new', newPass);
        // console.log('confirm', confirmPass);


        if (oldPass !== Logeduser.Password) {
            return toast.error("Incorrect Old Password")
        }
        if (newPass !== confirmPass) {
            toast.error("New Passwords and Confirm Password not match");
            return;
        }

        if (newPass.length < 8) {
            return toast.warning("Password Must be more than 7 character")
        }


        const updatedUsers = users.map(user => {
            if (user.id === Logeduser.id) {
                return { ...user, Password: newPass };
            }
            return user;
        })
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        localStorage.setItem('LoggedInUser', JSON.stringify(updatedUsers));

        // Modal Data
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Change Password
            </Button>
            <Modal
                title="Change Password"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" >Old Password</label>
                    <div className="input-group">
                        <input
                          
                            className="form-control"
                            id="exampleInputPassword1"
                            onChange={(e) => setOldPass(e.target.value)}
                            required
                        />
                    </div>
                </div>


                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" >New Password</label>
                    <div className="input-group">
                        <input
                         
                            className="form-control"
                            id="exampleInputPassword1"
                            onChange={(e) => { setNewPass(e.target.value) }}
                            required
                        />
                    </div>
                </div>


                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm New Password</label>
                    <div className="input-group">
                        <input
                       
                            className="form-control"
                            id="exampleInputPassword1"
                            onChange={(e) => { setConfirmPass(e.target.value) }}
                            required
                        />



                        {/* <button
                            type="button"
                            className="btn btn-primary"
                            onClick={toggleShowNewPass}
                        >{showNewPass ? <EyeInvisibleOutlined /> : <EyeOutlined />}</button> */}
                    </div>
                </div>



                <ToastContainer />
            </Modal>
        </>
    );
};
export default App;