import React from 'react';
import { Table, Button } from 'antd';

const TodoTable = ({ todos, onEdit, onDelete }) => {
    const columns = [
        {
            title: '#',
            dataIndex: 'index',
            key: 'index',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Date Created',
            dataIndex: 'dateCreated',
            key: 'dateCreated',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <Button onClick={() => onEdit(record.key)} style={{ marginRight: 8 }}>Edit</Button>
                    <Button onClick={() => onDelete(record.key)} danger>Delete</Button>
                </span>
            ),
        },
    ];

    const data = todos.map((todo, index) => ({
        key: todo.TodoID,
        index: index + 1,
        title: todo.Title,
        description: todo.Descriptions,
        location: todo.Location,
        status: todo.Status,
        dateCreated: todo.DateCreated,
    }));

    return (
        <Table columns={columns} dataSource={data} pagination={false} />
    );
};

export default TodoTable;
