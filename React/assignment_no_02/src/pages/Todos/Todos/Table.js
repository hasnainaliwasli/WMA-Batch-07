import React from 'react';
import { Table } from 'antd';
import DellConfirmModal from './DellConfirmModal';
import EditModal from './EditModal';

const TodoTable = ({ todos, onEdit, loggedInUserId }) => {
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


                <span className='' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <div style={{ marginRight: 8 }}><EditModal props={record} /></div>
                    <div > <DellConfirmModal props={record} /></div>

                    {/* <Button onClick={() => onEdit(record.key)} style={{ marginRight: 8 }}>Edit</Button> */}
                    {/* <div onClick={() => onDelete(record.key)} >Delete</div> */}
                </span >
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
        <Table className='text-center' columns={columns} dataSource={data} pagination={false} />
    );
};

export default TodoTable;
