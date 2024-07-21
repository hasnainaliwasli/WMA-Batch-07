import React, { useState } from 'react'
import UserTable from '../Users/Table'
import { useNavigate } from 'react-router-dom';


export default function Todos() {
    const navigate = useNavigate()

    const [users, setUsers] = useState(() => {
        // Load users from local storage or set to an empty array if not available
        const savedUsers = localStorage.getItem('users');
        return savedUsers ? JSON.parse(savedUsers) : [];
    });


    const addTodo = () => {
        navigate("CreateTodo")
    }


    return (
        <div className='users_container '>

            <div className='container ' id='table'>
                <div style={{ padding: '20px' }}>
                    {/* <div style={{display:'flex',justifyContent:'space-between'}}> */}
                    <h1 className='text-white text-center py-3 ms-4'>All TODOS</h1><button className='btn btn-sm btn-primary' onClick={addTodo} style={{ float: 'right' }}>ADD TODO</button>
                    {/* </div> */}
                    <UserTable users={users} />
                </div>

            </div>
        </div>
    )
}
