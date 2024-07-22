import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoTable from './Table';

export default function Todos() {
    const navigate = useNavigate();

    const [loggedInUser, setloggedInUser] = useState(() => {
        // Load users from local storage or set to an empty array if not available
        const savedUsers = localStorage.getItem('LoggedInUser');
        return savedUsers ? JSON.parse(savedUsers) : [];
    });

    // TODOS From Localstorage
    const [todos, setTodos] = useState(() => {
        // Load todos from local storage or set to an empty array if not available
        const savedTodos = localStorage.getItem('Todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    const addTodo = () => {
        navigate("CreateTodo");
    };

    return (
        <div className='users_container'>
            <div className='container'>
                <div style={{ padding: '20px' }}>
                    {/* Header and Button Container */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', width: '100%' }}>
                        <h1 className='text-white' style={{ flex: 1, textAlign: 'center' }}>All TODOS</h1>
                        <button className='btn btn-sm btn-primary' onClick={addTodo}>ADD TODO</button>
                    </div>
                    
                    {/* TodoTable Component */}
                    <TodoTable todos={todos} loggedInUserId={loggedInUser.id} />
                </div>
            </div>
        </div>
    );
}
