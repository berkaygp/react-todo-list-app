import React from 'react';

import './Task.css';

const Task = (props) => {
    const deleteHandler = () => {
        props.onDelete(props.task.id);
    }

    return (
        <div className='task'>
            <div className='left'>
                <h3>{props.title}</h3>
            </div>
            <button className='task__delete-button' onClick={deleteHandler} >Delete</button>
        </div>
    );
}

export default Task;