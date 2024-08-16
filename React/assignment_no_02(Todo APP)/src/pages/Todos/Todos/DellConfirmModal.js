import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { toast, ToastContainer } from 'react-toastify';
const DellConfirmModal = (props) => {

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Are you sure you want to delete Todo?');
    const showModal = () => {
        setOpen(true);
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
        toast.error('Todo Deleted.!!!')
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
            <ToastContainer />
        </>
    );
};
export default DellConfirmModal;