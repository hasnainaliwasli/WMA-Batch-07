import React from 'react';
import { Table } from 'antd';
import DellConfirmModal from './DellConfirmModal';
import EditModal from './EditModal';

const TodoTable = ({ todos, loggedInUserId }) => {
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
        <div className='d-flex justify-content-evenly'>
          <EditModal props={record} />
          <DellConfirmModal props={record} />
        </div>
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
    <div className="table-responsive">
     
      <Table className='text-center' columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default TodoTable;
