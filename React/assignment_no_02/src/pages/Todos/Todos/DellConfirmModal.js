import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import TodoTable from './Table';
const DellConfirmModal = (props) => {

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Are you sure you want to delete Todo?');
    const showModal = () => {
        setOpen(true);
    };

    // Logged in users
    const [loggedInUser, setloggedInUser] = useState(() => {
        // Load users from local storage or set to an empty array if not available
        const savedUsers = localStorage.getItem('LoggedInUser');
        return savedUsers ? JSON.parse(savedUsers) : [];
    });

    const handleEdit = (key) => {
        // console.log('Edit todo with key:', key);
        // Implement your edit logic here
    };

    // Todos from local storage
    const [todos, setTodos] = useState(() => {
        // Load users from local storage or set to an empty array if not available
        const savedUsers = localStorage.getItem('Todos');
        return savedUsers ? JSON.parse(savedUsers) : [];
    });

    useEffect(() => {
        localStorage.setItem('Todos', JSON.stringify(todos))
    }, [todos])

    const handleDelete = (key) => {

        setTodos(todos.filter(todo => todo.TodoID !== key));
        localStorage.setItem('Todos', JSON.stringify(todos))

        console.log(todos);
    };

    const handleOk = () => {

        setModalText('Deleting...');
        handleDelete(props.props.key)
        setConfirmLoading(true);

        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
            window.location.reload();
        }, 2000);

    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };
    return (
        <>
            {/* <Button type="primary" onClick={showModal}>
                Delete
            </Button> */}
            <Button onClick={showModal} style={{ width: '103.92px' }} danger>Delete</Button>
            <Modal
                title="Confirm"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
            </Modal>

        </>
    );
};
export default DellConfirmModal;