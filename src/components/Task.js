import React from 'react';

import './Task.css';

const Tasks = (props) => {
    const clickHandler = () => {
        console.log('clicked!');
    };

    return (
        <div className='task'>
            <div className='left'>
                <h3>{props.title}</h3>
            </div>
            <button onClick={clickHandler} >Delete</button>
        </div>
    );
}

export default Tasks;