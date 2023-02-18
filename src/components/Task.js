import React, { useState } from 'react';

import TaskDate from './TaskDate';
import './Task.css';

const Task = (props) => {
    const [isComplete, setIsComplete] = useState(false);

    const deleteHandler = () => {
        props.onDelete(props.task.id);
    }

    const completeButtonHandler = () => {
        setIsComplete(prevCondition => {
            return !prevCondition;
        });
    };

    return (
        <div className="task">
            <TaskDate date={props.date} />               
            <h3 
                style={{
                    textDecoration: isComplete ? 'line-through' : 'none', 
                    textDecorationColor: isComplete ? 'red': '',
                    textDecorationThickness: isComplete ? '0.3rem' : ''
                }}
            >{props.title}</h3>
            <div className="task__buttons">
                <button className="task__complete-button" onClick={completeButtonHandler}>&#x2713;</button>
                <button className="task__delete-button" onClick={deleteHandler} >&#x2715;</button>
            </div>
        </div>
    );
}

export default Task;