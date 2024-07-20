import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

export default function Home() {

    const todoCard = () => {
        console.log('todo click');
    }
    const userCard = () => {
        console.log(' user click');
    }


    return (
        <div id='Home_container'>

            <div id="todoCards">

                <div className="card-container" role="button" onClick={todoCard}>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="TODOS" src="https://media.istockphoto.com/id/1374485813/vector/3d-white-clipboard-task-management-todo-check-list-with-pencil-efficient-work-on-project.jpg?s=612x612&w=0&k=20&c=oHKBMqTKxzZEkm6k-8I7MGfhpft5DVSeT8qzXZNFoPM=" />}
                    >
                        <Meta className='text-center' style={{ userSelect: 'none' }} title="ALL SAVED TODOS" />
                    </Card>
                </div>


                <div className='card-container' role='button' onClick={userCard}>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="TODOS" id='imageUser' src="https://lajournal.co/wp-content/uploads/2020/07/pinkpeople.png" />}
                    >
                        <Meta className='text-center' style={{ userSelect: 'none' }} title="ALL SAVED USERS" />
                    </Card>
                </div>
            </div>

        </div>

    )
}
