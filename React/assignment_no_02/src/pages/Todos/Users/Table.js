// src/components/UserTable.js

import React from 'react';
import { Table } from 'antd';

const UserTable = ({ users }) => {
    const columns = [
        {
            title: '#',
            dataIndex: 'index',
            key: 'index',
        },
        {
            title: 'User Name',
            dataIndex: 'name',
            key: 'name',
        },
    ];

    const data = users.map((user, index) => ({
        key: index,
        index: index + 1,
        name: user.Name,
    }));

    return (
        <Table columns={columns} dataSource={data} pagination={false} />
    );
};

export default UserTable;
