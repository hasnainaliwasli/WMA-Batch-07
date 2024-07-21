import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';

const EditModal = (props) => {
    // Built in States for Modal
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Are you sure you want to delete Todo?');
    
    // User Defined States 
    const [editTodo, setEditTodo] = useState(null);

    // Logged in users
    const [loggedInUser, setLoggedInUser] = useState(() => {
        const savedUsers = localStorage.getItem('LoggedInUser');
        return savedUsers ? JSON.parse(savedUsers) : [];
    });

    // Todos from local storage
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('Todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    let key = props.todoId;
    useEffect(() => {
        if (key) {
            const requiredTodo = todos.find(todo => todo.TodoID === key);
            setEditTodo(requiredTodo);
        }
    }, [key, todos]);

    const showModal = () => {
        setOpen(true);
        if (editTodo) {
            console.log(editTodo.Title);
        }
    };

    const handleOk = () => {
        setModalText('Deleting...');
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
            <Button onClick={showModal} style={{ width: '55.47px' }}>Edit</Button>
            <Modal
                title="Edit"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
                {editTodo ? (
                    <input type="text" value={editTodo.Title} />
                ) : (
                    <p>Loading...</p>
                )}
            </Modal>
        </>
    );
};

export default EditModal;
