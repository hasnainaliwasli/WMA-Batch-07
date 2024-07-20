import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const App = () => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    // const [modalText, setModalText] = useState('Content of the modal');
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        // setModalText('The modal will be closed after two seconds');
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
                    <label htmlFor="exampleInputPassword1" className="form-label">Old Password</label>
                    <div className="input-group">
                        <input
                            // type={showNewPass ? "text" : "password"}
                            // value={newPass}
                            className="form-control"
                            id="exampleInputPassword1"
                            // onChange={(e) => setNewPass(e.target.value)}
                            required
                        />
                    </div>
                </div>


                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">New Password</label>
                    <div className="input-group">
                        <input
                            // type={showNewPass ? "text" : "password"}
                            // value={newPass}
                            className="form-control"
                            id="exampleInputPassword1"
                            // onChange={(e) => setNewPass(e.target.value)}
                            required
                        />
                    </div>
                </div>


                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm New Password</label>
                    <div className="input-group">
                        <input
                            // type={showNewPass ? "text" : "password"}
                            // value={newPass}
                            className="form-control"
                            id="exampleInputPassword1"
                            // onChange={(e) => setNewPass(e.target.value)}
                            required
                        />



                        {/* <button
                            type="button"
                            className="btn btn-primary"
                            onClick={toggleShowNewPass}
                        >{showNewPass ? <EyeInvisibleOutlined /> : <EyeOutlined />}</button> */}
                    </div>
                </div>




            </Modal>
        </>
    );
};
export default App;