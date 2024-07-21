import React, { useState } from 'react'
import UserTable from '../Users/Table'
import { useNavigate } from 'react-router-dom';
import TodoTable from './Table';


export default function Todos() {
    const navigate = useNavigate()

    const [users, setUsers] = useState(() => {
        // Load users from local storage or set to an empty array if not available
        const savedUsers = localStorage.getItem('users');
        return savedUsers ? JSON.parse(savedUsers) : [];
    });


    // TODOS From Localstorage
    const [todos, setTodos] = useState(() => {
        // Load users from local storage or set to an empty array if not available
        const savedUsers = localStorage.getItem('Todos');
        return savedUsers ? JSON.parse(savedUsers) : [];
    });


    const addTodo = () => {
        navigate("CreateTodo")
    }

    // For Table 
    const handleEdit = (key) => {
        // console.log('Edit todo with key:', key);
        // Implement your edit logic here
    };

    const handleDelete = (key) => {
        console.log('Delete todo with key:', key);
        // Implement your delete logic here
        // setTodos(todos.filter(todo => todo.TodoID !== key));
    };


    return (
        <div className='users_container '>

            <div className='container '>
                <div style={{ padding: '20px' }}>
                    {/* <div style={{display:'flex',justifyContent:'space-between'}}> */}
                    <h1 className='text-white text-center pt-3 ms-4'>All TODOS</h1><button className='btn btn-sm btn-primary mb-2' onClick={addTodo} style={{ float: 'right' }}>ADD TODO</button>
                    {/* </div> */}
                    {/* <UserTable users={users} /> */}
                    <TodoTable todos={todos} onEdit={handleEdit} onDelete={handleDelete} />
                </div>

            </div>
        </div>
    )
}
