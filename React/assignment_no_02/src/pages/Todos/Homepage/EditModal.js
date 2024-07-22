import React, { useEffect, useState } from 'react';
import { Button, Modal, Input } from 'antd';
import { toast, ToastContainer } from 'react-toastify';

const EditModal = (props) => {
    let key = props.props.key;

    // User Defined States
    const [editTodo, setEditTodo] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');
    const [userID, setUserID] = useState('');
    const [todoID, setTodoID] = useState('');
    const [dateCreated, setDateCreated] = useState('');

    // Built in States for Modal
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Are you sure you want to delete Todo?');

    const showModal = () => {
        setOpen(true);
    };
    // DATE Format
    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    // Logged in users
    const [loggedInUser, setloggedInUser] = useState(() => {
        const savedUsers = localStorage.getItem('LoggedInUser');
        return savedUsers ? JSON.parse(savedUsers) : [];
    });

    // Todos from local storage
    const [todos, setTodos] = useState(() => {
        const savedUsers = localStorage.getItem('Todos');
        return savedUsers ? JSON.parse(savedUsers) : [];
    });

    useEffect(() => {
        if (key) {
            const requiredTodo = todos.find(todo => todo.TodoID === key);
            setEditTodo(requiredTodo);
        }
    }, [key, todos]);

    useEffect(() => {
        if (editTodo) {
            setTitle(editTodo.Title || '');
            setDescription(editTodo.Descriptions || '');
            setLocation(editTodo.Location || '');
            setDate(editTodo.Date || '');
            setStatus(editTodo.Status || '');
            setUserID(editTodo.UserID || '');
            setTodoID(editTodo.TodoID || '');
            setDateCreated(editTodo.DateCreated || '');
        }
    }, [editTodo]);

    const handleOk = () => {

        const updatedTodo = {
            Title: title,
            Descriptions: description,
            Location: location,
            Date: formatDate(date),
            Status: status,
            DateCreated: formatDate(dateCreated),
            UserID: userID,
            TodoID: todoID
        }

        const updatedTodos = todos.map(todo => {
            if (todo.TodoID === key) {
                return updatedTodo;
            }
            return todo;
        });

        setTodos(updatedTodos);
        localStorage.setItem('Todos', JSON.stringify(updatedTodos))
        toast.success('Todo Updated!!!!!!!')
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
            <Button onClick={showModal} style={{ width: '55.47px' }}>Edit</Button>
            <Modal
                title="Edit"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <div className="mb-3">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" value={title} required className="form-control" placeholder='Title' id="title" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea type="textarea" value={description} required className="form-control" placeholder='Description' id="description" aria-describedby="emailHelp" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="mb-3">
                    <div className="mb-3">
                        <label htmlFor="Location" className="form-label">Location</label>
                        <input type="text" required value={location} className="form-control" placeholder='Location' id="Location" onChange={(e) => setLocation(e.target.value)} />
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="Status" className="form-label">Status</label>
                    <select id='Status' className="form-select" aria-label="Default select example" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="" disabled>Select Status</option>
                        <option value="Complete">Complete</option>
                        <option value="InComplete">InComplete</option>
                    </select>
                </div>
            </Modal>
            <ToastContainer />
        </>
    );
};

export default EditModal;
