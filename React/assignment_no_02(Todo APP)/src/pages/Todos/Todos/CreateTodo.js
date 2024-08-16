import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

export default function CreateTodo() {


    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState('')
    const [status, setStatus] = useState('')

    // Logged in users 

    const [logedUsers, setlogedUsers] = useState(() => {
        // Load users from local storage or set to an empty array if not available
        const savedUsers = localStorage.getItem('LoggedInUser');
        return savedUsers ? JSON.parse(savedUsers) : [];
    });

    // TODOS From LocalStorage
    const [todos, setTodos] = useState(() => {
        // Load users from local storage or set to an empty array if not available
        const savedUsers = localStorage.getItem('Todos');
        return savedUsers ? JSON.parse(savedUsers) : [];
    });

    // Save Todos in LocalStorage
    useEffect(() => {
        localStorage.setItem('Todos', JSON.stringify(todos))
    }, [todos])


    // DATE Format
    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    const AddTodo = (e) => {
        e.preventDefault()
        const todoId = () => { return Math.random().toString(32).slice(2) }
        const currentDate = new Date();

        let todo = {
            Title: title,
            Descriptions: description,
            Location: location,
            Date: formatDate(date),
            Status: status,
            DateCreated: formatDate(currentDate),
            UserID: logedUsers.id,
            TodoID: todoId()

        }

        setTodos((prevTodos) => [...prevTodos, todo])
        toast.success('TODO Added Successfully!!!!!')
        setTimeout(() => {
            navigate('/Todo/todo')
        }, 2000);
    }

    const cancelHandler = () => {
        navigate('/Todo/todo')
    }

    return (
        <div id='createTodo'>
            <form id='formTodo' className='border p-4 rounded' onSubmit={AddTodo} >
                <div className="mb-3">
                    <div className="mb-3">

                        <input type="text" required className="form-control" placeholder='Title' id="exampleInputName1" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <textarea type="textarea" required className="form-control" placeholder='Description' id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="mb-3">
                    <div className="mb-3">
                        <input type="text" required className="form-control" placeholder='Location' id="exampleInputName1" onChange={(e) => setLocation(e.target.value)} />
                    </div>
                    <input type="date" required className="form-control" placeholder='Date' id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="mb-3">
                    <div className="mb-3">
                        <select className="form-select" aria-label="Default select example" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="" disabled>Select Status</option>
                            <option value="Complete">Complete</option>
                            <option value="InComplete">InComplete</option>
                        </select>
                    </div>

                </div>
                <div className="flex text-center ">
                    <button type="submit" id='btn' className="btn btn-primary text-center " >ADD TODO </button>
                    <button type="button" id='btn' onClick={cancelHandler} className="btn btn-danger text-center ms-3" >CANCEL </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}
