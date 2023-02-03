import React from 'react';

import TaskDate from './TaskDate';
import './Task.css';

const Task = (props) => {
    const deleteHandler = () => {
        props.onDelete(props.task.id);
    }

    return (
        <div className='task'>
            <TaskDate date={props.date} />
            <div className='left'>               
                <h3>{props.title}</h3>
            </div>
            <button className='task__delete-button' onClick={deleteHandler} >Delete</button>
        </div>
    );
}

export default Task;