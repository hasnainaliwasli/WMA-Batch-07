import React from 'react';
import { Table, Button } from 'antd';
import DellConfirmModal from './DellConfirmModal';

const TodoTable = ({ todos, onEdit, loggedInUserId, onDelete }) => {
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


                <span style={{ display: 'flex' }}>
                    <Button onClick={() => onEdit(record.key)} style={{ marginRight: 8 }}>Edit</Button>
                    <div ><DellConfirmModal props={record} /></div>
                    {/* <div onClick={() => onDelete(record.key)} >Delete</div> */}
                </span>
            ),
        },
    ];



    const filteredTodos = todos.filter(todo => todo.UserID === loggedInUserId);

    const data = filteredTodos.map((todo, index) => ({
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
