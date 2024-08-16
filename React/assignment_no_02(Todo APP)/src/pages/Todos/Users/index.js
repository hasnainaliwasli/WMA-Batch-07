import React, { useState } from 'react'
import UserTable from './Table'

export default function Users() {


    const [users, setUsers] = useState(() => {
        // Load users from local storage or set to an empty array if not available
        const savedUsers = localStorage.getItem('users');
        return savedUsers ? JSON.parse(savedUsers) : [];
    });

    console.log(users);



    return (
        <div className='users_container '>

            <div className='container ' id='table'>
                <div style={{ padding: '20px' }}>
                    <h1 className='text-white text-center py-3 '>All Registered Users</h1>
                    <UserTable users={users} />
                </div>

            </div>
        </div>
    )
}
